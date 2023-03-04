import styled from 'styled-components'

export const LoginDiv = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
`

export const FormStyle = styled.form`
  border: 1px solid #49494940;
  padding: 3.25em 3.5em;
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
  align-self: stretch;

  p {
    color: var(--errors);
  }

  img {
    align-self: center;
  }
`

export const GroupForm = styled.div`
  display: flex;
  gap: 0.5em;
  flex-direction: column;

  input {
    height: 1.4rem;
  }
`

export const Button = styled.button`
  height: 2rem;
  margin-top: 20px;
  margin-bottom: 20px;
  border-color: var(--secondary_color);
  background-color: var(--primary_color);
  cursor: pointer;
`
