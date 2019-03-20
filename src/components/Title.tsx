import React, { FunctionComponent } from 'react'
import styled from 'styled'

type Props = {
  className?: string
  style?: React.CSSProperties
}

const StyledTitle = styled.h1`
  font-size: 14pt;
  color: palevioletred;
`

const Title: FunctionComponent<Props> = (props) => {
  return (
    <StyledTitle {...props}>{props.children}</StyledTitle>
  )
}

export default Title
