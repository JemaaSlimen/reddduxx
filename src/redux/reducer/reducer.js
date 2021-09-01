
import{ADD_TASK}from '../action/constant';
import{REMOVE_TASK}from '../action/constant'


const initialState={
    List :[
{id:1,description:"coding with react",isDone:true},
{id:2,description:"learn by making",isDone:false},
{id:3,description:"Practice sport",isDone:false}

]
}

   export  const todoReducer = (state=initialState,{type,payload}) => {
  switch (type) {
      case ADD_TASK:
          
         return {
             ...state,List:[...state.List,payload]
         }

         case REMOVE_TASK:
          
         return {
             ...state,List:state.List.filter(el=>el.id!=payload)
         }
  
      default:
         return state
  }
}

