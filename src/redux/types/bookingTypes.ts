import { PackageState, AddonState } from "../types";
export const SET_BOOKING_COMPANY = "SET_BOOKING_COMPANY";
export const SET_BOOKING_DATE = "SET_BOOKING_DATE";
export const SET_BOOKING_TYPE = "SET_BOOKING_TYPE";
export const SET_BOOKING_TOTAL = "SET_BOOKING_TOTAL";
export const SET_BOOKING_PACKAGE = "SET_BOOKING_PACKAGE";
export const ADD_BOOKING_ADDON = "ADD_BOOKING_ADDON";
export const REMOVE_BOOKING_ADDON = "REMOVE_BOOKING_ADDON";
export const RESET_BOOKING = "RESET_BOOKING";

export interface BookingState {
  bookingCompanyID: string;
  bookingDate: number;
  bookingType: string;
  bookingPackage: PackageState;
  bookingAddons: Array<AddonState>;
  bookingAddonIDs: string[];
  bookingPrice: number;
  bookingDuration: number;
}

interface SetBookingCompanyAction {
  type: typeof SET_BOOKING_COMPANY;
  payload: string;
}

interface SetBookingDateAction {
  type: typeof SET_BOOKING_DATE;
  payload: number;
}

interface SetBookingTypeAction {
  type: typeof SET_BOOKING_TYPE;
  payload: string;
}

interface SetBookingTotalAction {
  type: typeof SET_BOOKING_TOTAL;
  payload: { price: number; duration: number };
}

interface SetBookingPackageAction {
  type: typeof SET_BOOKING_PACKAGE;
  payload: PackageState;
}

interface AddBookingAddonAction {
  type: typeof ADD_BOOKING_ADDON;
  payload: AddonState;
}

interface RemoveBookingAddonAction {
  type: typeof REMOVE_BOOKING_ADDON;
  payload: AddonState;
}

interface ResetBookingAction {
  type: typeof RESET_BOOKING;
}

export type BookingActionTypes =
  | SetBookingCompanyAction
  | SetBookingDateAction
  | SetBookingTypeAction
  | SetBookingTotalAction
  | SetBookingPackageAction
  | AddBookingAddonAction
  | RemoveBookingAddonAction
  | ResetBookingAction;
