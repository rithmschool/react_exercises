import React, { Component } from 'react';
import './App.css';
import Colorsquare from './Colorsquare'
import { Grid, Col, Row } from 'react-bootstrap';

class App extends Component {
  constructor(props){
    super(props)
    this.state = {
      
    }
  }

  render() {
    return (
      <div className="App">
        <Grid>
          <Row className = 'show-grid'>
            {colorSquare}
          </Row>
        </Grid>
      </div>
    );
  }
}

App.defaultProps = {

}

export default App;
