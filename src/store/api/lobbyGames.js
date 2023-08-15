import http from "../../services/http";
import { handleErrors } from "../../helpers/error";
import { getLobbyGames } from "../ui/lobbyGames";

export const LobbyGamesapi = ({ body = {}, onSuccess, onError, onEnd }) => {
    return async (dispatch) => {
        try {

            const res = await http.get({
                url: "v1/evoplays/getlist", body
            });
            onSuccess(res);
            dispatch(getLobbyGames(res.data.data))
        } catch (error) {

            if (onError) onError(error);
            else handleErrors(error);
        }
        finally {
            if (onEnd) onEnd();
        }
    };
};