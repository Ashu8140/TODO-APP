import React, { useState } from "react"; 
import {Link} from "react-router-dom"

function CreateThings({handleChange,handleSave,query}){

return(    
<div className="mr-40  py-10 ">

<div className="flex flex-row "> 
<input  value={query} onChange={handleChange} className=" border-2 " placeholder="Enter Task Here  " type="text"  />
<button  onClick={handleSave} className=" p-1 px-3 rounded-md bg-yellow-500">Save</button>

</div>

</div>
);
}
export default CreateThings;





