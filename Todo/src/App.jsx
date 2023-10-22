import React, { useState } from "react"
import NavBar from "./NavBar"
import InputTask from "./InputTask"
import Task from "./Task";

function App() {
let strinyfydata= JSON.parse(localStorage.getItem(`data`));
  
const  [query,setQuery]=useState("");
const [task,setTask]=useState([strinyfydata]);


localStorage.setItem(`data`,JSON.stringify(task))

  function handleChange(event){
  setQuery(event.target.value);
  }

  function SaveTask(){
    if(query){
      setTask([...task,query]);
      }
      setQuery("");
  }
  return (
    <>
    <NavBar/>
    <InputTask query={query} handleChange={handleChange} SaveTask={SaveTask}/>
    <Task task={task}/>
    </>
  )
}

export default App
