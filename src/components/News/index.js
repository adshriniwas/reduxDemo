import { decrement, increment } from "../../store/counterSlice";
import Stories from "../Stories";
import { useSelector, useDispatch } from "react-redux";
const News = (props) => {
  const {latitude,longitude} = useSelector((state)=> state.location)
  const counter = useSelector((state) => state.counter);
  const dispatch = useDispatch();
  return (
    <>
      <p>News</p>
      <Stories />
      {latitude && longitude?
      (<>
        <p>My Location is:</p>
        <ul>
          <li>latitude: {latitude}</li>
          <li>longitude: {longitude}</li>
        </ul>
        </>
      ):
      <>
        <p>fetching....</p>
      </>
      }
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
