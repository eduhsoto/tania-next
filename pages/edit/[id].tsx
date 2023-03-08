import { getDoc, updateDoc, doc, type DocumentData } from 'firebase/firestore'
import { useForm, type SubmitHandler } from 'react-hook-form'
import { db, updateloadFile } from '@/confirebase/conection'
import { getDownloadURL } from 'firebase/storage'
import { useRouter } from 'next/router'
import type React from 'react'
import { useState, useEffect } from 'react'
import { Button, GroupForm, LoginDiv } from '@/styles/styled-components/Login'
import { FormAdd } from '@/styles/styled-components/dashboard/sub/AddItem'
import Spinner from '@/components/Spinner'
import Image from 'next/image' 

interface Inputs {
  image: FileList
  link: string
  nameP: string
  category: string
  description: string
}

const EditItem = (): JSX.Element => {
  const { push, query } = useRouter()
  const { id } = query
  const idString = id as string
  const [previewImg, setPreviewImg] = useState<string | null>(null)
  const [validationImg, setValidationImg] = useState(false)
  const [itemIdImg, setIdUrlImg] = useState<DocumentData | string>()
  const [loading, setLoading] = useState(true)
  // const fileInputRef = useRef<HTMLInputElement>(null)
  const {
    register,
    formState: { errors },
    handleSubmit,
    reset,
    setValue,
  } = useForm<Inputs>()

  useEffect(() => {
    const getItem = async (idString: string): Promise<void> => {
      const data = await getDoc(doc(db, 'item', idString))
      if (data.exists()) {
        setIdUrlImg(data.data().deleteImage as string)
        setPreviewImg(data.data().imageUrl as string)
        setValue('link', data.data().url as string)
        setValue('nameP', data.data().title as string)
        setValue('category', data.data().category as string)
        setValue('description', data.data().description as string)
        setLoading(false)
        // const itemFile = setFile(data.data().deleteImage as string, data.data().nameImg as string)
        // const pathReference = ref(storage, data.data().deleteImage as string)
        // const fileBlob = await getBlob(pathReference)
        // const file = new File([fileBlob], data.data().nameImg as string)
        // const container = new DataTransfer()
        // container.items.add(file)
        // if (fileInputRef.current !== null) {
        //   fileInputRef.current.files = container.files;
        // }
      } else {
        console.log('no existe')
      }
    }
    if (idString !== undefined) {
      void getItem(idString)
    }
  }, [idString, setValue])

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
        if (idString !== undefined && itemIdImg !== undefined) {
          const snapshot = await updateloadFile(
            data.image[0],
            itemIdImg as string
          )
          const idImage = snapshot.metadata.fullPath
          const getURl = await getDownloadURL(snapshot.ref)
          const item = doc(db, 'item', idString)
          const nameIMG = data.image[0].name
          await updateDoc(item, {
            url: data.link,
            title: data.nameP,
            category: data.category,
            description: data.description,
            imageUrl: getURl,
            deleteImage: idImage,
            nameImg: nameIMG
          })
          reset()
          void push('/dashboard')
        }
      } catch (e) {
        console.log(e)
      }
    }
  }

  return (
    <LoginDiv>
      <FormAdd onSubmit={handleSubmit(onSubmit)}>
        <h1>Editar item</h1>
        {loading && <Spinner />}
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

export default EditItem
