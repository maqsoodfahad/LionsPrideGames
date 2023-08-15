import http from "../../services/http";
import { handleErrors } from "../../helpers/error";
import storage from "../../services/storage";
import { getFilteredLobbyGames } from "../ui/filteringLobbyGames.slice";
export const LobbyFiltersGames = ({
  headers = {},
  onSuccess,
  onError,
  onEnd,
}) => {
  return async (dispatch) => {
    try {
      const res = await http.get({
        url: "v1/evoplays/categoryfiltrationgames",
        headers: { "x-auth-token": storage.get("xAuthToken") },
      });
      onSuccess?.(res);
      dispatch(getFilteredLobbyGames(res.data.data.result));
    } catch (error) {
      if (onError) onError?.(error);
      else handleErrors(error);
    } finally {
      if (onEnd) onEnd();
    }
  };
};
// export const UnAuthLobbyFiltersGames = ({
//   headers = {},
//   onSuccess,
//   onError,
//   onEnd,
// }) => {
//   return async (dispatch) => {
//     try {
//       const res = await http.get({
//         url: "v1/evoplays/categoryfiltrationgames",
//       });
//       onSuccess?.(res);
//       dispatch(getFilteredLobbyGames(res.data.data.result));
//     } catch (error) {
//       if (onError) onError?.(error);
//       else handleErrors(error);
//     } finally {
//       if (onEnd) onEnd();
//     }
//   };
// };
