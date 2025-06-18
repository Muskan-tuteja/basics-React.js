// import Counter from "./Counter";
// import Header from "./Header";
// import Login, { Isha, UserKey, Users } from "./Setting";
import { useState } from "react";
import State from "./State";
import Props from "./Props";
import Student from "./Student";

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

function App(){
  // let userName="muskan";
  // let Age=23;
  // let email="muskan@gmail.com"
  let userObject1={
    name:"muskan",
    age:"23",
    email:"muskan@gmail.com"
  }
  let userObject2={
    name:"mahi",
    age:"20",
    email:"mskan@gmail.com"
  }
  return(
    <div>
      <h1>props in React js</h1>
      <Student name="isha"/>
   
      {/* <Props name="muskan tuteja" age={23} email="muskan@gmail.com"  /> */}
      <Props user={userObject1}/>
      <Props user={userObject2}/>
     

    </div>
  )
}
export default App
