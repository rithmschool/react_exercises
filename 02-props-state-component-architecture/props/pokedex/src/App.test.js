import React from 'react';
import ReactDOM from 'react-dom';
import Pokedex from './Pokedex';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<App />, div);
});
