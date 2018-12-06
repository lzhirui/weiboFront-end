import React, {Component} from 'react';

class Indexcontent extends Component {
    render() {
        const tabData = [
            {id:'1',name:'2'},
            {id:'1',name:'2'},
            {id:'1',name:'2'},
            {id:'1',name:'2'}
        ]
        const card = tabData.map((item,index)=>
            <div key={index}>
                <p>{item.id}</p>
                <p>{item.name}</p>
            </div>
        )
        return (
            <div className="indexContent">
                {card}
            </div>
        )
    }
}
export default Indexcontent;
