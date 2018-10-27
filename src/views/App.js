import React, { Component } from 'react';
import {connect} from 'react-redux';
import './material.scss';
import ShapeCmp from './ShapeCmp.js';
import HOC from "./VariationShapeCmp.js";
import {init_random_action,happy_together_action,going_jump_action} from '../reducers/actions';

class App extends Component {
  constructor(props,context){
    super(props,context);
    this.resetClick=this.resetClick .bind(this);
    this.happyClick=this.happyClick .bind(this);
  }
  componentDidMount(){
    this.props.dispatch(init_random_action(this.refs.canvasRef));
  }
  resetClick(e){
    this.props.dispatch(init_random_action(this.refs.canvasRef));
  }
  happyClick(e){
    const {group}=this.props;
    let p=Promise.resolve();
    for (const item of group) {
      p=p.then(
        (res)=>{
          return new Promise(function(resolver,reject){
            setTimeout(() => {
              resolver(item.idx);
            }, 1000);
          }).then(
            res=> this.props.dispatch(going_jump_action(res))
          )
        }
      );
    }
   // this.props.dispatch(happy_together_action());
  }
  render() {
    const {group}=this.props;
    return (
      <div>
      <button className="resetButton" onClick={this.resetClick}>Reset</button>
      <button className="resetButton" onClick={this.happyClick}>Happy Together</button>
      <div className="customCanvas" ref="canvasRef">
       {
         
         group.map(
           (item,idx,arr)=>{
             let showNotice=false;
            if(idx===0)showNotice=true;
            if(showNotice === true){
              return <HOC shapeName={item.shapeName} idx={item.idx}
             state="init"
             scale={item.scale}
             degree={item.degree}
             top={item.top}
             left={item.left}
             showNotice={showNotice}/>
            }
            else
             return <ShapeCmp shapeName={item.shapeName} idx={item.idx}
             state="init"
             scale={item.scale}
             degree={item.degree}
             top={item.top}
             left={item.left}
             showNotice={showNotice}/>
           }
         )
       }
      </div>
      </div>
    );
  }
}
var mapStateToProps=(state)=>{
  console.log("state...",state);
    return{
      init:state.events.init,
      group:state.events.group,
    }
}
export default connect(mapStateToProps,null)(App);
