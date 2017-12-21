import React from "react";
import Button from "./Button";
import "./ToDo.css";

const ToDo = props => {
	return (
		<p>
			{props.finished ? (
				<img
					src="https://cdn.pixabay.com/photo/2014/04/02/10/40/check-304167_960_720.png"
					alt="Finished"
				/>
			) : (
				<img
					src="https://freeclipartspot.com//storage/upload/square-clip-art/square-clip-art-6.png"
					alt="Unfinished"
				/>
			)}
			<span className="ToDo"> {props.name} </span>
			<span className="ButtonSection">
				<Button type="Finish" />
				<Button type="Edit" />
				<Button type="Delete" />
			</span>
		</p>
	);
};

export default ToDo;
