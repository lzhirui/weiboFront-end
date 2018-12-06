import React, { Component } from 'react';
import {NavLink} from 'react-router-dom';
import './tabbar.scss';

class Tabbar extends Component {
    constructor(props){
        super(props);
        this.state = {data:new Date()}
    }
    tick() {
        this.setState({
            data: new Date()
        });
    }
    componentDidMount() {
        this.timerID = setInterval(
            () => {
                this.tick()
            },
            1000
        );
    }
    componentWillUnmount() {
        clearInterval(this.timerID);
    }
    render() {
        const activeStyle = {
            fontWeight: 'bold',
            color: 'blue'
        }
        const timeStyle = {
            float:'right',
        }
        return (
            <div className="Tabbar">
                <ul>
                    <li>
                        <NavLink exact activeClassName="selected" to="/" activeStyle={activeStyle}>首页</NavLink>
                    </li>
                    <li>
                        <NavLink exact activeClassName="selected" to="/list" activeStyle={activeStyle}>列表</NavLink>
                    </li>
                    <li>
                        <NavLink activeClassName="selected" to="/login" activeStyle={activeStyle}>登陆</NavLink>
                    </li>
                </ul>
                <p style={timeStyle}>{this.state.data.toLocaleTimeString()}</p>
            </div>
        );
    }
}

export default Tabbar;
