// import Counter from "./Counter";
// import Header from "./Header";
// import Login, { Isha, UserKey, Users } from "./Setting";
// import { useState } from "react";
// import State from "./State";
// import Props from "./Props";
// import Student from "./Student";
// import User from "./User";
// import Wrapper from "./Wrapper";

//  const muskan=(fruite)=>{
//     alert(fruite)
//   }
// function App() {
//   const name = "muskan isha";
//   const userObj={
//     name:"ishu",
//     email:"@email.com",
//     age:34
//   }
//   function callFun(){
//     alert("function called")
//   }
//   const userArray=['mus','mkio','bhui']
//   let v = 12;
//   let u = 10;
//   let path ="./images/github.png"
//   function Furits() {
//     return "apple";
//   }
//   function sum(a, b) {
//     return a + b;
//   }
//   function operation(a, b, op) {
//     if (op == "+") {
//       return a + b;
//     } else if (op == "+") {
//       return a - b;
//     } else a * b;
//   }
// const fruit=()=>{
//   alert("bana")

// }
// const muskan=(name)=>{
//   alert(name)
// }
//   return (
//     <div>
//       <h1>hello rect.js</h1>
//       <h1>{name}</h1>
//       <h1>{v + u}</h1>
//       {Furits()}
//       <h1>{sum(70, 90)}</h1>
//       <h1>{operation(20, 20, "+")}</h1>
//       <h1>{userObj.name}</h1>
//       <h1>{userObj.email}</h1>
//       <h2>{userArray[1]}</h2>
//      <img src={path}></img>
//      <button onClick={()=>fruite("apple")}
//   >apple</button>
//      <button onClick={()=>muskan("mahi")}
//   >name</button>
//     </div>

//   );
// }

// export default App;

// function App() {
//   const [fruit,setFruit]= useState("Apple");
//   const handleFruit = () => {
//     setFruit("orengo");
//   };
//   return (
//     <div>
//       <h1>State in React Js</h1>
//       <h1>{fruit}</h1>
//       <button onClick={handleFruit}>change fruit name</button>
//       <State/>
//     </div>
//   );
// }

// export default App;

// function App() {
//   const [count, setCount] = useState(0);
//   return (
//     <div>
//       <h1>{count}</h1>
//       <button onClick={() => setCount(count + 1)}>Counter</button>
//       {count == 0 ? (
//         <h1>Condition 0</h1>
//       ) : count == 1 ? (
//         <h1>Condition 1</h1>
//       ) : count == 2 ? (
//         <h1>Condition 2</h1>
//       ) : count == 3 ? (
//         <h1>Condition 3</h1>
//       ) : count == 4 ? (
//         <h1>Condition 4</h1>
//       ) : (
//         <h1>other condition</h1>
//       )}
//     </div>
//   );
// }
// export default App

// function App(){
  // let userName="muskan";
  // let Age=23;
  // let email="muskan@gmail.com"
  // let userObject1={
  //   name:"muskan",
  //   age:"23",
  //   email:"muskan@gmail.com"
  // }
  // let userObject2={
  //   name:"mahi",
  //   age:"20",
  //   email:"mskan@gmail.com"
  // }
  // return(
  //   <div>
  //     <h1>props in React js</h1>
  //     <Student name="isha"/>
   
      {/* <Props name="muskan tuteja" age={23} email="muskan@gmail.com"  /> */}
      {/* <Props user={userObject1}/>
      <Props user={userObject2}/>
     <User name="muskan 90"/>
     <User name="muskan 99"/>
     
     
     <Wrapper color="black">
     <h2>hello my name is muskan  0</h2>
     </Wrapper>
     <Wrapper color="pink">
     <h2>hello my name is muskan 1</h2>
     </Wrapper>
     <Wrapper>
     <h2>hello my name is muskan 2</h2>
     <h2> my name is muskan 2</h2>
     </Wrapper>
    

    </div>
    
  )
// } */}
// export default App


// .....get input field value
// import React, { useState } from 'react'

// const App = () => {
//   const[val,setVal]=useState("")
//   const[ref,setRef]=useState("")
//   const[com,setCom]=useState("")
//   return (
//     <div>
//       <h1> 1 Get Input Field Value</h1>
//       <input type='text' value={val} onChange={(event)=>setVal(event.target.value)} placeholder='enter User Name'/>
//       <h1>{val}</h1>
//       <button onClick={()=>setVal("")}>Clear</button>

//       <h1>2 enter the name</h1>
//       <input type='text' value={ref} onChange={(event)=>setRef(event.target.value)} placeholder='enter User Name'/>
//       <h1>{ref}</h1>
//       <button onClick={()=>setRef("")}>Clear</button>

//       <h1> 3 enter you name</h1>
//       <input type='text' value={com} onChange={(event)=>setCom(event.target.value)} placeholder='enter User Name'/>
//       <h1>{com}</h1>
//       <button onClick={()=>setCom("")}>Clear</button>
      
//     </div>
//   )
// }

// export default App


// import React, { useState } from 'react'

// const App = () => {
//   const [name,setName]=useState('')
//   const [password,setPassword]=useState('')
//   const [email,setEmail]=useState('')
//   return (
//     <div>
//       <h1>Controller Component</h1>
//       <form action="" method='get'>
//         <input type="text" onChange={(even)=>setName(even.target.value)} placeholder='Enyter Value' />
//          <br></br> <br></br>
//         <input type="text" placeholder='Enyter password' />
//          <br></br> <br></br>
//         <input type="text" placeholder='Enyter email' />
//          <br></br> <br></br>
//          <button>submit</button>
//          <h3>{name}</h3>
//          <h3>{password}</h3>
//          <h3>{email}</h3>

//       </form>
      
//     </div>
//   )
// }

// export default App


import React from 'react'
import HandleCheckBoxes from './HandleCheckBoxes'
import HandleRadio from './HandleRadio'
import Loop from './Loop'

const App = () => {
  return (
    <div>
      <h1>1 Handle Checkbox in React.js</h1>
      <HandleCheckBoxes/>
      <h1>2 Handle Radio and Dropdown</h1>
      <HandleRadio/>
       <h1>3 Loop in JSX with Map Function</h1>
      <Loop/>
     
    </div>
  )
}

export default App


