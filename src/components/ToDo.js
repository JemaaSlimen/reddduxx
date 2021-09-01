import React from 'react'
import { Button} from 'semantic-ui-react'
import EditeTask from './EditeTask';
import {removetask} from '../redux/action/action';
import {} from 'redux/'


// const ToDo = ({Task, handleRemove, handleEdit }) => {
  const ToDo = ({Task}) => {
    const dispatch = useDispatch(function)
    return (
        <div>
       <h1 style={{ color: "white" }}> {Task.description}</h1>

<Button.Group>
  {/* <Button basic color="red" onClick={() => handleRemove(Task.id)}> */}
   <Button basic color="red">
    Remove
  </Button>
  {/* <EditeTask Task={Task} handleEdit={handleEdit} /> */}
    <EditeTask Task={Task} />
  <Button basic color="blue"  onClick={ ()=> dispatch(removetask(Task.id))} >
    {Task.isDone ? "Done" : "Undone"}
  </Button>
</Button.Group>
        </div>
    )
}

export default ToDo
