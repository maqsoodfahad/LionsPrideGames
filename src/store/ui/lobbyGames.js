import { createSlice } from "@reduxjs/toolkit";
const lobbyGames = createSlice({
  name: "lobbyGamesResp",
  initialState: {
    value: [],
    gamesMap: {},
  },
  reducers: {
    getLobbyGames: (state, action) => {
      const games = action.payload;
      state.value = games; // Update the value in the store
      state.gamesMap = games.reduce((acc, curr) => {
        acc[curr.gameId] = curr;
        return acc;
      }, {});
    },
  },
});
export const { getLobbyGames } = lobbyGames.actions;
export default lobbyGames.reducer;
