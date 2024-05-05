import React from "react";
import {AiOutlineCheckSquare} from "react-icons/ai"

function ThingsDone({task,DeleteData}){
  
return(    
<div className="mt-3 text-xl ">
    <h1 className="font-bold text-2xl">Think done</h1>
    {  task.map(function(data,index){
     return(
        <li onClick={()=>DeleteData(index)} className="flex mt-2"><AiOutlineCheckSquare  className="mt-auto mr-4"/> {data} </li>
        )
      })
      
      }
      
    </div>
);
}
export default ThingsDone;