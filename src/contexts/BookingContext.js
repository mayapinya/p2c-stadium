import { createContext, useContext, useState } from 'react';
import * as bookingService from '../api/bookingApi';

const BookingContext = createContext();

function BookingContextProvider({ children }) {
  const [bookingItemArray, setBookingItemArray] = useState([]);
  console.log(bookingItemArray, 'state');

  const createBooking = async (input) => {
    return await bookingService.booking(input);
  };

  return (
    <BookingContext.Provider
      value={{ createBooking, setBookingItemArray, bookingItemArray }}
    >
      {children}
    </BookingContext.Provider>
  );
}

const useBookingContext = () => useContext(BookingContext);

export { useBookingContext };

export default BookingContextProvider;
