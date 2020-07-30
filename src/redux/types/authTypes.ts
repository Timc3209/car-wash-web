export const LOGIN_SUCCESS = "LOGIN_SUCCESS";
export const LOGOUT = "LOGOUT";

export interface AuthState {
  id: string;
  username: string;
  token: string;
  loggedIn: boolean;
}

interface LoginSuccessAction {
  type: typeof LOGIN_SUCCESS;
  payload: AuthState;
}

export interface LogoutAction {
  type: typeof LOGOUT;
}

export type AuthActionTypes = LoginSuccessAction | LogoutAction;
