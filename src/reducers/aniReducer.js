import {EMIT_ROTATE,TRIGGER_CLICK,GOING_JUMP} from './actionTypes.js';

export default (state={}, action)=>{
    switch (action.type) {
        case GOING_JUMP:
        console.log("triangle click  ani");
        return {...state};
            break;
    
        default:
        return {...state};
            break;
    }
}