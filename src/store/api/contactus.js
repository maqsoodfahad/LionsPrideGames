import http from "../../services/http";
import { handleErrors } from "../../helpers/error";

export const contactapi = ({ body = {}, onSuccess, onError, onEnd }) => {
  return async (dispatch) => {
    try {
      const res = await http.post({
        url: "v2/ContactUsMessage",
        body,
      });
      onSuccess(res);
    } catch (error) {
      if (onError) onError(error);
      else handleErrors(error);
    } finally {
      if (onEnd) onEnd();
    }
  };
};
