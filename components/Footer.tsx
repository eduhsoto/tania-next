import {
  FooterH,
  FooterGrid,
  FooterItem,
  FooterLink,
  FooterButton,
} from '@/styles/styled-components/Footer'
import Image from 'next/image'

const Footer = (): JSX.Element => {
  return (
    <>
      <FooterH>
        <FooterGrid>
          <FooterItem className='area_1'>
            <p className='footer__contact'>Contacta conmigo en:</p>
          </FooterItem>

          <FooterItem className='area_2'>
            <Image
              src='/img/phone-contact.png'
              className='icon__contact'
              alt='phone number'
            />
            <FooterLink href='tel:3311387789'>33 11 38 77 89</FooterLink>
          </FooterItem>

          <FooterItem className='area_3'>
            <FooterButton
              href='https://www.linkedin.com/in/tania-jimenezm/'
              target='”_blank”'
              className='footer__button'
            >
              LinkedIn
            </FooterButton>
          </FooterItem>

          <FooterItem className='area_4'>
            <Image
              src='/img//brand-logo.jpg'
              className='footer__image'
              alt='brand logo'
            />
          </FooterItem>

          <FooterItem className='area_5'>
            <Image
              src='/img/email-contact.png'
              className='icon__contact'
              alt='email'
            />
            <FooterLink
              href='mailto:taniaraquel.jimenezm@gmail.com'
              className='footer__link'
            >
              taniaraquel.jimenezm@gmail.com
            </FooterLink>
          </FooterItem>
        </FooterGrid>
        <div className='rights'>
          <p>Copyright Inc. Tania Jiménez Márquez. © 2022</p>
        </div>
      </FooterH>
    </>
  )
}

export default Footer
