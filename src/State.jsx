import { useState } from "react";
import User from "./User";

const State = () => {
  const [state, setState] = useState(0);
  const [rCounter, setRCounter] = useState(10);
  const [display, setDisplay] = useState(false);
  const [cont,setCount]=userState(10);
  // const [display,setDisplay] =useState(true)
  return (
    <div>
      <h1>State HELLO:{state}</h1>
      <h1>R counter : {rCounter}</h1>
      <h1>{count}</h1>
      <button onClick={() => setState(state + 1)}>Update State</button>
      <button onClick={() => setRCounter(rCounter - 1)}>Update R State</button>
      <h1>Toggle in React.Js</h1>
      <button onClick={() => setDisplay(!display)}>Toggle</button>
      <button onClick={()=>setRCounter(count+1)}>Counter</button>
      {/* {
        <button onClick={()=>setCount(count+1)}>Counter</button>
        count==0?<h1>Condition 0</h1>
        :count==1?<h1>Condition 1</h1>
        :count==2?<h1>Condition 2</h1>
        :count==3?<h1>Condition 3</h1>
        :count==4?<h1>Condition 4</h1>
        :null */}
        
        

        
        // display ? <h1>muskan</h1> : null

        // display=0? <User/>:null
        
      
    </div>
  );
};
export default State;
