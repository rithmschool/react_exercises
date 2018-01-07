import React from "react";
import styled from "styled-components";

const DivStyle = styled.div`
  height: ${props => props.height}px;
  width: ${props => props.width}px;
  background-color: ${props => props.color};
  border: 1px solid white;
  margin: 0 auto;
`;

const Div = props => {
  return (
    <DivStyle height={props.height} width={props.width} color={props.color} />
  );
};

export default Div;
