import React, {Component} from 'react';
import {Checkbox, Button} from 'react-bootstrap';
import {connect} from 'react-redux';
import {sublogin} from "../../api/login";
import './login.scss';
import {userLogin, loginOff} from "../../action/login";

import cookie from 'react-cookies';


class Login extends Component {

    constructor() {
        super();
        this.subUserPws = this.subUserPws.bind(this);
        this.user = this.user.bind(this);
        this.password = this.password.bind(this);
        this.state = {
            user: '',
            password: ''
        }
    }

    //登陆
    subUserPws() {
        if (!this.state.user) alert('请输入正确的用户名');
        if (!this.state.password) alert('请输入密码');
        let postData = {
            user: this.state.user,
            password: this.state.password
        }
        sublogin(postData).then(data => {
            let userData = {
                ...postData,
                img:data.img
            }
            this.props.userLogin(userData);
            this.props.loginOff(true);
            cookie.save('islogin',true);
            cookie.save('userAccount',postData);
            //跳转回原来想去的地方
            this.props.history.push(this.props.location.state.from.pathname ? this.props.location.state.from.pathname : '/');
        }).catch(err => {
            alert(err)
        })
    }

    user(event) {
        this.setState({user: event.target.value})
    }

    password(event) {
        this.setState({password: event.target.value})
    }

    render() {
        return (
            <div className="Login content">
                <div className="login_m">
                    <div className="login_boder">
                        <div className="login_padding">
                            <div>
                                <h2>USERNAME</h2>
                                <div>
                                    <input type="text" value={this.state.user} onChange={this.user}
                                           className="txt_input"/>
                                </div>
                            </div>
                            <div>
                                <h2>PASSWORD</h2>
                                <div>
                                    <input type="password" value={this.state.password} onChange={this.password}
                                           className="txt_input"/>
                                </div>
                            </div>
                            <p>Forgot your password?</p>
                            <div className="sub_rem">
                                <Checkbox checked readOnly>
                                    Remember me
                                </Checkbox>
                                <Button bsStyle="info" bsSize="xsmall" onClick={this.subUserPws}>SIGN-IN</Button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    return ({
        userInfor: state.userInfor,
        islogin: state.islogin
    })
}

const mapDispatchToProps = (dispatch) => {
    return {
        userLogin: function (data) {
            dispatch(userLogin(data))
        },
        loginOff: function (data) {
            dispatch(loginOff(data))
        }
    }
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Login)
