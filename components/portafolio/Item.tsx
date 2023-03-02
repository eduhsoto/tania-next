import {
  ListItem,
  ImageF,
  Detail,
  H1,
  Category,
  Paragraph,
} from '@/styles/styled-components/portafolio/Item'

const Item = ({
  link,
  img,
  title,
  category,
  paragraph,
}: ItemProps): JSX.Element => {
  return (
    <ListItem>
      <a
        href={link}
        target='_blank'
        className='link__portafolio'
        rel='noreferrer'
      >
        <ImageF src={img}>
          <Detail>
            <H1>{title}</H1>
            <Category>{category}</Category>
            <Paragraph>{paragraph}</Paragraph>
          </Detail>
        </ImageF>
      </a>
    </ListItem>
  )
}

export default Item

interface ItemProps {
  link: string
  img: string
  title: string
  category: string
  paragraph: string
}
