import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import {homedata} from '../../api/home'
import {Panel} from 'react-bootstrap'

class Indexcontent extends Component {
    constructor() {
        super();
        this.state = {dataListArr: []}
    }

    componentDidMount() {
        this.getList();
    }

    getList() {
        homedata().then(res => {
            this.setState({
                dataListArr: res
            })
        }).catch(err => {
            alert(err)
        })
    }

    render() {
        const card = this.state.dataListArr.map((item, index) =>
            <Link to={{pathname: `detail/${item.id}`,}} key={index}>
                <div className="indexMyList">
                    <Panel bsStyle="info">
                        <Panel.Heading>
                            <Panel.Title componentClass="h3">{item.title}-{item.name}</Panel.Title>
                        </Panel.Heading>
                        <Panel.Body>
                            <img width="150px" src="https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1545654495208&di=c4fa8cce2c2f3bc5d70f7f676df262d5&imgtype=0&src=http%3A%2F%2Fimg.mp.sohu.com%2Fupload%2F20180317%2Ffffc2cf4d5314b29ba68c92006a1919e_th.jpg" alt=""/>
                        </Panel.Body>
                    </Panel>
                    <p></p>
                    <p></p>
                </div>
            </Link>
        )
        return (
            <div className="indexContent contentClass">
                {card}
            </div>
        )
    }
}

export default Indexcontent;
