import React, { useState } from 'react'

const HandleRadio = () => {
  const[gender,setGender]=useState('female');
  const[city,setCity] = useState("hansi")
  return (
    <div>
      <h4>Select Gender</h4>7
      <input type='radio' onChange={(e)=>setGender(e.target.value)}name='gender' value={"male"} checked={gender=='male'} id='male'></input>
      <label htmlFor='male'>Male</label>

      <input type='radio' onChange={(event)=>setGender(event.target.value)} name='gender' value={"female"} checked={gender=='female'}id='female'></input>
      <label htmlFor='female'>Female</label>
      <h2>Selected Gender :{gender}</h2>

      <br></br>
      <br></br>
      <h4>Selected City</h4>
      <select onChange={(event)=>setCity(event.target.value)}defaultValue={"Hansi"}>
        <option value="noida">Noida</option>
        <option value="hansi">Hansi</option>
        <option value="jind">Jind</option>
      </select>
      <h2>Selected city:{city}</h2>

    </div>
  )
}

export default HandleRadio
