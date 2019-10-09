// import React from 'react';
// import ReactDOM from 'react-dom';
// import './index.scss';
// import Tabbar from './Tabbar/index'
// import {BrowserRouter, Route, Switch, Redirect} from 'react-router-dom';
// import Routers from './routerMap'
//
// import {Provider} from 'react-redux'
// import {createStore} from 'redux'
// import todoApp from './reducers'
//
//
// ReactDOM.render(
//     <Provider>
//         <BrowserRouter
//             basename="/weibo"
//         >
//             <div>
//                 <Tabbar/>
//                 <Switch>
//                     {Routers.map((item, index) => {
//                         return <Route key={index} path={item.path} exact render={props => (
//                             !item.auth ? (<item.component {...props} />) : (false ? <item.component {...props} /> :
//                                 <Redirect to={{
//                                     pathname: '/login',
//                                     state: {from: props.location}
//                                 }}/>)
//                         )}/>
//                     })}
//                     <Route render={(props) => <div className="content"><h1>404 Not Found!</h1></div>}/>
//                 </Switch>
//             </div>
//         </BrowserRouter>
//     </Provider>
//     , document.getElementById('root'));


//搭建参考https://www.jianshu.com/p/a30d41dfe998

import React from 'react';
import ReactDOM from 'react-dom';
import RouterDom from './router';
import {Provider} from 'react-redux';
import reducer from './redux/index';
import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';         //redux中间件中间件引入，放在applyMiddleware方法之中，传入createStore方法，就完成了store.dispatch()的功能增强。即可以在reducer中进行一些异步的操作。

function IndexDom() {
    return (
        <div>
            <RouterDom/>
        </div>
    )
}

const store = createStore(
    reducer,
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),
    applyMiddleware(thunk)
);

ReactDOM.render((
    <Provider store={store}>
        <IndexDom/>
    </Provider>
), document.getElementById('root'));
