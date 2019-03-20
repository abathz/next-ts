import React, { FunctionComponent } from 'react'
import styled from 'styled'

type Props = {
  className?: string
  style?: React.CSSProperties
  onClick?: (event: React.MouseEvent<HTMLButtonElement>) => void
}

const StyledButton = styled.button`
  padding: 10px 5px;
`

const Button: FunctionComponent<Props> = (props) => {
  return <StyledButton {...props}>{props.children}</StyledButton>
}

export default Button
