import { Navigate, Route, Routes } from 'react-router-dom';
import AboutPage from '../pages/AboutPage';
import HomePage from '../pages/HomePage';
import LoginPage from '../pages/LoginPage';
import RegisterPage from '../pages/RegisterPage';

function Router() {
  // const { user } = useAuth();
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/login" element={<LoginPage />} />
      <Route path="/about" element={<AboutPage />} />
      <Route path="/register" element={<RegisterPage />} />
      {/* <Route path="/booking-all" element={<BookingAllPage />} /> */}
      {/* <Route path="/booking/:stadium" element={<BookingPage />}/> */}
      {/* <Route path="/booking-history" element={<BookingHistoryPage />}/> */}
      {/* <Route path="/booking-detail/:id" element={<BookingHistoryPage />}/> */}
      <Route path="*" element={<Navigate to="/" />} />
    </Routes>
  );
}

export default Router;
