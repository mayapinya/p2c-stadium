import { createContext, useCallback, useContext, useState } from 'react';

const BookingContext = createContext();

function BookingContextProvider({ children }) {
  const [bookingSlots, setBookingSlots] = useState([]);
  const [stadium, setStadium] = useState([]);
  const [sumBooking, setSumBooking] = useState({
    sumHour: 0,
    sumPrice: 0
  });

  const clearDataSlotBooking = () => {
    setBookingSlots([]);
    setSumBooking({
      sumHour: 0,
      sumPrice: 0
    });
  };

  return (
    <BookingContext.Provider
      value={{
        bookingSlots,
        setBookingSlots,
        stadium,
        setStadium,
        sumBooking,
        setSumBooking,
        clearDataSlotBooking
      }}
    >
      {children}
    </BookingContext.Provider>
  );
}

export const useBooking = () => {
  return useContext(BookingContext);
};

export default BookingContextProvider;
