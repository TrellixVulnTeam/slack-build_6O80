import { configureStore } from '@reduxjs/toolkit';
import mailReducer from "../features/mail.slice";
import userReducer from "../features/user.slice"


export const store = configureStore({
  reducer: {
    
    mail: mailReducer,
    user: userReducer,

  },
});
