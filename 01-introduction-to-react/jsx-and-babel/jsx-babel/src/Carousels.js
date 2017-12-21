import React, { Component } from 'react';
import { Carousel } from 'react-bootstrap';

class Carousels extends Component {
  render() {

    return (
      <Carousel className='full'>
        <Carousel.Item>
          <img src="https://static.pexels.com/photos/257360/pexels-photo-257360.jpeg" />
          <Carousel.Caption>
            <h3>First slide label</h3>
            <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img src="https://static.pexels.com/photos/257360/pexels-photo-257360.jpeg" />
          <Carousel.Caption>
            <h3>Second slide label</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img src="https://static.pexels.com/photos/257360/pexels-photo-257360.jpeg" />
          <Carousel.Caption>
            <h3>Third slide label</h3>
            <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    );
  }
}


export default Carousels;