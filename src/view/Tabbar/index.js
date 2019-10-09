import React, {Component} from 'react';
import {NavLink} from 'react-router-dom';
import {connect} from 'react-redux';
import './tabbar.scss';

class Tabbar extends Component {
    render() {
        let login = this.props.login;

        const activeStyle = {
            fontWeight: 'bold',
            color: 'blue'
        }
        return (
            <div className="Tabbar">
                <ul>
                    <li>
                        <NavLink exact  activeClassName="selected" to="/" activeStyle={activeStyle}>首页</NavLink>
                    </li>
                    <li>
                        <NavLink exact  activeClassName="selected" to="/list" activeStyle={activeStyle}>列表</NavLink>
                    </li>
                    {login.islogin ? (
                        <li>
                            <NavLink exact activeClassName="selected" to="/user" activeStyle={activeStyle}>我的</NavLink>
                        </li>
                    ) : (
                        <li>
                            <NavLink exact activeClassName="selected" to="/login" activeStyle={activeStyle}>登陆</NavLink>
                        </li>
                    )}

                </ul>
            </div>
        );
    }
}


const mapStateToProps = (state) => {
    return (
        state
    )
}

export default connect(
    mapStateToProps
)(Tabbar)

