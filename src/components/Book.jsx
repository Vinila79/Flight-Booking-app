/* eslint-disable react/no-unknown-property */
/* eslint-disable react/no-unescaped-entities */
import { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { makeBooking } from "../redux/actions";
import { FaPlus } from "react-icons/fa";
import "./book.css"
const Book = () => {
  const data = useSelector((state) => state.data);
  const size = data.length;
  const dispatch = useDispatch();
  const [bookingData, setBookingData] = useState({});

  const handleChange = (e) => {
    const newBookingData = { ...bookingData };
    newBookingData[e.target.name] = e.target.value;
    setBookingData(newBookingData);
  };

  const handleBook = (e) => {
    e.preventDefault();
    if (size >= 5) {
      alert("Sorry, you can not book more than 5");
    } else {
      if (Object.keys(bookingData).length === 5) {
        // console.log({ ...bookingData, id: size + 1 });
        dispatch(makeBooking({ ...bookingData, id: size + 1 }));
      } else {
        alert("please select data properly");
      }
    }
  };
//   flex flex-col md:flex-row
  return (
    <div className="sectioncontainer">
      <div className="container">
        <form className="form">
          <div className="titlediv">
            <p>Destination From</p>
            <div className="sectiondiv">
              <select
                className="select"
                name="from"
                required
                onChange={(e) => handleChange(e)}
              >
                <option value="" hidden>
                  Please Select
                </option>
                <option>New York</option>
                <option>London</option>
                <option>Paris</option>
                <option>Rome</option>
              </select>
            </div>
          </div>

          <div className="titlediv ">
            <p>Destination To</p>
            <div className="sectiondiv">

              <select
                className="select"
                name="to"
                required
                onChange={(e) => handleChange(e)}
              >
                <option value="" hidden>
                  Please Select
                </option>
                <option>New York</option>
                <option>London</option>
                <option>Paris</option>
                <option>Rome</option>
              </select>
            </div>
          </div>

          <div className="titlediv">
            <p>Journey Date</p>
            <input
              type="date"
              className="date option"
              name="date"
              required
              onChange={(e) => handleChange(e)}
            />
          </div>

          <div className="titlediv">
            <p>Guests</p>
            <div className="sectiondiv">
              <select
                className="select"
                name="guests"
                required
                onChange={(e) => handleChange(e)}
              >
                <option value="" hidden>
                  Please Select
                </option>
                <option value="1">1 Person</option>
                <option value="2">2 Persons</option>
                <option value="3">3 Persons</option>
                <option value="4">4 Persons</option>
                <option value="5">5 Persons</option>
              </select>
            </div>
          </div>

          <div className="titlediv">
            <p>className</p>
            <div className="sectiondiv">
              <select
                className="select"
                name="ticketclassName"
                required
                onChange={(e) => handleChange(e)}
              >
                <option value="" hidden>
                  Please Select
                </option>
                <option>Business</option>
                <option>Economy</option>
              </select>
            </div>
          </div>

          <button
            onClick={(e) => handleBook(e)}
            className="btn"
            type="submit"
          >
            <FaPlus/>
            <span className="icon "></span>Book Now
          </button>
        </form>
      </div>
    </div>
  );
};

export default Book;