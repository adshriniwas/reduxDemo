import { decrement, increment } from "../../store/counterSlice";
import Stories from "../Stories";
import { useSelector, useDispatch } from "react-redux";
const News = (props) => {
  const counter = useSelector((state) => state.counter);
  const dispatch = useDispatch();
  return (
    <>
      <p>News</p>
      <Stories />
      <h1>Counter:{counter}</h1>
      <button
        onClick={() => {
          dispatch(increment());
        }}
      >
        Increment
      </button>
      <button
        onClick={() => {
          dispatch(decrement());
        }}
      >
        Decrement
      </button>
    </>
  );
};

export default News;
