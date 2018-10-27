import {TRIGGER_CLICK,EMIT_ROTATE,INIT_RANDOM,GOING_JUMP, HAPPY_TOGETHER} from './actionTypes';

export const triangle_trigger_click_action=(data)=>{
    return {
        type:TRIGGER_CLICK,
        payload:data
    }
}
export const emit_rotate_action=(data)=>{
    return {
        type:EMIT_ROTATE,
        payload:data
    }
}
export const init_random_action=(data)=>{
    return {
        type:INIT_RANDOM,
        payload:data
    }
}
export const going_jump_action=(data)=>{
    return{
        type:GOING_JUMP,
        payload:data
    }
}
export const happy_together_action=()=>{
    return {
        type:HAPPY_TOGETHER,
    }
}