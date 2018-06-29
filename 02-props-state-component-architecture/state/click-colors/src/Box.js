import React from "react";
import styled from "styled-components";

const BoxStyle = styled.div`
  display: inline-block;
  width: 150px;
  height: 150px;
  border: 1px solid white;
  background-color: ${props => props.backgroundColor};
  :hover {
    cursor: pointer;
  }
`;

const Box = props => (
  <BoxStyle
    id={props.id}
    backgroundColor={props.backgroundColor}
    onClick={props.handleClick}
  />
);

export default Box;
