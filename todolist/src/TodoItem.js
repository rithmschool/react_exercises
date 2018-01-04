import React from "react";

const TodoItem = props => {
	let buttonText = props.complete ? "done!!!" : "not done";
	let taskStatus = props.complete ? "done!!!" : "";
	// let title = props.isSelected ? (
	// 	<input
	// 		type="text"
	// 		onChange={props.handleChange}
	// 		placeholder="enter new task"
	// 		name="title"
	// 		value={props.title.value}
	// 	/>
	// ) : (
	// 	props.title
	// );

	// let description = props.isSelected ? (
	// 	<input
	// 		type="text"
	// 		onChange={props.handleChange}
	// 		placeholder="describe your task"
	// 		name="description"
	// 		value={props.editTodo}
	// 	/>
	// ) : (
	// 	props.description
	// );
	return (
		<div>
			<h3 onDoubleClick={props.toggleTitleEdit}>{props.title}</h3>
			<i>{taskStatus}</i>
			<p onDoubleClick={props.toggleDescriptionEdit}>
				{props.description}
			</p>
			<button onClick={props.toggleComplete}>{buttonText}</button>
			<button onClick={props.handleDelete}>x</button>
		</div>
	);
};

export default TodoItem;
