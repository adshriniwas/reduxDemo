import { useReducer } from "react";

// action - >{type:''}
// reducer -> (state,action)
// state
// | dispatch => {action} |-> | reducer => state | => component |
    // phase 1 - trigger     phase 2 - mutate      phase 3 - update comp

/*
reducer is function -> (state,action)
*/

const initialState = { count: 0 };

const reducer = (state, action) => {
  switch (action.type) {
    case "increment":
      return { count: state.count + 1 }; // nothing but state
    case "decrement":
      return { count: state.count - 1 };
    case "reset":
      return initialState;
    default:
      return state;
  }
};

const UseReducerHook = () => {
  const [state, dispatch] = useReducer(reducer,initialState);

// action -> {type:''}
  return (
    <>
      <p>Count is {state.count}</p>
      <button onClick={()=>{dispatch({type:'increment'})}}>Increment</button>
      <button onClick={()=>{dispatch({type:'decrement'})}}>Decrement</button>
      <button onClick={()=>{dispatch({type:'reset'})}}>Reset</button>
    </>
  );
};

export default UseReducerHook;
