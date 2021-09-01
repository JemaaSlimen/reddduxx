import React, { useState } from 'react'
import { Button,  Input } from 'semantic-ui-react'
import{useDispatch} from 'react-redux'
import {addtask} from '../redux/action/action'

// const AddTask = ({handleAdd}) => {
   const AddTask = () => {
     const dispatch = useDispatch(function);
    const [desc, setDesc] = useState("");
    const handleSubmit = (e) => {
        e.preventDefault();
        if (desc.length<=3) {alert("oops min 3 chars")} else 
       {
      //    handleAdd({ id: Date.now(), description: desc, isDone: false });
      //    setDesc("");
      //  }
    dispatch(addtask({ id: Date.now(), description: desc, isDone: false }));
         setDesc("");
       }

      };
   
    return (
        <div>
            <from onSubmit={handleSubmit} >
            <Input focus placeholder="Add..." onChange={(e)=> setDesc(e.target.value)} 
            
        value={desc}
            />
            <Button> 
          Add
            </Button>
            </from>
            

        </div>
    )
}

export default AddTask
