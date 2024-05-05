import React, { useState } from 'react'

import CreateThings from './CreateThings'
import ThingsDone from './ThingsDone'
import ThingsToDo from './ThingsTodo';
import { Route,Routes} from "react-router-dom"
import { useEffect } from 'react'
import Xtodo from './Xtodo'

  function App() {
    let stringData=JSON.parse( localStorage.getItem(`list`) );
    let stringTask=JSON.parse( localStorage.getItem(`task`) );

    const [query,setQuery]=useState("");
    const [item, setItem]=useState(stringData); 
    const [task, setTask]=useState(stringTask);

    


    useEffect(()=>{
      localStorage.setItem(`list`,JSON.stringify(item));
    },[item]);
    
    useEffect(()=>{
      localStorage.setItem(`task`,JSON.stringify(task));
      
    },[task]);


    function handleChange(event){
      setQuery(event.target.value);
    }
    
    function handleSave(){
      if(query){
      setItem([...item,query]);
      }
      setQuery("");
    };
    
    const DeleteItem=(index)=>{
      var newItem=item;
      setTask([newItem.splice(index,1),...task]);
     setItem([...newItem]);
 }
    const DeleteData=(index)=>{
      var newData=task;
      newData.splice(index,1);
     setTask([...newData]);
 }

    
    return (
     
     <div>
      <Xtodo />
  <div className='ml-20 mt-2'>
       <CreateThings handleChange={handleChange} handleSave={handleSave} query={query}/>
       <ThingsToDo item={item}  DeleteItem={DeleteItem}  />
       <ThingsDone task={task} DeleteData={DeleteData}/>
    </div>
    </div>
  );
}

export default App
