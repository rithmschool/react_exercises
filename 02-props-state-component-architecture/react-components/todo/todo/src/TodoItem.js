import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

const ListItem = styled.li`
	text-decoration: ${props => (props.done ? "line-through" : "none")};
`;

const XStyle = styled.span`
	:hover {
		color: red;
		cursor: pointer;
	}
`;

//stateless functional component

const TodoItem = props => (
	<div>
		<ListItem done={props.done}>
			<Link to={`/todos/${props.id}`}> {props.title} </Link>
			{" - " + props.details + " "}
			<Link to={`/todos/${props.id}/edit`}> Edit </Link>
			<button onClick={props.toggleTodo}>Complete</button>
			<XStyle onClick={props.remove}>X</XStyle>
		</ListItem>
	</div>
);

export default TodoItem;
