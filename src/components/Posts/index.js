import { useState } from "react";
import Feeds from "../Feeds";
import "./posts.css";
import { useStory } from "../../state/StoryContext";
import { Provider } from "react-redux";
import store from "../../store";
const Posts = () => {
  const [story, setStory] = useState("");
  const { addToStoryList } = useStory()
  const handleChange = (e) => {
    setStory(e.target.value);
  };

  return (
    <>
      <p>Posts</p>
      <div className="formContainer">
        <textarea
          value={story}
          onChange={handleChange}
          name="description"
          placeholder="Write story here..."
          rows={10}
          columns={10}
        />
      </div>
      <button
        onClick={() => {
          addToStoryList(story);
        }}
      >
        Submit
      </button>
      
      <Feeds />
      
    </>
  );
};

export default Posts;
