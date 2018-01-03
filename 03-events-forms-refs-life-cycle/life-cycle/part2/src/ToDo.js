import React from "react";
import "./ToDo.css";
import EditToDoForm from "./EditToDoForm";

const ToDo = props => {
	let toDoVal;
	if (props.edit === true)
		toDoVal = <EditToDoForm fnEdit={props.fnEdit} name={props.name} />;
	else {
		toDoVal = (
			<p>
				<a onClick={props.completeButton}>
					{" "}
					{props.finished ? (
						<img
							src="http://is2.mzstatic.com/image/thumb/Purple5/v4/0e/52/a8/0e52a81b-bbe0-69fe-9d86-a3a47d5a9c63/source/1200x630bb.jpg"
							alt="Finished"
						/>
					) : (
						<img
							src="https://freeclipartspot.com//storage/upload/square-clip-art/square-clip-art-6.png"
							alt="Unfinished"
						/>
					)}{" "}
				</a>
				<span className="ToDo"> {props.name} </span>
				<span className="ButtonSection">
					<button
						onClick={props.editButton}
						style={{ backgroundColor: "yellow" }}
					>
						Edit
					</button>
					<button
						onClick={props.deleteButton}
						style={{ backgroundColor: "red" }}
					>
						Delete
					</button>
				</span>
			</p>
		);
	}
	return toDoVal;
};

export default ToDo;
