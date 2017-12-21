import React, { Component } from 'react';
import './App.css';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import FirstComponent from './FirstComponent.js';
import SecondComponent from './SecondComponent.js';
import NamedComponent from './NamedComponent.js';
import Tweet from './Tweet.js';
import Person from './Person.js';
import Banner from './Banner.js'
import NavBar from './NavBar.js'
import Carousels from './Carousels.js'
import { Grid, Col, Row } from 'react-bootstrap';


class App extends Component {
  render() {
    return (
      <MuiThemeProvider>
        <div>
          <NavBar />
          <Banner />
          <h1 className='App'>Part 1</h1>
          < FirstComponent />
          < SecondComponent />
          < NamedComponent name='Darien' />
          <h1 className='App'>Part 2</h1>
          <Grid>
            <Row className='show-grid'>
              <Col xs={4} md={4}>< Tweet name = 'darien' username = 'dingduong' date='12/19/17' message = 'This app is dope!' /></Col>
              <Col xs={4} md={4}>< Tweet name = 'john' username = 'johnb12' date='12/19/17' message = 'This app needs style' /></Col>
              <Col xs={4} md={4}>< Tweet name = 'joe' username = 'joeblow' date='12/19/17' message = "I'm hungry!" /></Col>
            </Row>
          </Grid>
          <h1 className='App'>Part 3</h1>
          <Grid>
            <Row>
              <Col xs={6} md={4}>< Person age = {24} name='DarienDuong' hobbies = {['coding', 'sitting']} /></Col>
              <Col xs={6} md={4}>< Person age = {19} name = 'John' hobbies = {['fidgeting', 'dabbing']} /></Col>
              <Col xs={6} md={4}>< Person age = {21} name = 'Daisy' hobbies = {['twerking', 'stunting']} /></Col>
            </Row>
          </Grid> 
          < Carousels />       
        </div>
      </MuiThemeProvider>
    );
  }
}



export default App;
