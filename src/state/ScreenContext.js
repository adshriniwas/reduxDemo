import React, { createContext, useContext, useEffect, useState } from "react";
import ProfileData from "../mockData/ProfileData.json";
import UserData from "../mockData/UserData.json";
import FriendsData from "../mockData/FriendsData.json";

// step 1: creare context
const ScreenContext = createContext();

// step 2: create screen provider component

export const ScreenProvider = ({ children }) => {
  const [pageState, setPageState] = useState("");
  const [mainHeader, setMainHeader] = useState("");
  const [initialState, setInitialState] = useState([]);
  useEffect(() => {
    switch (pageState) {
      case "Profiles":
        setMainHeader(pageState);
        setInitialState(ProfileData);
        break;
      case "Users":
        setMainHeader(pageState);
        setInitialState(UserData);
        break;
      case "Friends":
        setMainHeader(pageState);
        setInitialState(FriendsData);
        break;
      default:
        setMainHeader('');
        setInitialState([]);
        break;
    }
  }, [pageState]);
  return (
    <ScreenContext.Provider
      value={{ pageState, setPageState, mainHeader, initialState }}
    >
      {children}
    </ScreenContext.Provider>
  );
};

// step 3: create custom hook

export const useScreen = () => {
  const context = useContext(ScreenContext);
  if (!context) {
    throw new Error("Screen context is only used inside Screen Provider");
  }
  return context;
};
