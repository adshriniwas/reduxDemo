import { useEffect, useState } from "react";

// usestate is used for managing the state of the component
const initialState = 0;
const UseEffectHook = () => {
  // changing states in react is sync not asynch
  const [state, setState] = useState(initialState);
  const increment = () => {
    // console.log('ppp',state) // 0
    setState(state + 1); // 0 + 1
    // console.log('ppp',state) // 1
  };

  useEffect(()=>{},[]) // executes only 1 time - when component renders for the first time

  useEffect(()=>{
    console.log('ppp first render')
  },[]) // for the first render only

  useEffect(()=>{
    alert('Alert',state*10)
    console.log('ppp',state)}
    ,[state]) // 
  return (
    <>
      <p>{`State is ${state}`}</p>
      <button style={{ cursor: "pointer" }} onClick={increment}>
        Click Me
      </button>
    </>
  );
};

export default UseEffectHook;
