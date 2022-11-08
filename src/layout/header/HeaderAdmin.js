import AppLogo from '../../assets/logo.png';
import { NavLink } from 'react-router-dom';

function HeaderAdmin({ children }) {
  return (
    <nav className="navbar navbar-expand-lg bg-nav fixed-top">
      <div className="container-fluid">
        <NavLink className="navbar-brand" to={'/admin'}>
          <div data-bs-toggle="collapse" data-bs-target=".navbar-collapse.show">
            <img className="app-logo" src={AppLogo} alt="logo" />
            <span>P2C STADIUM</span>
          </div>
        </NavLink>
      </div>
    </nav>
  );
}

export default HeaderAdmin;
