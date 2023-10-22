import React from "react"

const InputTask=({handleChange,query,SaveTask})=>{
    return(
    <div>
        <input value={query} onChange={handleChange} placeholder="Add your task " className="border border-black py-2 text-xl font-sans ml-40  rounded-full px-16 mt-10"></input>
        <button onClick={SaveTask} className="border border-black text-xl px-8 rounded-full py-2 bg-yellow-500" >Save</button>

    </div>);
}
export default InputTask;