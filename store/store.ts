import { configureStore } from "@reduxjs/toolkit";
import activCategoryReducer from "../lib/ActivCategory/activCategory";
import counterReducer from "../lib/Counter/counterSlice";

const store = configureStore({
  reducer: {
    counter: counterReducer,
    activCategory: activCategoryReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;

export default store;
