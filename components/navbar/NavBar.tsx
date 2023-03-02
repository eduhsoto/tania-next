import { useState } from 'react'
import {
  Nav,
  NavContainer,
  NavA,
  NavSocial,
  NavItem,
} from '@/styles/styled-components/navbar/Nav'
import Hamburger from './Hamburger'
import Link from 'next/link'
import Image from 'next/image'

const NavBar = (): JSX.Element => {
  const [clicked, setClicked] = useState(false)

  const handleClick = (): void => {
    setClicked(!clicked)
  }

  return (
    <Nav>
      <NavContainer>
        <Link href='/'>
          <Image
            src='/img/brand-logo.jpg'
            alt='brand_logo'
            className='brand__logo'
          />
        </Link>

        <div className='burger'>
          <Hamburger clicked={clicked} handleClick={handleClick} />
        </div>

        <div className={`nav__responsive ${clicked ? 'show' : ''}`}>
          <NavItem>
            <NavA href='/'>Acerca de mí</NavA>
            <NavA href='/my-path'>Mi trayectoria</NavA>
            <NavA href='/portafolio'>Mi portafolio</NavA>
          </NavItem>

          <div>
            <NavSocial
              href='https://www.instagram.com/tikichi_jimarq/'
              target='_blank'
            >
              <Image
                src='/img/instagram-network.png'
                alt='instagram link'
                className='social__image'
              />
            </NavSocial>
            <NavSocial
              href='https://www.linkedin.com/in/tania-jimenezm/'
              target='_blank'
            >
              <Image
                src='/img/linkedIn-network.png'
                alt='linkedin link'
                className='social__image'
              />
            </NavSocial>
            <NavSocial
              href='https://www.behance.net/taniaRjimenez'
              target='_blank'
            >
              <Image
                src='/img/behance-portafolio.png'
                alt='behance link'
                className='social__image'
              />
            </NavSocial>
          </div>
        </div>
      </NavContainer>
    </Nav>
  )
}

export default NavBar
