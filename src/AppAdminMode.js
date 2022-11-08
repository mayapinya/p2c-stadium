import './App.css';
import { ToastContainer } from 'react-toastify';
import { useLoading } from './contexts/LoadingContext';
import { useAuthAdmin } from './contexts/AuthAdminContext';
import Spinner from './components/Spinner';
import RouterAdmin from './route/RouterAdmin';

function AppAdminMode() {
  const { loading } = useLoading();

  const { initialLoading } = useAuthAdmin();
  if (initialLoading) return <Spinner />;

  return (
    <>
      {loading && <Spinner />}
      <RouterAdmin />
      <ToastContainer
        autoClose="2500"
        theme="colored"
        position="bottom-center"
      />
    </>
  );
}

export default AppAdminMode;
