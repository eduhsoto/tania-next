import styled from 'styled-components'
import { ALink } from './path/Certificate'

export const FooterH = styled.footer`
  margin: 0px 80px;
  @media screen and (max-width: 820px) {
    margin: 0px 32px;
  }

  @media screen and (max-width: 540px) {
    margin: 0px 16px;
  }
`

export const FooterGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-template-rows: repeat(2, 1fr);
  grid-template-areas:
    'element1 element2 element3'
    'element4 element5 element3';

  @media screen and (max-width: 540px) {
    display: grid;
    grid-template-columns: repeat(1, 1fr);
    grid-template-rows: repeat(5, 1fr);
    grid-template-areas:
      'element1'
      'element2'
      'element3'
      'element4'
      'element5';
    row-gap: 0em;

    .area_1 {
      justify-content: center;
    }
    .area_2 {
      justify-content: center;
    }

    .area_3 {
      grid-area: element5;
      justify-content: center;
    }

    .area_4 {
      grid-area: element1;
      justify-content: center;
    }

    .area_5 {
      justify-content: center;
    }
  }
`

export const FooterItem = styled.div`
  display: flex;
  align-items: center;
  justify-content: stretch;
`

export const FooterLink = styled.a`
  margin: 0px 10px;
  color: black;
`

export const FooterButton = styled(ALink)`
  font-weight: 400;
  margin: 0px 50px;
`
