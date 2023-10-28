import { createSlice } from "@reduxjs/toolkit";

const locationSlice = createSlice({
    name:"location",
    initialState: {
        latitude:"",
        longitude:""
    },
    reducers:{
        setLocation: (state,action)=> action.payload
        
    },
});

export const {setLocation} = locationSlice.actions
export default locationSlice.reducer