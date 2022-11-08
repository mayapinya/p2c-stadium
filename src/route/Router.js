import { Navigate, Route, Routes } from 'react-router-dom';
import { useAuth } from '../contexts/AuthContext';

import AuthLayout from '../layout/auth/AuthLayout';
import AboutPage from '../pages/AboutPage';
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
            <Route path="/about" element={<AboutPage />} />
            <Route path="/all-stadium" element={<AllStadiumPage />} />
            <Route path="/booking/:id" element={<BookingPage />} />
            <Route path="/booking-history" element={<HistoryBookingPage />} />
            <Route path="/booking-detail/:id" element={<BookingDetailPage />} />
            <Route path="*" element={<Navigate to="/" />} />
          </Route>
          {/* <Route path="/admin" element={<AuthAdminLayout />}>
            <Route path="/admin" element={<AdminBookingPage />} />
            <Route
              path="booking-detail/:id"
              element={<AdminBookingDetailPage />}
            />
            <Route path="stadium" element={<AdminStadiumPage />} />
            <Route path="create-stadium" element={<AdminCreateStadiumPage />} />
            <Route
              path="stadium-detail/:id"
              element={<AdminStadiumDetailPage />}
            />

            <Route path="user" element={<AdminBookingPage />} />
            <Route path="*" element={<Navigate to="/admin" />} />
          </Route> */}
        </>
      ) : (
        <>
          <Route path="/" element={<HomePage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/register" element={<RegisterPage />} />
          <Route path="*" element={<Navigate to="/" />} />
        </>
      )}
    </Routes>
  );
}

export default Router;
