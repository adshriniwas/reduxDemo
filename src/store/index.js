import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "./counterSlice";
import locationReducer from "./locationSlice"

const store = configureStore({
  reducer: {
    counter: counterReducer,
    location: locationReducer
  },
});

export default store;
