import React from 'react';
import {Col} from 'react-bootstrap';
import './Colorsquare.css';

const Colorsquare = props => (
  <Col s={6} md={4}>
    <div onClick={props.changeColor} style={{height: "200px", border: "1px solid black", backgroundColor: props.color}}>
    	<h1> {props.color} </h1>
    </div>
    
  </Col>
);

export default Colorsquare;