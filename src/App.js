import './App.css';
import Router from './route/Router';
import { ToastContainer } from 'react-toastify';
import { useAuth } from './contexts/AuthContext';
import Spinner from './components/Spinner';

function App() {
  const { initialLoading } = useAuth();
  if (initialLoading) return <Spinner />;

  return (
    <>
      <Router />
      <ToastContainer
        autoClose="2500"
        theme="colored"
        position="bottom-center"
      />
    </>
  );
}

export default App;
