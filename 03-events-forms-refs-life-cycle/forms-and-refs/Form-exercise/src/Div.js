import React from 'react';
import styled from 'styled-components'

const Colordiv = styled.div`
	width: ${props => props.width}px;
	height: ${props => props.height}px;
	background-color: ${props => props.color}
`

const Div = props => {
  return (
  	<Colordiv height={props.height} width={props.width} color={props.color} />
  )
}


export default Div;