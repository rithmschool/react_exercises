import React, { Component } from "react";

const CustomLink = ({ href, handleClick, text }) => (
	<div>
		<a href={href} target="_blank" onClick={handleClick}>
			{text}
		</a>
	</div>
);
export default CustomLink;
