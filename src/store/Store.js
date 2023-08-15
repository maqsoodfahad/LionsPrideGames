import { configureStore } from "@reduxjs/toolkit";
import { combineReducers } from "redux";

import authReducer from "../store/auth/authState";
import authUser from "../store/auth/user";
import loginUi from "../store/ui/loginUi";
import userData from "../store/ui/userData";
import { setEditUser } from "./auth/eidtProfile";
import eidtUserSlice from "../store/auth/eidtProfile";
import lobbyGames from "./ui/lobbyGames";
import favoritesGames from "./ui/Favorites.slice";
import filteringLobbyGamesSlice from "./ui/filteringLobbyGames.slice";
import GamesSearchSlice from "./ui/GamesSearch.slice";
const combineReducer = combineReducers({
  auth: authReducer,
  user: authUser,
  login: loginUi,
  userData: userData,
  editUser: eidtUserSlice,
  lobbyGamesResp: lobbyGames,
  favoritesGamesResp: favoritesGames,
  filterLobbyGames: filteringLobbyGamesSlice,
  userGamesSearch: GamesSearchSlice,
});

const store = configureStore({
  reducer: combineReducer,
});

export default store;
