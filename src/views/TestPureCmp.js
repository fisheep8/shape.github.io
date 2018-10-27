import React,{ Component,PropTypes} from 'react';

export default class TestPureCmp extends Component{

    render(){
        const {item}=this.props;
        return(
            <div>
            <span>{item.name}</span>
            <span>{item.age}</span>
            </div>
        )
    }
}