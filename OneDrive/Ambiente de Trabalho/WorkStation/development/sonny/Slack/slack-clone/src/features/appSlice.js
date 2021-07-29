import { createSlice } from '@reduxjs/toolkit';



export const appSlice = createSlice({

  name: 'app',
  initialState: {
      roomId: null
  },

  //reducers states
  reducers: {
  
    enterRoom: (state, action) => {

        state.roomId = action.payload.roomId;
    },

  },
 
});

export const { enterRoom } = appSlice.actions;//state actions

export const selector_enterRoom = (state) => state.app.roomId;//allow us to pull the states

export default appSlice.reducer;//exporting the reducer