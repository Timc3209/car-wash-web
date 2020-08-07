import { combineReducers } from "redux";
import * as authReducer from "./authReducer";
import * as searchReducer from "./searchReducer";
import { AuthState, SearchState } from "../types";

export interface AppState {
  auth: AuthState;
  search: SearchState;
}

export const AppInitialState: AppState = {
  auth: authReducer.INITIAL_STATE,
  search: searchReducer.INITIAL_STATE,
};

export const rootReducer = combineReducers({
  auth: authReducer.reducer,
  search: searchReducer.reducer,
});
