import './App.css';
import Router from './route/Router';
import { ToastContainer } from 'react-toastify';

function App() {
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
