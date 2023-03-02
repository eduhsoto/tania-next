import {
  HeadSection,
  Img,
  Description,
  Title,
  Paragraph,
} from '@/styles/styled-components/Head'

const Head = ({ img, title, paragraph, reverse }: HeadProps): JSX.Element => {
  return (
    <HeadSection reverse={reverse}>
      <Img src={img} alt='head image'></Img>
      <Description reverse={reverse}>
        <Title>{title}</Title>
        <Paragraph>{paragraph}</Paragraph>
      </Description>
    </HeadSection>
  )
}

export default Head

interface HeadProps {
  img: string
  title: string
  paragraph: string
  reverse: boolean
}
