import './App.css';
import { useLocation } from 'react-router-dom';
import AppUserMode from './AppUserMode';
import AuthContextProvider from './contexts/AuthContext';
import BookingContextProvider from './contexts/BookingContext';
import AuthAdminContextProvider from './contexts/AuthAdminContext';
import AppAdminMode from './AppAdminMode';

function App() {
  const location = useLocation();
  const isAdminMode = location.pathname.includes('/admin') ? true : false;

  return isAdminMode ? (
    <>
      <AuthAdminContextProvider>
        <AppAdminMode />
      </AuthAdminContextProvider>
    </>
  ) : (
    <>
      <AuthContextProvider>
        <BookingContextProvider>
          <AppUserMode />
        </BookingContextProvider>
      </AuthContextProvider>
    </>
  );
}

export default App;
