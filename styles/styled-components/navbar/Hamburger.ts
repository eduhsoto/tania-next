import styled from 'styled-components'

export const NavHamburger = styled.div`
  @media screen and (max-width: 820px) {
    .nav__hamburger {
      height: 30px;
      width: 40px;
      position: relative;
      cursor: pointer;
    }
    .nav__hamburger span {
      width: 40px;
      height: 5px;
      border-radius: 4px;
      background-color: black;
      position: absolute;
      transition: 0.5s ease-in-out;
    }

    .active span:nth-child(1) {
      top: 0;
      transform: rotate(45deg);
      transform-origin: 5%;
    }

    span:nth-child(3),
    span:nth-child(2) {
      top: calc(25px / 2);
    }

    span:nth-child(4) {
      bottom: 0;
    }

    .active span:nth-child(2) {
      transform: translateX(5px);
      background: transparent;
    }

    .active span:nth-child(3) {
      transform: translateX(-50px);
      background: transparent;
    }

    .active span:nth-child(4) {
      transform: rotate(-45deg);
      transform-origin: 5%;
    }
  }
`
