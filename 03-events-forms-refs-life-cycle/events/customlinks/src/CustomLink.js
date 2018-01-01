import React from "react";

//stateless functional component
const CustomLink = ({ href, handleClick, text }) => (
	<div>
		<a href={href} target="_blank" onClick={handleClick}>
			{text}
		</a>
	</div>
);

export default CustomLink;
