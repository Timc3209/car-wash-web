import { CompanyState } from "../types";
export const SEARCH_SET = "SEARCH_SET";
export const SEARCH_START = "SEARCH_START";
export const SEARCH_FAIL = "SEARCH_FAIL";
export const SEARCH_SUCCESS = "SEARCH_SUCCESS";

export interface SearchState {
  searching: boolean;
  address: string;
  companies: Array<CompanyState>;
}

interface SearchSetAction {
  type: typeof SEARCH_SET;
  payload: string;
}

interface SearchStartAction {
  type: typeof SEARCH_START;
  payload: string;
}

interface SearchFailAction {
  type: typeof SEARCH_FAIL;
  payload: string;
}

interface SearchSuccessAction {
  type: typeof SEARCH_SUCCESS;
  payload: SearchState;
}

export type SearchActionTypes =
  | SearchSetAction
  | SearchStartAction
  | SearchFailAction
  | SearchSuccessAction;
