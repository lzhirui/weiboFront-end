//react 路由文件 参考https://www.jianshu.com/p/a30d41dfe998 搭建的
import React, {Component} from 'react';
import { BrowserRouter, Route, Redirect, Switch} from 'react-router-dom';
import Routers from './routerMap';      //页面模块
import Tabbar from './view/Tabbar/index';   // 顶部菜单

import {connect} from 'react-redux';

class RouterDom extends Component {
    render() {
        let islogin = this.props.islogin;
        return (
            <BrowserRouter>
                <div>
                    <Tabbar/>
                    <Switch>
                        {/*循环将所有路由模块加载，如果找到的路由不在模块定义中，显示404页面*/}
                        {Routers.map((item, index) => {
                            return <Route key={index} path={item.path} exact render={props => (
                                !item.auth ? (<item.component {...props} />) : (islogin ? <item.component {...props} /> :
                                    <Redirect to={{
                                        pathname: '/login',
                                        state: {from: props.location}
                                    }}/>)
                            )}/>
                        })}
                        <Route render={(props) => <div className="content"><h1>404 Not Found!</h1></div>}/>
                    </Switch>
                </div>
            </BrowserRouter>
        )
    }
}

const mapStateToProps = (state) => {
    return ({
        userInfor: state.userInfor,
        islogin: state.login.islogin
    })
}

export default connect(
    mapStateToProps
)(RouterDom)
