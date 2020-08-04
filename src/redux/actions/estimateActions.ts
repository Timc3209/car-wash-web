import { ESTIMATE_SUCCESS } from "../types";

export const estimateSuccess = (payload: string) => {
  return {
    type: ESTIMATE_SUCCESS,
    payload,
  };
};
