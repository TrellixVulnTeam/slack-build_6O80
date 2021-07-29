import { configureStore } from '@reduxjs/toolkit';
// import counterReducer from '../features/counterSlice';
import appReducer from "../features/appSlice";

export const store = configureStore({
  
  reducer: {
      app: appReducer,
  },
});
