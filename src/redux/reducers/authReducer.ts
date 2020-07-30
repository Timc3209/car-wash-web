import { LOGIN_SUCCESS, LOGOUT, AuthState, AuthActionTypes } from "../types";

export const INITIAL_STATE: AuthState = {
  id: "0",
  username: "",
  token: "",
  loggedIn: false,
};

export const INITIAL_STATE_LOGGED: AuthState = {
  id: "demo",
  username: "demo",
  token: "demo",
  loggedIn: true,
};

export function reducer(state = INITIAL_STATE, action: AuthActionTypes) {
  switch (action.type) {
    case LOGIN_SUCCESS:
      return {
        ...state,
        id: action.payload.id,
        username: action.payload.username,
        token: action.payload.token,
        loggedIn: action.payload.loggedIn,
      };
    case LOGOUT:
      return { ...INITIAL_STATE };
    default:
      return state;
  }
}
