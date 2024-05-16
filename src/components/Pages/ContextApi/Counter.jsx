import React, { createContext,useState } from "react";
export const CounterCotext = createContext(null);
// const UserProvider = ({ children }) => {
//     const [name, setName] = useState("John Doe");
//     const [age, setAge] = useState(1);
//     const happyBirthday = () => setAge(age + 1);
//     return (
//       <UserContext.CounterCotext value={{ name, age, happyBirthday }}>
//         {children}
//       </UserContext.CounterCotext>
//     );
//   };

export const CounterProvider=(props)=>{
  const[count,setCount]=useState(5)
  return(
    <CounterCotext.Provider  value={{count,setCount}}>
      {props.children}
    </CounterCotext.Provider >
  )
}


//provider section use
//import { CounterProvider } from "./components/Pages/Counter.jsx";
////<CounterProvider>
   ////     <App />
//////</CounterProvider>


///use section
////import React, { useContext } from "react";
///import { CounterCotext } from "./components/Pages/Counter";
// const data= useContext(CounterCotext)