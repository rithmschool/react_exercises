import React, { Component } from 'react';
import './Banner.css';
import RaisedButton from 'material-ui/RaisedButton';
import { Button } from 'react-bootstrap';

const style = {
  margin: 12,
};

class Banner extends Component {
  render() {
    return (
      <div className='header'>
        <div className = "hero-text-box">
            <h1>Darien Duong</h1>
            <p className="hero-description">Making dope apps since 1991</p>
            <Button>Bootstrap button</Button>
            <RaisedButton href='https://www.google.com' label="Material button" primary={true} style={style} />
        </div>
      </div>
    );
  }
}


export default Banner;