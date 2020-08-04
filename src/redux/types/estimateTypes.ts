export const ESTIMATE_SUCCESS = "ESTIMATE_SUCCESS";

export interface EstimateState {
  address: string;
}

interface EstimateSuccessAction {
  type: typeof ESTIMATE_SUCCESS;
  payload: any;
}

export type EstimateActionTypes = EstimateSuccessAction;
