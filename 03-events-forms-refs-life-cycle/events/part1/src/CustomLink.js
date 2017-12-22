import React from "react";
import "./CustomLink.css";

const CustomLink = props => {
	const style = props.underline
		? { textDecoration: "underline" }
		: { textDecoration: "none", cursor: "default" };
	return (
		<a
			href={props.href}
			target="_blank"
			className="CustomLink"
			style={style}
		>
			{props.text}
		</a>
	);
};

export default CustomLink;
