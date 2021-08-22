import React from 'react';
import ReactDOM from 'react-dom';
import 'bootstrap/dist/css/bootstrap.css';
import 'font-awesome/css/font-awesome.css';

import './global.css';
import App from './app';
import Login from 'auth/login';
import Register from 'auth/register';

ReactDOM.render(<App />, document.getElementById('root'));
