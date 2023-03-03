import {
  Group,
  Img,
  ALink,
} from '@/styles/styled-components/path/Certificate'

const Certificate = ({ img, link, w, h }: CertificateProps): JSX.Element => {
  return (
    <Group>
      <Img src={img} width={w} height={h} alt='certificate image'></Img>
      <ALink target='_blank' href={link}>
        Ver
      </ALink>
    </Group>
  )
}

export default Certificate

interface CertificateProps {
  img: string
  link: string
  w: number
  h: number
}
