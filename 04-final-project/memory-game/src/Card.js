import React from 'react';
import PropTypes from 'prop-types';
import './Card.css'

const Card = (props) => {
  let styles = {};
  if (props.showing) {
    styles.backgroundColor = props.backgroundColor;
  }
  return (
    <div onClick={props.onClick} className="card-container"  style={styles}>
    </div>
  );
};

Card.propTypes = {
  showing: PropTypes.bool.isRequired,
  backgroundColor: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired
}

export default Card;
