import { collection, addDoc } from 'firebase/firestore'
import { useForm, type SubmitHandler } from 'react-hook-form'
import { db, uploadFile } from '@/confirebase/conection'
import { getDownloadURL } from 'firebase/storage'
import { useRouter } from 'next/router'
import type React from 'react'
import { useState } from 'react'
import { Button, GroupForm, LoginDiv } from '@/styles/styled-components/Login'
import { FormAdd } from '@/styles/styled-components/dashboard/sub/AddItem'
import Image from 'next/image'

interface Inputs {
  image: FileList
  link: string
  nameP: string
  category: string
  description: string
}

const AddItem = (): JSX.Element => {
  const { push } = useRouter()
  const [previewImg, setPreviewImg] = useState<string | null>(null)
  const [validationImg, setValidationImg] = useState(false)

  const {
    register,
    formState: { errors },
    handleSubmit,
    reset,
  } = useForm<Inputs>()

  const itemCollection = collection(db, 'item')

  const handleImage = (e: React.ChangeEvent<HTMLInputElement>): void => {
    const file = e.target.files
    if (file != null) {
      const imageFile = file[0]
      const reader = new FileReader()
      reader.onload = () => {
        const result = reader.result as string
        setPreviewImg(result)
      }
      reader.readAsDataURL(imageFile)
    }
  }

  const onSubmit: SubmitHandler<Inputs> = async (data) => {
    if (
      data.image[0].type !== 'image/jpeg' &&
      data.image[0].type !== 'image/png' &&
      data.image[0].type !== 'image/svg+xml'
    ) {
      setValidationImg(true)
    } else {
      try {
        const snapshot = await uploadFile(data.image[0])
        const idImage = snapshot.metadata.fullPath
        const getURl = await getDownloadURL(snapshot.ref)
        await addDoc(itemCollection, {
          url: data.link,
          title: data.nameP,
          category: data.category,
          description: data.description,
          imageUrl: getURl,
          deleteImage: idImage,
        })
        reset()
        void push('/dashboard')
      } catch (e) {
        console.log(e)
      }
    }
  }

  return (
    <LoginDiv>
      <FormAdd onSubmit={handleSubmit(onSubmit)}>
        <h1>Agregar nuevo item</h1>
        <GroupForm>
          {previewImg != null && (
            <div>
              <Image src={previewImg} alt='preview' width={272} height={172} />
            </div>
          )}
          <input
            type='file'
            {...register('image', {
              required: true,
            })}
            onChange={handleImage}
          />
          {validationImg && (
            <p>Formato de imagen no válido, solo suba jpg/png/svg</p>
          )}
          {errors.image?.type === 'required' && <p>La imagen es requerida</p>}
        </GroupForm>
        <GroupForm>
          <label htmlFor='link'>Enlace al portafolio</label>
          <input
            type='text'
            {...register('link', {
              required: true,
              pattern: /^https?:\/\/[\w]+(\.[\w]+)+[/#?]?.*$/i,
            })}
            placeholder='https://www.page.domain/item'
          />
          {errors.link?.type === 'required' && <p>El enlace es requerido</p>}
          {errors.link?.type === 'pattern' && <p>Ingrese un enlace válido</p>}
        </GroupForm>
        <GroupForm>
          <label htmlFor='nameP'>Nombre del proyecto</label>
          <input
            type='text'
            {...register('nameP', {
              required: true,
            })}
          />
          {errors.nameP?.type === 'required' && (
            <p>El nombre del proyecto es requerido</p>
          )}
        </GroupForm>
        <GroupForm>
          <label htmlFor='pass'>Categoría</label>
          <input
            type='text'
            {...register('category', {
              required: true,
            })}
            placeholder='Diseño UX...'
          />
          {errors.category?.type === 'required' && (
            <p>La categoría es requerida</p>
          )}
        </GroupForm>
        <GroupForm>
          <label htmlFor='pass'>Descripción</label>
          <textarea
            {...register('description', {
              required: true,
            })}
            placeholder='Escribe una descripción'
          />
          {errors.description?.type === 'required' && (
            <p>La descripción es requerida</p>
          )}
        </GroupForm>
        <Button type='submit'>Agregar</Button>
      </FormAdd>
    </LoginDiv>
  )
}

export default AddItem
