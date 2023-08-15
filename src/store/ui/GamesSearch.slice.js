import { createSlice } from "@reduxjs/toolkit";
import storage from "../../services/storage";
import { json } from "react-router-dom";

const userSearchesList = storage.get("userSearchesList") || [];
const UserSearch = createSlice({
  name: "userGamesSearch",
  initialState: {
    // userSearch: "",
    userSearchesList,
    searchText: "",
    searched: true,
  },
  reducers: {
    setSearchText: (state, action) => {
      state.searchText = action.payload;
    },

    getUserSearches: (state, action) => {
      const prevState = action.payload;
      state.searched = !state.searched;

      state.userSearchesList = state.userSearchesList.filter(
        (item) => item !== prevState
      );
      state.userSearchesList.unshift(prevState);
      const userSearchListed = JSON.stringify(state.userSearchesList);
      storage.store("userSearchesList", userSearchListed);
    },
    deleteRresentSearch: (state, action) => {
      const searchText = action.payload;
      const findRecentItem = state.userSearchesList.filter(
        (item) => item !== searchText
      );
      state.userSearchesList = findRecentItem;
      const userSearchListed = JSON.stringify(state.userSearchesList);
      storage.store("userSearchesList", userSearchListed);
    },
  },
});
export const { getUserSearches, setSearchText, deleteRresentSearch } =
  UserSearch.actions;
export default UserSearch.reducer;
