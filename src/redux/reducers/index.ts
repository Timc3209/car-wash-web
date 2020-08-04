import { combineReducers } from "redux";
import * as authReducer from "./authReducer";
import * as estimateReducer from "./estimateReducer";
import { AuthState, EstimateState } from "../types";

export interface AppState {
  auth: AuthState;
  estimate: EstimateState;
}

export const AppInitialState: AppState = {
  auth: authReducer.INITIAL_STATE,
  estimate: estimateReducer.INITIAL_STATE,
};

export const rootReducer = combineReducers({
  auth: authReducer.reducer,
  estimate: estimateReducer.reducer,
});
