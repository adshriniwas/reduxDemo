import React, { createContext, useContext, useState } from "react";

// step 1: creating context

const StoryContext = createContext();

// step 2 create story provider component
/**
1.  create template for the componet
2. props => {children}
3. return {children}
4. wrap {children} inside provider
 */

export const StoryProvider = ({ children }) => {
  const [storyList, addStory] = useState([]); // consumed on Stories
  const addToStoryList = (story) => { // POSTS
    if (story.length) {
      addStory((prevList) => {
        return [...prevList, story];
      });
    }
  };
  return (
    <StoryContext.Provider value={{ storyList, addToStoryList }}>
      {children}
    </StoryContext.Provider>
  );
};

// step 3: create custom hook

export const useStory = () => {
  const context = useContext(StoryContext);
  if (!context) {
    throw new Error("Context is only available inside provider component only");
  }
  return context;
};
