import { useState } from 'react'
import {
  Nav,
  NavContainer,
  NavSocial,
  NavItem,
} from '@/styles/styled-components/navbar/Nav'
import Hamburger from './Hamburger'
import Link from 'next/link'
import Image from 'next/image'
import NavLink from './NavLink'

const NavBar = (): JSX.Element => {
  const [clicked, setClicked] = useState(false)
  const [clickedLink, setClickedLink] = useState(false)

  const handleClick = (): void => {
    setClicked(!clicked)
    setClickedLink(false)
  }

  const handleHiddenNav = (): void => {
    setClickedLink(!clickedLink)
    setClicked(false)
  }

  return (
    <Nav>
      <NavContainer>
        <Link href='/'>
          <Image
            src='/img/brand-logo.jpg'
            alt='brand_logo'
            className='brand__logo'
            width={265}
            height={77}
          />
        </Link>

        <div className='burger'>
          <Hamburger clicked={clicked} handleClick={handleClick} clickedLink={clickedLink} />
        </div>

        <div className={`nav__responsive ${clicked ? 'show' : ''}  ${clickedLink ? 'hidden' : ''}`}>
          <NavItem>
            <NavLink route='/' linkName='Acerca de mí' hideNav={handleHiddenNav}/>
            <NavLink route='/my-path' linkName='Mi trayectoria' hideNav={handleHiddenNav}/>
            <NavLink route='/portafolio' linkName='Mi portafolio' hideNav={handleHiddenNav}/>
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
                width={37}
                height={37}
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
                width={37}
                height={37}
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
                width={37}
                height={37}
              />
            </NavSocial>
          </div>
        </div>
      </NavContainer>
    </Nav>
  )
}

export default NavBar
