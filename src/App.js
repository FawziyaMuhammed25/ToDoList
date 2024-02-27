
import { useRef } from "react";
import {React, useState } from "react";
import './App.css'
const App =()=>
{
   const [x , setx] = useState([])
   const inputRef = useRef()
   
   const add =() =>{
      const value =inputRef.current.value;
      const newData ={completed :false , value}
      setx([...x , newData])
      inputRef.current.value=""
   }
   const itemDone =(index)=>{
      const newx = [...x]
      newx[index].completed = !newx[index].completed
      setx(newx)
   }
   const toDelete =(index) =>{
      const newx = [...x]
      newx.splice(index , 1)
      setx(newx)
   }
 return(
  
    <div className="App">
      <h2>To Do List </h2>
      <ul>
         {
            // x.map((item)=>{
            //    return <li>{item.value}</li>
            // })
            x.map(({value  , completed} , index) =>{
               return<div className="del">

                   <li className={completed ? "diffStyle" : ""} onClick={()=>itemDone(index)} >{value}</li>
                   <span onClick={ () => toDelete(index)}>X</span>
               </div>
                
            })
         }
      </ul>
      <input ref={inputRef} placeholder="Enter new task...."/>
      <button onClick={add}> Add </button>
    </div>
 );
}

export default App;