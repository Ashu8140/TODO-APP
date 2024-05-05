import React from "react"; 
import {BiRectangle} from "react-icons/bi"

function ThingsToDo({item,DeleteItem}){
   return(   


      <div className=" text-xl">
<h1 className="text-2xl font-bold mt-4">Things To DO</h1>
  {  item.map(function(data,index){
   

     return(
        
        <button onClick={()=>DeleteItem(index)} className="flex"><BiRectangle className="mt-auto mr-2"/>{data}</button>
        )
      })
      
   }
      
   </div>
);
}
export default ThingsToDo;