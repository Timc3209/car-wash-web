import { ESTIMATE_SUCCESS, EstimateState, EstimateActionTypes } from "../types";

export const INITIAL_STATE: EstimateState = {
  address: "",
};

export function reducer(state = INITIAL_STATE, action: EstimateActionTypes) {
  switch (action.type) {
    case ESTIMATE_SUCCESS:
      return {
        ...state,
        address: action.payload,
      };
    default:
      return state;
  }
}
