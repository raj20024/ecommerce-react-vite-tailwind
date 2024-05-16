import React, { createContext,useState } from "react";
export const CartContext = createContext(null);
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

export const CartProvider=(props)=>{
  const[cartItem,setcartItem]=useState([])
  ///console.log(cartItem);

  const handleDecrement=(card_id)=>{
    setcartItem(cartItem=>cartItem.map((item)=>
    card_id===item.id ? {...item,qty:item.qty -(item.qty >1 ? 1 : 0)}:item
    ))
  }

  const handleIncrement=(card_id)=>{
    setcartItem(cartItem=>cartItem.map((item)=>
    card_id===item.id ? {...item,qty:item.qty + (item.qty < 10 ? 1 : 0)}:item
    ))
  }
  return(
    <CartContext.Provider  value={{cartItem,setcartItem,handleDecrement,handleIncrement}}>
      {props.children}
    </CartContext.Provider >
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