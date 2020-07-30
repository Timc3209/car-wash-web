import { combineReducers } from "redux";
import * as authReducer from "./authReducer";
import { AuthState } from "../types";

export interface AppState {
  auth: AuthState;
}

export const AppInitialState: AppState = {
  auth: authReducer.INITIAL_STATE,
};

export const rootReducer = combineReducers({
  auth: authReducer.reducer,
});
