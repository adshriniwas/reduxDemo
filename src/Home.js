import { useEffect, useState } from "react";
import FriendsIndex from "./components/Friends";
import Posts from "./components/Posts";
import ProfileIndex from "./components/Profiles";
import UserIndex from "./components/Users";
import { ScreenProvider, useScreen } from "./state/ScreenContext";
import { StoryProvider } from "./state/StoryContext";
import { useNavigate } from "react-router-dom";
const Home = () => {
  const [position, setPosition] = useState({ latitude: "", longitude: "" });
  useEffect(() => {
    if (navigator.geolocation) {
      // first check if the browser provided location api
      navigator.geolocation.getCurrentPosition(
        (position) => {
          // console.log("ppp", position.coords.latitude);
          // console.log("ppp", position.coords.longitude);
          setPosition({
            latitude: position.coords.latitude,
            longitude: position.coords.longitude,
          });
        },
        (error) => {
          console.log("ppp there is a problem while fetching the location");
        }
      );
    } else {
      console.log("ppp your browser does not provide location");
    }
  }, []);
  return (
    <>
      <ScreenProvider>
        <Main />
      </ScreenProvider>
      <StoryProvider>
        <Posts />
      </StoryProvider>
      <>
        {position.latitude && position.longitude ? (
          <>
            <p>My Location is</p>
            <ul>
              <li>latitude: {position.latitude}</li>
              <li>longitude: {position.longitude}</li>
            </ul>
          </>
        ) : (
          <>
            <p>fetching....</p>
          </>
        )}
      </>
    </>
  );
};

const Main = () => {
  const { pageState, setPageState } = useScreen();
  const navigate = useNavigate(); // programmatically navigating
  const location = {
    name: "Pavan",
    age: 2,
    Place: "Warangal",
  };
  return (
    <>
      <div style={{ display: "grid" }}>
        <p style={{ justifySelf: "center" }}>Innomatics JNTU</p>
      </div>
      <button
        onClick={() => {
          setPageState("Profiles");
        }}
      >
        Profiles
      </button>
      <button
        onClick={() => {
          setPageState("Users");
        }}
      >
        Users
      </button>
      <button
        onClick={() => {
          setPageState("Friends");
        }}
      >
        Friends
      </button>
      {/* /page1?name=hemanth&age=10&place=hyderabad */}
      <button
        onClick={() => {
          navigate(
            // "/page1?name=PAVAN&age=2&place=WARANGAL",
            `/page1?name=${location.name}&age=${location.age}&place=${location.Place}`,
            {
              state: {
                name: "Hemanth",
                age: 10,
                place: "Hyderabad",
              },
            }
          );
        }}
      >
        Page1
      </button>
      <button
        onClick={() => {
          navigate("/page2/12345");
        }}
      >
        Page2
      </button>
      <button
        onClick={() => {
          navigate("/page3");
        }}
      >
        Page3
      </button>
      <button
        onClick={() => {
          navigate("/page4");
        }}
      >
        Page4
      </button>
      {/* {pageState === "Profiles" ? (
          <ProfileIndex />
        ) : pageState === "Users" ? (
          <UserIndex />
        ) : (
          <></>
        )} */}

      {(() => {
        switch (pageState) {
          case "Profiles":
            return <ProfileIndex />;
          case "Users":
            return <UserIndex />;
          case "Friends":
            return <FriendsIndex />;
          default:
            return <></>;
        }
      })()}
    </>
  );
};

export default Home;
