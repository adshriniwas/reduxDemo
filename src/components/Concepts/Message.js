import { useState } from "react";
import ConditinalRendering from "./ConditionRendering";

function Message() {
  console.log("ppp i am re -rendering");
  const [message, setMessage] = useState(1); 
  const changeMessage = (currState) => {
    setMessage((prevState) => {
      if (prevState !== currState) return prevState + 2;
      else return prevState;
    });
  };
  return (
    <>
      <h1>{message}</h1>
      <button
        style={{ cursor: "pointer" }}
        onClick={() => {
          changeMessage(2); 
        }}
      >
        Click Me
      </button>
      <ConditinalRendering/>
    </>
  );
}

export default Message;

// es 6 export
// JSX
// Fragment
// Virtial DOM
