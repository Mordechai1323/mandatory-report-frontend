import styled from 'styled-components'

interface ButtonProps {
  children: React.ReactNode
  button?: React.ButtonHTMLAttributes<HTMLButtonElement>
}

export const Button = ({ children, button }: ButtonProps) => {
  return <ButtonStyle {...button}>{children}</ButtonStyle>
}

const ButtonStyle = styled.button`
  width: 100%;
  height: 100%;
  border-radius: 6px;
  border: none;
  padding: 4px 8px;
  cursor: pointer;
`
