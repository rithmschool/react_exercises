import React from 'react';

const Pokecard = props => {
    return (
      <li>
        <h3> props.name</h3>
        <img src={props.image}>
        <p> Type: props.type</p>
      </li>
    );
}