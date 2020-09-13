import {
  SEARCH_SUCCESS,
  SEARCH_SET,
  SEARCH_START,
  SEARCH_FAIL,
  SearchState,
  SearchActionTypes,
} from "../types";

export const INITIAL_STATE: SearchState = {
  searching: false,
  address: { name: "", address: "" },
  companies: [],
};

export function reducer(state = INITIAL_STATE, action: SearchActionTypes) {
  switch (action.type) {
    case SEARCH_SET:
      return {
        ...state,
        address: action.payload,
      };
    case SEARCH_START:
      return {
        ...state,
        address: action.payload,
        searching: true,
      };
    case SEARCH_FAIL:
      return {
        ...state,
        address: action.payload,
        searching: false,
      };
    case SEARCH_SUCCESS:
      return {
        ...state,
        searching: action.payload.searching,
        address: action.payload.address,
        companies: action.payload.companies,
      };
    default:
      return state;
  }
}
