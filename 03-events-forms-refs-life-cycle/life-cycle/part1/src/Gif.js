import React from "react";
import "./Gif.css";

const Gif = ({ txt, img, fnDelete }) => {
	return (
		<div className="Gif">
			<iframe
				src={`https://giphy.com/embed/${img}`}
				title="txt"
				width="250"
				height="250"
				frameBorder="0"
				allowFullScreen
			/>
			<p> {txt} </p>
			<button type="button" onClick={fnDelete}>
				X
			</button>
		</div>
	);
};

export default Gif;
