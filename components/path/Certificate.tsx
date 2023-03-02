import {
  Group,
  Img,
  ALink,
} from '@/styles/styled-components/path/Certificate'

const Certificate = ({ img, link }: CertificateProps): JSX.Element => {
  return (
    <Group>
      <Img src={img} alt='certificate image'></Img>
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
}
