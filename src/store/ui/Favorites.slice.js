import { createSlice } from "@reduxjs/toolkit";
const favoritesGames = createSlice({
  name: "favoritesGamesResp",
  initialState: {
    value: [],
  },
  reducers: {
    addFavorite: (state, action) => {
      state.value.push(action.payload);
    },
    removeFavorite: (state, action) => {
      state.value = state.value.filter((gameId) => gameId !== action.payload);
    },
    getFavoriteGames: (state, action) => {
      state.value = action.payload;
    },
  },
});
export const { addFavorite, removeFavorite, getFavoriteGames } =
  favoritesGames.actions;
export default favoritesGames.reducer;
