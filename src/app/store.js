import { configureStore } from "@reduxjs/toolkit";
import { reducer } from "../reducers/todoReducer";

const store = configureStore({
  reducer: reducer,
});

export default store;