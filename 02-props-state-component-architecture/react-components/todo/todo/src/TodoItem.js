import React from "react";
import styled from "styled-components";

const ListItem = styled.li`
	text-decoration: ${props => (props.done ? "line-through" : "none")};
`;

//stateless functional component

const TodoItem = props => <ListItem done={props.done}>{props.name}</ListItem>;

export default TodoItem;
