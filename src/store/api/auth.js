import { setToken } from "../auth/authState";
import { setUser } from "../auth/user";
import http from "../../services/http";
import storage from "../../services/storage";
import { setLoading } from "../auth/user";
import { showLoginLoader } from "../ui/loginUi";
import { handleErrors } from "../../helpers/error";

export const newPassword = ({
  id = "",
  onSuccess,
  onError,
  onEnd,
  body = {},
} = {}) => {
  return async (dispatch, getState) => {
    try {
      const res = await http.post({
        url: "v1/reset_password/" + id,
        body,
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
export const signinUser = ({ body = {}, onSuccess, onError, onEnd }) => {
  return async (dispatch) => {
    try {
      const res = await http.post({
        url: "v1/signup",
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

export const forgotPassword = ({
  id = "",
  onSuccess,
  onError,
  onEnd,
  body = {},
} = {}) => {
  return async (dispatch, getState) => {
    try {
      const res = await http.post({
        url: "v1/forgot_password",
        body,
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
export const login = ({ body, onSuccess, onError }) => {
  return async (dispatch, getState) => {
    try {
      dispatch(showLoginLoader(true));

      const res = await http.post({
        url: "v1/signin",
        body,
      });

      const { data } = res;
      const { token } = data;
      let user = data.user;

      dispatch(setToken(token));
      dispatch(setUser(data));

      storage.store("xAuthToken", token);
      storage.store("user", user);

      onSuccess(res);
      dispatch(showLoginLoader(false));
    } catch (error) {
      dispatch(showLoginLoader(false));

      if (onError) onError(error);
    }
  };
};
