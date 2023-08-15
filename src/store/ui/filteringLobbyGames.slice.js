import { createSlice } from '@reduxjs/toolkit';
const FilterLobbyGames = createSlice({
    name: 'filterLobbyGames',
    initialState: {
      lobbyGamesFil  : []
    },
    reducers: {
        getFilteredLobbyGames: (state, action) => {
            state.lobbyGamesFil = action.payload; // Update the value in the store
        },
    },
});
export const { getFilteredLobbyGames } = FilterLobbyGames.actions;
export default FilterLobbyGames.reducer;