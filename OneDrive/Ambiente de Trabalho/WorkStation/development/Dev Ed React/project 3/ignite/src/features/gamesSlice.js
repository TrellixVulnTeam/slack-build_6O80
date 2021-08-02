import { createSlice } from '@reduxjs/toolkit';



export const gamesSlice = createSlice({

  name: 'games',
  initialState: {
     popularGames: [],
     upcomingGames: [],
     newGames: [],
     search: [],
  },

  //reducers states
  reducers: {

    PopularGames_fetch: (state, action) => {
  
      state.popularGames = [];
    },
  
    upComingGames_fetch: (state,action) => {

      state.upcomingGames = [];
    },

    newGames_fetch: (state,action) => {

      state.newGames = [];
    },
  },
 
});

export const { PopularGames_fetch, upComingGames_fetch, newGames_fetch } = gamesSlice.actions;//state actions

export const popularGames_Selector = (state) => state.games.popularGames;//allow us to pull the states
export const upcomingGames_Selector = (state) => state.games.upcomingGames;//allow us to pull the states
export const newGames_Selector = (state) => state.games.newGames;//allow us to pull the states

export default gamesSlice.reducer;//exporting the reducer
