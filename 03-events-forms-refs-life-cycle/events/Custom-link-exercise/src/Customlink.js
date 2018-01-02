import React from 'react'

const Customlink = props => (
	<a href={props.href} target="_blank" onClick={props.handleClick}>{props.text}</a>
)

export default Customlink