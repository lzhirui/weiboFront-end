import React,{Component} from 'react'
import Swiper from './swiper'
import Information from './information'
import Comment from './comment'
class Detail extends Component{
    constructor(){
        super();
        this.state = {
            id:''
        }
    }

    componentWillMount(){
        this.setState({
            id:this.props.match.params.id
        })
    }

    render(){
        return(
            <div>
                <Swiper/>
                <Information id={this.state.id}/>
                <Comment id={this.state.id}/>
            </div>
        )
    }
}
export default Detail;
