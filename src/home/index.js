import React, { Component } from 'react';

import {homedata} from '../api/home';

class Home extends Component {
    newslistclick = () => {
        homedata().then(res=>{
            console.log(res);
        })
    }
    render() {
        return (
            <div className="Home">
                <div>
                    <button onClick={this.newslistclick.bind()}>456</button>
                </div>
            </div>
        );
    }
}

export default Home;
