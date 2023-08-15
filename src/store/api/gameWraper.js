
import http from "../../services/http";
import { handleErrors } from "../../helpers/error";
import storage from "../../services/storage";


export const getGameWraper = ({
    id = "",
    onSuccess,
    onError,
    onEnd,
    body = {},
} = {}) => {
    return async (dispatch, getState) => {
        try {
            ;

            const res = await http.post({
                url: "v1/evoplays/getgameurl",
                body,
                headers: {
                    "x-auth-token": storage.get("xAuthToken"),

                }


            });

            //onSuccess event firing
            if (onSuccess) onSuccess(res);
        } catch (err) {
            //onError event firing
            if (onError) onError(err);
            else handleErrors(err);
        } finally {
            if (onEnd) onEnd();
        }
    };
};