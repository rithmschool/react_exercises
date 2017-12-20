import React from 'react';
import styled from 'styled-components';

const ColorBox = styled.div`
  width: 180px;
  height: 180px;
  display: inline-block;
  background-color: ${props => props.color};
  :hover {
    cursor: pointer;
  }
`;
const Box = props => {
  return (
    <ColorBox onClick={props.handleClick} color={props.color} id={props.id} />
  );
};

export default Box;
