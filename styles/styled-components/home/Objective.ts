import styled from 'styled-components'

export const CardObjectives = styled.div`
  padding: 1.25em 2.5em;
  border: 1px solid #49494940;
  background-color: var(--primary_color);
  display: flex;
  flex-direction: column;
  align-items: center;
  flex-basis: 25%;
  max-width: 250px;
  flex-grow: 1;
  align-self: stretch;
`

export const CardImage = styled.img`
  width: 40%;
  margin-bottom: 20px;
`

export const TextP = styled.p`
  font-weight: 400;
  font-size: 1em;
  line-height: 24px;
  color: var(--text_color);
  margin-bottom: 20px;
`
