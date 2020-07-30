import { LOGIN_SUCCESS, LOGOUT, AuthState } from "../types";

export const loginSuccess = (payload: AuthState) => {
  return {
    type: LOGIN_SUCCESS,
    payload,
  };
};

export const logout = () => {
  return {
    type: LOGOUT,
  };
};
