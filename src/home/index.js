import React, { Component } from 'react';
import Swiper from './swiper'
import Indexcontent from './content'
import './index.scss'
class Home extends Component {
    render() {
        return (
            <div className="Home content">
                <Swiper/>
                <Indexcontent/>
            </div>
        );
    }
}
export default Home
