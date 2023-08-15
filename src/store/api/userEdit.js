import http from "../../services/http";
import { handleErrors } from "../../helpers/error";
import { setEditUser } from "../auth/eidtProfile";
import { useDispatch } from "react-redux";
import storage from "../../services/storage";
import get from "../../services/storage";
import GetStorage from "../../services/storage";

import Toast from "../../components/Layout/Toastify/Toastify";

export const getUser = ({ headers = {}, onSuccess, onError, onEnd }) => {
  return async (dispatch) => {
    try {
      //showing loader on ui
      const res = await http.get({
        url: "v1/getuser",
        headers: { "x-auth-token": storage.get("xAuthToken") },
      });
      onSuccess?.(res);
      dispatch(setEditUser(res.data.data));
    } catch (error) {
      if (error?.response?.data?.message === "Invalid token.") {
        Toast.error("User Session expire");
        GetStorage.remove("xAuthToken");
        GetStorage.remove("user");
        window.location.reload();
      }
    } finally {
      if (onEnd) onEnd();
    }
  };
};
export const UpdateUser = ({ body = {}, onSuccess, onError, onEnd }) => {
  return async (dispatch) => {
    try {
      const formData = new FormData();
      for (const key in body) {
        if (Object.hasOwnProperty.call(body, key)) {
          const value = body[key];
          formData.append(key, value);
        }
      }

      const res = await http.put({
        url: "v1/update_user_info",
        body: formData,
        headers: {
          "x-auth-token": storage.get("xAuthToken"),
          "Content-Type": "multipart/form-data",
        },
      });
      onSuccess?.(res);

      dispatch(setEditUser(res.data.data));
    } catch (error) {
      if (onError) onError(error);
      else handleErrors(error);
    } finally {
      if (onEnd) onEnd();
    }
  };
};
