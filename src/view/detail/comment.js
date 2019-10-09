import React, {Component} from 'react';
import {ListGroup, ListGroupItem, Media, Pagination} from 'react-bootstrap';
import './comment.scss';
import {connect} from 'react-redux';
import {postCommentApi} from '../../api/detail'

class Comment extends Component {
    constructor() {
        super();
        this.state = {
            active: 1,
            commentVal: ''
        }
        this.postComment = this.postComment.bind(this);
        this.commentVal = this.commentVal.bind(this);
    }



    commentVal(event) {
        this.setState({
            commentVal: event.target.value
        })
    }

    postComment() {
        let postData = {
            val:this.state.commentVal,
            id:this.props.id,
            name:this.props.userInfor.userAccount.user
        }
        postCommentApi(postData).then(data => {
            console.log(data);
        }).catch(err=>{
            alert(err);
        })
    }

    render() {
        let items = [];
        for (let number = 1; number <= 10; number++) {
            items.push(
                <Pagination.Item active={number === this.state.active} key={number} onClick={() => {
                    this.setState({
                        active: number
                    })
                }}>{number}</Pagination.Item>
            );
        }
        return (
            <div className="comment contentClass">
                <div>
                    <div className="sigma-content">
                        <div className="sigma-middle-line">
                            <span className="sigma-line-text">评论</span>
                        </div>
                    </div>
                    <textarea placeholder="请输入内容" value={this.state.commentVal} onChange={this.commentVal}></textarea>
                    <button className="sub" onClick={this.postComment}>发送</button>
                    {/*清除浮动*/}
                    <div className="clear"></div>
                </div>
                <div>
                    <ListGroup>
                        <ListGroupItem>
                            <Media>
                                <Media.Left>
                                    <img width={64} height={64}
                                         src="http://cdn.duitang.com/uploads/item/201406/17/20140617131104_hcJft.thumb.700_0.jpeg"
                                         alt="thumbnail"/>
                                </Media.Left>
                                <Media.Body>
                                    <Media.Heading>Media Heading</Media.Heading>
                                    <p>
                                        Cras sit amet nibh libero, in gravida nulla. Nulla vel metus scelerisque
                                        ante sollicitudin commodo. Cras purus odio, vestibulum in vulputate at,
                                        tempus viverra turpis. Fusce condimentum nunc ac nisi vulputate
                                        fringilla. Donec lacinia congue felis in faucibus.
                                    </p>
                                </Media.Body>
                            </Media>
                        </ListGroupItem>
                        <ListGroupItem>
                            <Media>
                                <Media.Left>
                                    <img width={64} height={64}
                                         src="http://cdn.duitang.com/uploads/item/201406/17/20140617131104_hcJft.thumb.700_0.jpeg"
                                         alt="thumbnail"/>
                                </Media.Left>
                                <Media.Body>
                                    <Media.Heading>Media Heading</Media.Heading>
                                    <p>
                                        Cras sit amet nibh libero, in gravida nulla. Nulla vel metus scelerisque
                                        ante sollicitudin commodo. Cras purus odio, vestibulum in vulputate at,
                                        tempus viverra turpis. Fusce condimentum nunc ac nisi vulputate
                                        fringilla. Donec lacinia congue felis in faucibus.
                                    </p>
                                </Media.Body>
                            </Media>
                        </ListGroupItem>
                    </ListGroup>
                    <div className='paging'>
                        <Pagination bsSize="large">{items}</Pagination>
                    </div>
                    <div className="clear"></div>
                </div>
            </div>
        )
    }
}


const mapStateToProps = (state) => {
    return ({
        userInfor: state.userInfor
    })
}
export default connect(
    mapStateToProps
)(Comment)
