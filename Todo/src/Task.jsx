import React from "react";

function Task({task}){
  

 return(
<div>

{  task.map(function(data){
     return(
        <li className="text-xl ml-48 mt-4 "> {data} </li>
        )
      })
      
      }
      
        

</div>
    );}

export default Task;