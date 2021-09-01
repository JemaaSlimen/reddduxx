import { useState } from 'react';
import './App.css';
import AddTask from './components/AddTask';
import TaskList from './components/TaskList';
// import{List} from './DataTask';
 import "bootstrap/dist/css/bootstrap.min.css";
// import {useSelector} from 'redux-react'
// import {todoReducer} from './redux/reducer/reducer'

function App() {

  // const List = useSelector(state => state.todoReducer.List)

  // const [newList, setNewList] = useState(List);


  // const handleAdd=(newTask) => {
  //   setNewList([...newList,newTask])
  // }


  // const handleRemove =(deleteId) => {
  //   console.log(deleteId)
  //    setNewList(newList.filter((elmt) => elmt.id !== deleteId));
  //  }
  //  const handleEdit =(editeId,newdesc) => {
  //    setNewList(newList.map((elmt) => elmt.id ===editeId ? {...elmt,description:newdesc }:elmt));
  //  }

  return (
    <div className="App">
      <h1>Hello</h1>
      {/* <AddTask handelAdd={handleAdd}/> */}
      <AddTask/>
      {/* <TaskList List={newList}  */}
      {/* <TaskList List={List} */}

       <TaskList  />

      {/* handleRemove={handleRemove}
      handleEdit={handleEdit}/> */}
      
     
    </div>
  );
}

export default App;
