import styled from 'styled-components'

export const SkillDiv = styled.div`
  padding: 1.25em 2.5em;
  border: 1px solid #49494940;
  align-self: stretch;
  max-width: 400px;
`

export const TitleH3 = styled.h3`
  font-weight: 600;
  font-size: 1.25em;
  line-height: 39px;
  color: var(--complementary_color);
  margin-bottom: 12px;
`

export const List = styled.ul`
  & > li {
    font-weight: 400;
    line-height: 24px;
    color: var(--text_color);
    margin-bottom: 12px;
    text-decoration: none;
  }
`
