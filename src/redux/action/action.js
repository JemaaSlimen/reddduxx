import {ADD_TASK} from './constant';
import {REMOVE_TASK} from './constant'



  export const addtask=(newtask) => {
    return
   { type:ADD_TASK,payload:newtask}
}

export const removetask=(id) => {
    return
   { type:REMOVE_TASK,payload:id}
}