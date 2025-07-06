import React, { useState } from 'react'


const HandleCheckBoxes = () => {
const [handleCheckBoxes,setHandleCheckBoxes]=useState([]);
const handlehandleCheckBoxes=(event)=>{
  console.log(event.target.value, event.target.checked);
  if(event.target.checked){
    setHandleCheckBoxes([...handleCheckBoxes, event.target.value])

  }else{
    setHandleCheckBoxes([...handleCheckBoxes.filter((item)=>item!=event.target.value)])


  }
}
  return (
    <div>
      <h3>Select your skills</h3>
      <input onChange={handlehandleCheckBoxes} type='checkbox' id='PHP' value="php" />
      <label htmlFor='PHP'>PHP</label>

      <input  onChange={handlehandleCheckBoxes} type='checkbox' id='JAVA' value="Java" />
      <label htmlFor='JAVA'>JAVA</label>

      <input onChange={handlehandleCheckBoxes} type='checkbox' id='Python' value="Python" />
      <label htmlFor='Python'>Python</label>

      <input onChange={handlehandleCheckBoxes}  type='checkbox' id='c' value="c"/>
      <label htmlFor='c'>c</label>
      
      <h1>{handleCheckBoxes.toString()}</h1>
    </div>
  )
}

export default HandleCheckBoxes
