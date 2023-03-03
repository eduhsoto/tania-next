import Image from 'next/image'
import styled, { css } from 'styled-components'

interface HeadProps {
  reverse: boolean
}

export const HeadSection = styled.section<HeadProps>`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(261px, 1fr));
  justify-items: center;
  align-items: center;
  padding: var(--space_elements);
  background: var(--background_color_head);
  gap: 20px;

  ${(props) =>
    props.reverse &&
    css`
      direction: rtl;
    `}s
`

export const Img = styled(Image)`
  width: 60%;
  height: 100%;
`

export const Description = styled.div<HeadProps>`
  background: linear-gradient(
    270deg,
    rgba(243, 90, 126, 0.98) 26.24%,
    rgba(249, 175, 122, 0) 94.14%
  );
  padding: 5em 4em;
  text-align: right;

  ${(props) =>
    props.reverse &&
    css`
      background: linear-gradient(
        -270deg,
        rgba(243, 90, 126, 0.98) 26.24%,
        rgba(249, 175, 122, 0) 94.14%
      );
    `}
`

export const Title = styled.h1`
  font-weight: 800;
  font-size: 2em;
  line-height: 49px;
  color: var(--primary_color);
  margin-bottom: 20px;
`

export const Paragraph = styled.p`
  font-weight: 400;
  font-size: 1em;
  line-height: 24px;
  color: var(--text_color);
`
