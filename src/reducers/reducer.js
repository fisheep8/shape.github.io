import {TRIGGER_CLICK,INIT_RANDOM, GOING_JUMP, HAPPY_TOGETHER} from './actionTypes.js';
import {utilTool} from '../utils/util.js';

var ShapesNameOption=["triangle20Red","triangle10Green","triangle10Yellow","circle30Red","circle10Green","circle10Yellow","circle10FrameBlue","circle10FrameRed"];
var util=new utilTool();
export default (state={init:false,initCount:15,group:[]}, action)=>{
    switch (action.type) {
        case TRIGGER_CLICK:
        return {...state};
            break;
        case INIT_RANDOM:
        let nodes=[];
        for (let index = 0; index < state.initCount; index++) {
            let node={
                idx:index,
                shapeName:ShapesNameOption[util.randomByRange(0,ShapesNameOption.length)],
                scale:util.randomByRange(2,5),
                degree:util.randomByRange(-180,180),
                left:util.randomByRange(-400,400),
                top:util.randomByRange(-200,200),
                state:'init',
                showNotice:false,
                isColorful:util.randomByRange(0,2),
                colorfulClass:'colorfulShape',
                jumpClass:''
            };
            nodes.push(node);
        }
        return {...state,group:nodes};
            break;
        case GOING_JUMP:
        let node=null;
        let id=action.payload;
        state.group.some(function(item){
            if(item.idx === id)
            {
                node=item;
                node.jumpClass="running";
                return true;
            }
            else
            return false;
        });
       
        // let newnode={};
        // Object.assign(newnode,node);
        // newnode.shapeName=newnode.shapeName+" running";
        // console.log("before ",);
        // let newnodes={...state.group,newnode};
        let newstate={};
        Object.assign(newstate,state);
        return newstate;
        break;
        case HAPPY_TOGETHER:
        state.group.map((item,idx,arr)=>{
            item.jumpClass="running";
        });
        let st={};
        Object.assign(st,state);
        return st;
        break;
        default:
        return {...state};
            break;
    }
}