import { Navigate, Route, Routes } from 'react-router-dom';
import { useAuth } from '../contexts/AuthContext';

import AuthLayout from '../layout/auth/AuthLayout';
import AllStadiumPage from '../pages/AllStadiumPage';
import BookingDetailPage from '../pages/BookingDetailPage';
import BookingPage from '../pages/BookingPage';
import HistoryBookingPage from '../pages/HistoryBooking';
import HomePage from '../pages/HomePage';
import LoginPage from '../pages/LoginPage';
import RegisterPage from '../pages/RegisterPage';

function Router() {
  const { user } = useAuth();
  return (
    <Routes>
      {user ? (
        <>
          <Route path="/" element={<AuthLayout />}>
            <Route path="/" element={<HomePage />} />
            <Route path="/all-stadium" element={<AllStadiumPage />} />
            <Route path="/booking/:id" element={<BookingPage />} />
            <Route path="/booking-history" element={<HistoryBookingPage />} />
            <Route path="/booking-detail/:id" element={<BookingDetailPage />} />
            <Route path="*" element={<Navigate to="/" />} />
          </Route>
        </>
      ) : (
        <>
          <Route path="/" element={<HomePage />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/register" element={<RegisterPage />} />
          <Route path="*" element={<Navigate to="/" />} />
        </>
      )}
    </Routes>
  );
}

export default Router;
