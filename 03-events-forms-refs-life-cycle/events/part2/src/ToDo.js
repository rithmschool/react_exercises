import React from "react";
import "./ToDo.css";

const ToDo = props => {
	return (
		<p>
			{props.finished ? (
				<a onClick={props.completeButton}>
					<img
						src="http://is2.mzstatic.com/image/thumb/Purple5/v4/0e/52/a8/0e52a81b-bbe0-69fe-9d86-a3a47d5a9c63/source/1200x630bb.jpg"
						alt="Finished"
					/>
				</a>
			) : (
				<a onClick={props.completeButton}>
					<img
						src="https://freeclipartspot.com//storage/upload/square-clip-art/square-clip-art-6.png"
						alt="Unfinished"
					/>
				</a>
			)}
			<span className="ToDo"> {props.name} </span>
			<span className="ButtonSection">
				<button
					onClick={props.deleteButton}
					style={{ backgroundColor: "red" }}
				>
					Delete
				</button>
			</span>
		</p>
	);
};

export default ToDo;
