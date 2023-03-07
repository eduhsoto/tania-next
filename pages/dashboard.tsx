import Image from 'next/image'
import { useRouter } from 'next/router'
import { deleteDoc, doc, collection, onSnapshot } from 'firebase/firestore'
import { db, storage } from '@/confirebase/conection'
import { deleteObject, ref } from 'firebase/storage'
import { useAuth, type AuthContextModel } from '@/context/authContext'
import { useEffect, useState } from 'react'
import {
  ButtonDas,
  LinkEdit,
  Table,
  TopNav,
  Wrapper,
  LinkAdd,
  LinkPor,
  H1Por,
} from '@/styles/styled-components/dashboard/Dashboard'
import Spinner from '@/components/Spinner'

interface itemType {
  id: string
  url: string
  title: string
  category: string
  description: string
  imageUrl: string
  deleteImage: string
}

const Dashboard = (): JSX.Element => {
  const { logOut } = useAuth() as AuthContextModel
  const { push } = useRouter()
  const [items, setItem] = useState<itemType[]>([])
  const [loading, setLoading] = useState(true)

  const handleLogout = async (): Promise<void> => {
    if (window.confirm('¿Estas segura de cerrar sesión?')) {
      await logOut()
      void push('/login')
    }
  }

  const deleteItem = async (id: string, deleteImage: string): Promise<void> => {
    if (window.confirm('¿Estas segura de eliminar los datos de este item?')) {
      const item = doc(db, 'item', id)
      const deleteImg = ref(storage, deleteImage)
      await deleteDoc(item)
      await deleteObject(deleteImg)
    }
  }

  useEffect(() => {
    const unsubscribe = onSnapshot(collection(db, 'item'), (query) => {
      const itemData = query.docs.map((doc) => ({
        ...doc.data(),
        id: doc.id,
      })) as itemType[]
      setItem(itemData)
      setLoading(false)
    })
    return unsubscribe
  }, [])

  return (
    <div>
      <TopNav>
        <h1>Hola Tania</h1>
        <LinkAdd href='/additem'>Crear nuevo item</LinkAdd>
        <div>
          <ButtonDas onClick={handleLogout}>Cerrar sesión</ButtonDas>
        </div>
      </TopNav>
      <Wrapper>
        <Table>
          <thead>
            <tr>
              <th>Imagen</th>
              <th>Enlace del proyecto</th>
              <th>Nombre del proyecto</th>
              <th>Categoría</th>
              <th>Descripción</th>
              <th>Acciones</th>
            </tr>
          </thead>
          <tbody>
            {items.map((item) => {
              return (
                <tr key={item.id}>
                  <td>
                    <Image
                      src={item.imageUrl}
                      alt='post'
                      width={100}
                      height={100}
                    />
                  </td>
                  <td>
                    <a
                      href={item.url}
                      target='_blank'
                      rel='noopener noreferrer'
                    >
                      Enlace
                    </a>
                  </td>
                  <td>{item.title}</td>
                  <td>{item.category}</td>
                  <td>{item.description}</td>
                  <td>
                    <LinkEdit onClick={async () => push(`/edit/${item.id}`)}>
                      Editar
                    </LinkEdit>
                    <ButtonDas
                      onClick={async () => {
                        await deleteItem(item.id, item.deleteImage)
                      }}
                    >
                      Eliminar
                    </ButtonDas>
                  </td>
                </tr>
              )
            })}
          </tbody>
        </Table>
        {loading && <Spinner />}
        {items.length === 0 && <h1>Sin contenido</h1>}
      </Wrapper>
      <LinkPor href='/portafolio' target='_blank'>
        <H1Por>Ver en portafolio</H1Por>
      </LinkPor>
    </div>
  )
}

export default Dashboard
