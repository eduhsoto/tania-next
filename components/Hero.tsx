import {
  HeadSection,
  Img,
  Description,
  Title,
  Paragraph,
} from '@/styles/styled-components/Head'

const Hero = ({
  img,
  title,
  paragraph,
  reverse,
  w,
  h,
  hidden,
  reverseD
}: HeadProps): JSX.Element => {
  return (
    <HeadSection reverse={reverse} hidden={hidden}>
      <Img src={img} width={w} height={h} alt='head image'></Img>
      <Description reverseD={reverseD}>
        <Title>{title}</Title>
        <Paragraph>{paragraph}</Paragraph>
      </Description>
    </HeadSection>
  )
}

export default Hero

interface HeadProps {
  img: string
  title: string
  paragraph: string
  reverse: boolean
  w: number
  h: number
  hidden: boolean
  reverseD: boolean
}
