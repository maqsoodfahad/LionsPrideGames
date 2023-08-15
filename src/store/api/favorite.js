import http from "../../services/http";
import { handleErrors } from "../../helpers/error";
import storage from "../../services/storage";
import {
  addFavorite,
  getFavoriteGames,
  removeFavorite,
} from "../ui/Favorites.slice";
const path = "v1/evoplays/add_favorites";
const path2 = "v1/evoplays/delete_favoritesgames/";
export const FavoriteApi = ({ body = {}, onSuccess, onError, onEnd }) => {
  return async (dispatch) => {
    try {
      const res = await http.post({
        url: path,
        body,
        headers: {
          "x-auth-token": storage.get("xAuthToken"),
        },
      });
      dispatch(addFavorite(body.gameId));
      onSuccess(res);
    } catch (error) {
      if (onError) onError(error);
      else handleErrors(error);
    } finally {
      if (onEnd) onEnd();
    }
  };
};
export const getFavoriteApi = ({ body = {}, onSuccess, onError, onEnd }) => {
  return async (dispatch) => {
    try {
      //showing loader on ui
      const res = await http.get({
        url: "v1/evoplays/get_favorites",
        headers: { "x-auth-token": storage.get("xAuthToken") },
      });
      onSuccess?.(res);

      dispatch(getFavoriteGames(res.data.data));
    } catch (error) {
    } finally {
      if (onEnd) onEnd();
    }
  };
};
export const RemoveFavoriteApi = ({
  id = "",
  body = {},
  onSuccess,
  onError,
  onEnd,
}) => {
  return async (dispatch) => {
    try {
      //showing loader on ui
      const res = await http.delete({
        url: path2 + id,
        headers: { "x-auth-token": storage.get("xAuthToken") },
      });
      onSuccess?.(res);
      dispatch(removeFavorite(id));

      // dispatch(getFavoriteGames(res.data.data))
    } catch (error) {
    } finally {
      if (onEnd) onEnd();
    }
  };
};
