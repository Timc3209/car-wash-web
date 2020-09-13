import {
  SET_BOOKING_COMPANY,
  SET_BOOKING_DATE,
  SET_BOOKING_TIMESLOT,
  SET_BOOKING_TYPE,
  SET_BOOKING_TOTAL,
  SET_BOOKING_PACKAGE,
  ADD_BOOKING_ADDON,
  REMOVE_BOOKING_ADDON,
  RESET_BOOKING,
  AddonState,
  PackageState,
  CompanyState,
  TimeSlotState,
} from "../types";

export const setBookingCompany = (payload: CompanyState) => {
  return {
    type: SET_BOOKING_COMPANY,
    payload,
  };
};

export const setBookingDate = (payload: number) => {
  return {
    type: SET_BOOKING_DATE,
    payload,
  };
};

export const setBookingTimeSlot = (payload: TimeSlotState) => {
  return {
    type: SET_BOOKING_TIMESLOT,
    payload,
  };
};

export const setBookingType = (payload: string) => {
  return {
    type: SET_BOOKING_TYPE,
    payload,
  };
};

export const setBookingTotal = (payload: object) => {
  return {
    type: SET_BOOKING_TOTAL,
    payload,
  };
};

export const setBookingPackage = (payload: PackageState) => {
  return {
    type: SET_BOOKING_PACKAGE,
    payload,
  };
};

export const addBookingAddon = (payload: AddonState) => {
  return {
    type: ADD_BOOKING_ADDON,
    payload,
  };
};

export const removeBookingAddon = (payload: AddonState) => {
  return {
    type: REMOVE_BOOKING_ADDON,
    payload,
  };
};

export const resetBooking = () => {
  return {
    type: RESET_BOOKING,
  };
};
