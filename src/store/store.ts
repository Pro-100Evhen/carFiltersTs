import { configureStore } from "@reduxjs/toolkit";
import { filterReducer } from "./Slices/filterSlice";

const store = configureStore({
   reducer:{
      filter: filterReducer
   }
})

export default store;