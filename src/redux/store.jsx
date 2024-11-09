import { createStore } from "redux";
import bookingReducer from "./booking Reducer";

const store = createStore(bookingReducer);
export default store;