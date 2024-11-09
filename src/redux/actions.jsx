import { BOOKING, DELETE } from "./action Types";

export const makeBooking = (data) => {
  return {
    type: BOOKING,
    payload: data,
  };
};

export const deleteBooking = (id) => {
  return {
    type: DELETE,
    payload: id,
  };
};