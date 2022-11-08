import { Navigate, Route, Routes } from 'react-router-dom';
import { useAuthAdmin } from '../contexts/AuthAdminContext';

import AuthAdminLayout from '../layout/auth/AuthAdminLayout';
import AdminBookingDetailPage from '../pages/AdminBookingDetailPage';
import AdminBookingPage from '../pages/AdminBookingPage';
import AdminCreateStadiumPage from '../pages/AdminCreateStadiumPage';
import AdminStadiumDetailPage from '../pages/AdminStadiumDetailPage';
import AdminStadiumPage from '../pages/AdminStadiumPage';
import LoginAdminPage from '../pages/LoginAdminPage';

function RouterAdmin() {
  const { user } = useAuthAdmin();
  return (
    <Routes>
      {user ? (
        <>
          <Route path="/admin" element={<AuthAdminLayout />}>
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
          </Route>
        </>
      ) : (
        <>
          <Route path="admin/login" element={<LoginAdminPage />} />
          <Route path="*" element={<Navigate to="admin/login" />} />
        </>
      )}
    </Routes>
  );
}

export default RouterAdmin;
