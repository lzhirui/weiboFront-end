import React, {Component} from 'react';
import {Tabs, Tab} from 'react-bootstrap';
import {detailTabContent} from '../../api/detail'

class Information extends Component {
    constructor() {
        super();
        this.state = {
            text: '',
            html: '',
            video: ''
        }
    }

    componentDidMount() {
        this.getDetailDataTab();
    }

    getDetailDataTab() {
        console.log(this.props)
        let getData = {
            id: this.props.id
        }
        detailTabContent(getData).then(res => {
            let data = res[0]
            this.setState({
                text: data.text,
                html: data.html,
                video: data.video
            })
        }).catch(err => {
            alert(err)
        })
    }

    render() {
        return (
            <div className='contentClass'>
                <Tabs defaultActiveKey={1} id="uncontrolled-tab-example">
                    <Tab eventKey={1} title="介绍">
                        <div dangerouslySetInnerHTML={{__html: this.state.text}}></div>
                    </Tab>
                    <Tab eventKey={2} title="代码">
                        <div dangerouslySetInnerHTML={{__html: this.state.html}}></div>
                    </Tab>
                    <Tab eventKey={3} title="视频">
                        {
                            this.props.video
                                ?
                                <div>
                                    <video src={this.state.video}></video>
                                </div>
                                :
                                <div>暂无视频</div>
                        }

                    </Tab>
                </Tabs>
            </div>
        )
    }
}

export default Information;
