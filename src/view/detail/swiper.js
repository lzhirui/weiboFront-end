import React, {Component} from 'react';
import ReactSwipe from 'react-swipe';

class Swiper extends Component {
    render() {
        const imgStyle = {
            'height':'300px'
        }
        const objSwiper = {
            startSlide: 2,
            speed: 400,
            auto: 3000,
            continuous: true,
            disableScroll: false,
            stopPropagation: false,
            callback: function(index, elem) {},
            transitionEnd: function(index, elem) {}
        }
        return (
            <div>
                <ReactSwipe
                    className="carousel"
                    swipeOptions={objSwiper}
                >
                    <div>
                        <img src="http://pic35.nipic.com/20131110/1338599_221817467119_2.jpg" alt="" width="100%" style={imgStyle} />
                    </div>
                    <div>
                        <img src="http://pic18.nipic.com/20111220/9115077_235418798000_2.jpg" alt="" width="100%" style={imgStyle} />
                    </div>
                    <div>
                        <img src="http://img2.imgtn.bdimg.com/it/u=3766486347,3877961197&fm=214&gp=0.jpg" alt="" width="100%" style={imgStyle} />
                    </div>
                </ReactSwipe>
            </div>
        )
    }
}

export default Swiper;
