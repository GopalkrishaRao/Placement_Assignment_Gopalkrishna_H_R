import React, { useState } from "react";
import useLocalStorage from "./Hooks/useLocalStorage";
import { todoContext } from "./context/context";

import { CustomForm } from "./components/CustomForm";
import { TaskList } from "./components/TaskList";
import Editform from "./components/Editform";
import SearchFilter from "./components/SearchFilter";
import SearchValue from "./components/SearchValue";


function App() {

  const [tasks, setTasks] = useLocalStorage('react-todo.tasks', []);
  
  const [editedTask, setEditedTask] = useState(null);
  const [isEditing, setIsEditing] = useState(false);
  const [previousFoucs, setPreviousFocus] = useState(false);
  
  const [searchVal, setSearchVal]=useState("");
  const [sortVal, setSortVal] = useState(0);
  const [sortType, setSortType]= useState("A=>Z")
  
  const addTask = (task) =>{
    setTasks(prevState=>[...prevState, task])
  };

  const deleteTask = (id)=>{
    setTasks(prevState=>prevState.filter(t=>t.id!==id))
  };

  const toggleTask = (id)=>{
    setTasks(prevState => prevState.map(t=>(
      t.id===id 
        ? {...t, checked: !t.checked}
        : t
      )))
  };
  
  const updateTask = (task)=>{
    setTasks(prevState => prevState.map(t=>(
      t.id===task.id 
      ? {...t, name: task.name}
        : t
  )))
   closeEditMode()
  };

  const closeEditMode=()=> {
    setIsEditing(false);
    previousFoucs.focus()
  };

  const enterEditMode = (task) =>{
    setEditedTask(task);
    setIsEditing(true);
    setPreviousFocus(document.activeElement)
  };

  // sort Todo
  const sortTodo= ()=>{
   if(sortVal===0){
    setSortVal(1)
    setSortType("Time up")
   }else if(sortVal===1){
    setSortVal(2)
    setSortType("Time down")
   }else if (sortVal===2){
    setSortVal(3)
    setSortType("A=>Z")
   }else{
    setSortVal(0)
    setSortType("Z=>A")
   }
  }

  return (
    <>
    <todoContext.Provider value={
      {tasks, setTasks,deleteTask,
       toggleTask,editedTask, enterEditMode, updateTask, closeEditMode, addTask,searchVal, setSearchVal, sortTodo, sortVal,sortType }
       }>
    <div className="container">
      <header>
        <h1>To Do List</h1>
      </header>
      { isEditing && (<Editform/>) }
      <CustomForm />
      <SearchFilter/>
      {searchVal ? (<SearchValue/>) : (<TaskList/>) }
    </div>
    </todoContext.Provider>
    </>
  )
}

export default App