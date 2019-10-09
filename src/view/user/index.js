import React, {Component} from 'react';
import {connect} from 'react-redux';
import './index.scss';
import {userLogin,loginOut} from "../../action/login";

import cookie from 'react-cookies';


class User extends Component {
    constructor() {
        super();
        this.outLogin = this.outLogin.bind(this);
    }

    //登陆
    outLogin() {
        let data = {user: '',password: ''}
        this.props.userLogin(data);
        this.props.loginOut(false);
        console.log(this.props);
        cookie.remove('islogin');
        cookie.remove('userAccount');
        this.props.history.push("/");
    }

    render() {
        return (
            <div  className="User content">
                <button onClick={this.outLogin}>退出</button>
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    return (state)
}

const mapDispatchToProps = (dispatch) => {
    return {
        userLogin: function (data) {
            dispatch(userLogin(data))
        },
        loginOut: function (data) {
            dispatch(loginOut(data))
        }
    }
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(User)
