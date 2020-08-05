export const ESTIMATE_SUCCESS = "ESTIMATE_SUCCESS";

export interface CompanyState {
  name: string;
  desc: string;
  street: string;
  city: string;
  state: string;
  zip: string;
  country: string;
  phone: string;
  email: string;
}

export interface EstimateState {
  address: string;
  companies: Array<CompanyState>;
}

interface EstimateSuccessAction {
  type: typeof ESTIMATE_SUCCESS;
  payload: EstimateState;
}

export type EstimateActionTypes = EstimateSuccessAction;
