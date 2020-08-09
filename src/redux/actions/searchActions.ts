import {
  SEARCH_SUCCESS,
  SEARCH_SET,
  SEARCH_START,
  SEARCH_FAIL,
  SearchState,
} from "../types";

export const searchSuccess = (payload: SearchState) => {
  return {
    type: SEARCH_SUCCESS,
    payload,
  };
};

export const searchSet = (payload: string) => {
  return {
    type: SEARCH_SET,
    payload,
  };
};

export const searchStart = (payload: string) => {
  return {
    type: SEARCH_START,
    payload,
  };
};

export const searchFail = (payload: string) => {
  return {
    type: SEARCH_FAIL,
    payload,
  };
};
