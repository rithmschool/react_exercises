import React from 'react';

const Box = (props) =>{
	const style = {
		width:'180px',
		height:'180px',
		display: 'inline-block',
		backgroundColor: props.color
	}
	return <div style ={style} />;
};

export default Box