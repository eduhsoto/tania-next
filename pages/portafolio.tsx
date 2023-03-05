import Hero from "@/components/Hero"
import Item from "@/components/portafolio/Item"
import { db } from "@/confirebase/conection"
import { collection, getDocs } from "firebase/firestore"
import type { GetServerSideProps } from "next"

interface itemType {
    id: string
    url: string
    title: string
    category: string
    description: string
    imageUrl: string
    deleteImage: string
  }

const Portafolio = ({items}: Props): JSX.Element => {
  return (
    <>
      <Hero
        img='/img/experience.jpg'
        w={469}
        h={464}
        title='Mi experiencia es laboral y académica, dale un vistazo a mis proyectos!'
        paragraph='Al trabajar para una empresa dedicada a la creación de soluciónes digitales pude obtener mi paión por el deseño UX / UI'
        reverse={false}
      />
      <section>
        <div className='container'>
          {items.map((item) => {
            return (
              <Item
                key={item.id}
                link={item.url}
                img={item.imageUrl}
                title={item.title}
                category={item.category}
                paragraph={item.description}
              />
            )
          })}
        </div>
      </section>
    </>
  )
}

export default Portafolio

export const getServerSideProps: GetServerSideProps = async () => {
  const querySnapshot = await getDocs(collection(db, 'item'))
  const docs: itemType[] = []
  querySnapshot.forEach((doc) => {
    docs.push({
      id: doc.id,
      url: doc.data().url,
      title: doc.data().title,
      category: doc.data().category,
      description: doc.data().description,
      imageUrl: doc.data().imageUrl,
      deleteImage: doc.data().deleteImage,
    })
  })

  return {
    props: {
      items: docs,
    },
  }
}

interface Props {
  items: itemType[]
}
