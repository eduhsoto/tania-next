import Link from 'next/link'
import styled from 'styled-components'

export const Nav = styled.nav`
  box-shadow: var(--box_shadow);
  position: sticky;
  top: 0;
  z-index: 900;
  background-color: var(--primary_color);
`

export const NavContainer = styled.div`
  margin: 0px 60px;
  display: flex;
  justify-content: space-between;
  align-items: center;

  .nav__responsive {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }

  @media screen and (max-width: 820px) {
    margin: 0px 32px;

    .nav__responsive {
      position: fixed;
      top: 79px;
      width: 50%;
      left: 50%;
      bottom: 0;
      max-width: 200px;
      background: white;
      display: flex;
      flex-direction: column;
      clip-path: polygon(100% 0, 100% 0, 100% 100%, 100% 100%);
      transition: 0.5s ease-in-out;
    }

    .show {
      clip-path: polygon(100% 0, 0 0, 0 100%, 100% 100%);
    }
  }

  @media screen and (max-width: 540px) {
    margin: 0px 16px;

    .brand__logo {
      width: 60%;
    }

    .nav__responsive {
      top: 50px;
    }

    .social__image {
      width: 40px;
    }
  }
`

export const NavA = styled(Link)`
  color: var(--text_color);
  position: relative;
  margin: 0px 20px;

  &:hover {
    color: var(--secondary_color);
  }

  &:after {
    content: '';
    position: absolute;
    width: 0%;
    height: 4px;
    left: 50%;
    top: calc(100% + 4px);
    background-color: var(--secondary_color);
    opacity: 0;
    transition: 0.3s ease-in-out;
  }

  &:hover::after {
    opacity: 1;
    width: 100%;
    left: 0%;
  }

  &[aria-current] {
    color: black;
    box-shadow: inset 0 -4px 0 0 var(--secondary_color);
    padding: 10px 0px;
    font-size: 14px;
  }

  @media screen and (max-width: 820px) {
    margin: 50px 0px;
    font-size: 24px;
  }
`

export const NavSocial = styled.a`
  margin: 0 5px;

  &:hover {
    transform: scale(1.2);
  }
`

export const NavItem = styled.div`
  @media screen and (max-width: 820px) {
    display: flex;
    flex-direction: column;
    align-items: center;
    margin: auto 0px;
  }
`
