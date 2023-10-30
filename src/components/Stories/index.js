import { Fragment } from "react";
import { useStory } from "../../state/StoryContext";
import { useSelector } from "react-redux";

const Stories = () => {
  const {latitude,longitude} = useSelector((state)=> state.location)
  const { storyList } = useStory();
  return (
    <>
      <p>Stories</p>
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
      <div className="rootContainer">
        {storyList.map((story, index) => {
          return (
            <Fragment key={index}>
              <div className="card">
                <div className="container">
                  <div
                    style={{
                      display: "flex",
                      justifyContent: "space-between",
                      alignItems: "center",
                    }}
                  >
                    <p style={{ fontWeight: "bold" }}>{story}</p>
                  </div>
                </div>
              </div>
            </Fragment>
          );
        })}
      </div>
    </>
  );
};

export default Stories;
