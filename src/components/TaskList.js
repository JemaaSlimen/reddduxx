import React from 'react'
import ToDo from './ToDo'
import {useSelector} from 'react-redux'
// const TaskList = ({List,handleRemove, handleEdit}) => {
    // const TaskList = ({handleRemove, handleEdit}) => {

         const TaskList = () => {
      const List = useSelector(state => state.todoReducer.List)
    return (
        <div>
            {List.map((todo) => 
                <ToDo key={todo.id}  
                Task={todo} 
                // handleRemove={handleRemove}
                // handleEdit={handleEdit}
                
                />
            )}
        </div>
    )
}

export default TaskList
