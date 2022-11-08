import './App.css';
import Router from './route/Router';
import { ToastContainer } from 'react-toastify';
import { useLoading } from './contexts/LoadingContext';
import { useAuth } from './contexts/AuthContext';

import Spinner from './components/Spinner';

function AppUserMode() {
  const { loading } = useLoading();

  const { initialLoading } = useAuth();
  if (initialLoading) return <Spinner />;

  return (
    <>
      {loading && <Spinner />}
      <Router />
      <ToastContainer
        autoClose="2500"
        theme="colored"
        position="bottom-center"
      />
    </>
  );
}

export default AppUserMode;
