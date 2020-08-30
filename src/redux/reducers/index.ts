import { combineReducers } from "redux";
import * as authReducer from "./authReducer";
import * as searchReducer from "./searchReducer";
import * as bookingReducer from "./bookingReducer";
import { AuthState, SearchState, BookingState } from "../types";

export interface AppState {
  auth: AuthState;
  search: SearchState;
  booking: BookingState;
}

export const AppInitialState: AppState = {
  auth: authReducer.INITIAL_STATE,
  search: searchReducer.INITIAL_STATE,
  booking: bookingReducer.INITIAL_STATE,
};

export const rootReducer = combineReducers({
  auth: authReducer.reducer,
  search: searchReducer.reducer,
  booking: bookingReducer.reducer,
});
