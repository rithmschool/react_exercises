import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import "./../node_modules/bootstrap/dist/css/bootstrap.css"
import registerServiceWorker from './registerServiceWorker';
import './index.css';

ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();
