import styled from 'styled-components'

export const ListItem = styled.div`
  flex-basis: 48%;
  flex-grow: 1;
  display: flex;
  align-items: center;
  flex-direction: column;
  max-width: 800px;

  .link__portafolio {
    display: contents;
  }
`

interface SrcProps {
  src: string
}

export const ImageF = styled.div<SrcProps>`
  display: flex;
  height: 500px;
  flex-direction: column;
  justify-content: flex-end;
  align-items: center;
  align-items: stretch;
  background-image: url(${(props) => props.src});
  background-repeat: round;
  width: 90%;
`

export const Detail = styled.div`
  align-self: strecth;
  background: rgba(248, 248, 248, 0.8);
  padding: 20px 30px;
`

export const H1 = styled.h1`
  font-weight: 800;
  font-size: 2em;
  line-height: 49px;
  color: black;
  margin-bottom: 20px;
`

export const Category = styled.p`
  font-weight: 600;
  font-size: 1em;
  color: black;
  line-height: 24px;
`

export const Paragraph = styled(Category)`
  font-weight: 400;
`
