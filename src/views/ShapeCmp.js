import React,{ Component,PropTypes,PureComponent} from 'react';
import { connect } from 'react-redux';
import './material.scss';
import TestPureCmp from './TestPureCmp.js';
import {triangle_trigger_click_action,going_jump_action} from '../reducers/actions';

class ShapeCmp extends Component{
    //itemV={name:'yu',age:35};
    constructor(props, context){
        super(props, context);
        this.updateStyle=this.updateStyle.bind(this);
        this.setTransform=this.setTransform.bind(this);
        this.onShapeClick=this.onShapeClick .bind(this);
        this.state={
            item:this.itemV
        }
    }
    componentDidMount(){
        //this.setCss();
    }
    shouldComponentUpdate(nextprops,nextstate){
        if(nextprops.jumpClass !== this.props.jumpClass)
        return true;
        else
        return false;
    }
    updateStyle(){
        const {left,top,scale,degree}=this.props;
        let styleObj={
            left:`${left+300}px`,
            top:`${top+200}px`,
        };
        return styleObj;
    }
    setTransform(shape,left=0,top=0,scale=1,deg=0){
        let trans=`translateX(${left}px) translateY(${top}px) scale(${scale}) rotate(${deg}deg)`;
        shape.style.webkitTransform = trans;
        shape.style.transform = trans;
        shape.style.MozTransform = trans;
        
    }
    onShapeClick(event) {
        // this.setState({
        //   value: event.target.value
        // });
        this.props.onGoingJump(this.props.idx);
        // this.itemV.name='yyyuuu';
        // this.setState({
        //     item:this.itemV
        // });
      }
    render(){
        const {onTriClick,shapeName,showNotice,jumpClass}=this.props;
        let styleObj=this.updateStyle();
        let finalClass=shapeName+" "+jumpClass;
        return(
            <div>
              <li className={finalClass} onClick={this.onShapeClick} ref="shapeItem" style={styleObj}>
              {this.props.children}
                </li>
        {/* <TestPureCmp item={this.state.item}/> */}
        </div>
        );
    }
}

const mapStateToProps=(state,ownprops)=>{
    let nodes=state.events.group;
    let node=null;
    let resultProps=null;
    nodes.every((element,idx,arr) => {
        if(element.idx === ownprops.idx)
        {
            node=element;
            return false;
        }
        else
        return true;
    });
    return {
        jumpClass:node.jumpClass,
    };
}
const mapDispatchToProps=(dispatch)=>{
    return{
        onTriClick:()=>{
            dispatch(triangle_trigger_click_action());
        },
        onGoingJump:(id)=>{
            dispatch(going_jump_action(id));
        }
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(ShapeCmp);