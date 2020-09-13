import {
  SEARCH_SUCCESS,
  SEARCH_SET,
  SEARCH_START,
  SEARCH_FAIL,
  SearchState,
  LocationState,
} from "../types";

export const searchSuccess = (payload: SearchState) => {
  return {
    type: SEARCH_SUCCESS,
    payload,
  };
};

export const searchSet = (payload: LocationState) => {
  return {
    type: SEARCH_SET,
    payload,
  };
};

export const searchStart = (payload: LocationState) => {
  return {
    type: SEARCH_START,
    payload,
  };
};

export const searchFail = (payload: LocationState) => {
  return {
    type: SEARCH_FAIL,
    payload,
  };
};
