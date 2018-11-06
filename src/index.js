import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App'
import {BrowserRouter,Route} from 'react-router-dom';

import Home from './home/index';
import Login from './login/index'

ReactDOM.render(
    <BrowserRouter>
        <div>
            <App/>
            <Route exact path="/" component={Home}></Route>
            <Route path="/login" component={Login}></Route>
        </div>
    </BrowserRouter>
    , document.getElementById('root'));
