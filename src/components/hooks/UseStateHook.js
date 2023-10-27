import { useState } from "react";

const initialState = { count: 0 };
const UseStateHook = () => {
  const [state, setState] = useState(initialState);
  const increment = () => {
    setState(state.count + 1); 
  };
  const decrement = () => {
    setState(state.count - 1); 
  };
  const reset = () => {
    setState(initialState); 
  };
  return (
    <>
      <p>{`Count is ${state.count}`}</p>
      <button style={{ cursor: "pointer" }} onClick={increment}>
        Increment
      </button>
      <button style={{ cursor: "pointer" }} onClick={decrement}>
        Decrement
      </button>
      <button style={{ cursor: "pointer" }} onClick={reset}>
        Reset
      </button>
    </>
  );
};

export default UseStateHook;
