import React from "react";
import styled from "styled-components";

const ListItem = styled.li`
	text-decoration: ${props => (props.done ? "line-through" : "none")};
`;

//stateless functional component

const TodoItem = props => (
	<div>
		<ListItem done={props.done}>
			{props.name}
			<button onClick={props.remove}>Remove this Todo</button>
		</ListItem>;
	</div>
);

export default TodoItem;
