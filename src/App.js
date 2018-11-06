import React, { Component } from 'react';
import {NavLink} from 'react-router-dom';

class App extends Component {
  render() {
    return (
      <div className="App">
        <ul>
            <li>
                <NavLink exact activeClassName="selected" to="/">home</NavLink>
            </li>
            <li>
                <NavLink activeClassName="selected" to="/login">login</NavLink>
            </li>
        </ul>
      </div>
    );
  }
}

export default App;
