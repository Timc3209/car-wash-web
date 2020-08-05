import { ESTIMATE_SUCCESS, EstimateState } from "../types";

export const estimateSuccess = (payload: EstimateState) => {
  return {
    type: ESTIMATE_SUCCESS,
    payload,
  };
};
