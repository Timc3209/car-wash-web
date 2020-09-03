import {
  SET_BOOKING_COMPANY,
  SET_BOOKING_DATE,
  SET_BOOKING_TYPE,
  SET_BOOKING_PACKAGE,
  SET_BOOKING_TOTAL,
  ADD_BOOKING_ADDON,
  REMOVE_BOOKING_ADDON,
  RESET_BOOKING,
  AddonState,
  BookingState,
  BookingActionTypes,
} from "../types";

export const INITIAL_STATE: BookingState = {
  bookingCompanyID: "0",
  bookingDate: new Date().getTime(),
  bookingType: "",
  bookingPackage: { id: "", name: "", price: 0, duration: 0, lines: [] },
  bookingAddons: [],
  bookingAddonIDs: [],
  bookingPrice: 0,
  bookingDuration: 0,
};

export function reducer(state = INITIAL_STATE, action: BookingActionTypes) {
  switch (action.type) {
    case SET_BOOKING_COMPANY:
      return {
        ...INITIAL_STATE,
        bookingCompanyID: action.payload,
      };
    case SET_BOOKING_DATE:
      return {
        ...state,
        bookingDate: action.payload,
      };
    case SET_BOOKING_TYPE:
      return {
        ...state,
        bookingType: action.payload,
      };
    case SET_BOOKING_TOTAL:
      return {
        ...state,
        bookingPrice: action.payload.price,
        bookingDuration: action.payload.duration,
      };
    case SET_BOOKING_PACKAGE:
      return {
        ...state,
        bookingPackage: action.payload,
      };
    case ADD_BOOKING_ADDON:
      return {
        ...state,
        bookingAddons: [...state.bookingAddons, action.payload],
        bookingAddonIDs: [...state.bookingAddonIDs, action.payload.id],
      };
    case REMOVE_BOOKING_ADDON:
      return {
        ...state,
        bookingAddons: state.bookingAddons.filter(
          (addon: AddonState) => addon.id !== action.payload.id
        ),
        bookingAddonIDs: state.bookingAddonIDs.filter(
          (id: string) => id !== action.payload.id
        ),
      };
    case RESET_BOOKING:
      return INITIAL_STATE;
    default:
      return state;
  }
}
