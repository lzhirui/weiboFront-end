import React from 'react';
import ReactDOM from 'react-dom';
import './index.scss';
import Tabbar from './Tabbar/index'
import Bottom from './bottom/index'
import {BrowserRouter,Route} from 'react-router-dom';

import Home from './home/index';
import Login from './login/index';
import List from './list/index';


ReactDOM.render(
    <BrowserRouter
        basename="/weibo"
    >
        <div>
            <Tabbar/>
            <Route exact path="/" component={Home}></Route>
            <Route exact path="/list" comonent={List}></Route>
            <Route path="/login" component={Login}></Route>
            <Bottom/>
        </div>
    </BrowserRouter>
    , document.getElementById('root'));
