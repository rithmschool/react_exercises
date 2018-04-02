import React from "react";
import styled from "styled-components";

const StyledA = styled.a`
  color: green;
  font-size: 20px;
  margin: 10px;
`;

const CustomLink = props => (
  <div>
    <StyledA href={props.href} target="_blank" onClick={props.handleClick}>
      {props.text}
    </StyledA>
  </div>
);

export default CustomLink;
