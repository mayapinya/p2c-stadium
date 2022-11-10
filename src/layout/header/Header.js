import AppLogo from '../../assets/logo.png';
import UserSvg from '../../assets/user.svg';
import { NavLink } from 'react-router-dom';

import { useAuth } from '../../contexts/AuthContext';

function Header({ children }) {
  const { user, logout } = useAuth();

  const onContact = () => {
    const divElement = document.getElementById('footer');
    divElement.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <nav className="navbar navbar-expand-lg bg-nav fixed-top">
      <div className="container-fluid">
        <NavLink className="navbar-brand" to={'/'}>
          <div data-bs-toggle="collapse" data-bs-target=".navbar-collapse.show">
            <img className="app-logo" src={AppLogo} alt="logo" />
            <span>P2C STADIUM</span>
          </div>
        </NavLink>
        <div className="d-flex">
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNavDropdown"
            aria-controls="navbarNavDropdown"
            aria-expanded="true"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
        </div>

        <div className="collapse navbar-collapse " id="navbarNavDropdown">
          <ul className="navbar-nav nav-menu">
            <NavLink className="nav-link active" aria-current="page" to={'/'}>
              <li
                className="nav-item"
                data-bs-toggle="collapse"
                data-bs-target=".navbar-collapse.show"
              >
                หน้าหลัก
              </li>
            </NavLink>
            <li className="nav-item dropdown nav-menu">
              <div
                className="nav-link dropdown-toggle"
                role="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                เกี่ยวกับเรา
              </div>
              <ul className="dropdown-menu dropdown-menu-lg-end">
                <NavLink className="dropdown-item" to={'/about'}>
                  <li
                    className="nav-item"
                    data-bs-toggle="collapse"
                    data-bs-target=".navbar-collapse.show"
                  >
                    อัตตราค่าบริการ
                  </li>
                </NavLink>
                <li>
                  <div
                    className="dropdown-item"
                    onClick={onContact}
                    style={{ cursor: 'pointer' }}
                  >
                    ติดต่อเรา
                  </div>
                </li>
              </ul>
            </li>
            <NavLink className="nav-link" to={'/all-stadium'}>
              <li
                className="nav-item nav-menu"
                data-bs-toggle="collapse"
                data-bs-target=".navbar-collapse.show"
              >
                จองสนาม
              </li>
            </NavLink>

            {user ? (
              <li className="nav-item dropdown nav-menu nav-account">
                <div
                  className="nav-link dropdown-toggle"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  <img className="ms-3" src={UserSvg} alt="Login" />
                </div>
                <ul className="dropdown-menu dropdown-menu-lg-end">
                  <NavLink className="dropdown-item" to={'/booking-history'}>
                    <li
                      className="nav-item"
                      data-bs-toggle="collapse"
                      data-bs-target=".navbar-collapse.show"
                    >
                      ประวัติการจอง
                    </li>
                  </NavLink>
                  <li>
                    <button className="dropdown-item" onClick={logout}>
                      ออกจากระบบ
                    </button>
                  </li>
                </ul>
              </li>
            ) : (
              <li className="nav-item dropdown nav-menu nav-account">
                <div
                  className="nav-link dropdown-toggle"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  บัญชี
                </div>
                <ul className="dropdown-menu dropdown-menu-lg-end">
                  <NavLink className="dropdown-item" to={'/login'}>
                    <li
                      className="nav-item"
                      data-bs-toggle="collapse"
                      data-bs-target=".navbar-collapse.show"
                    >
                      เข้าสู่ระบบ
                    </li>
                  </NavLink>
                  <NavLink className="dropdown-item" to={'/register'}>
                    <li
                      className="nav-item"
                      data-bs-toggle="collapse"
                      data-bs-target=".navbar-collapse.show"
                    >
                      สมัครสมาชิก
                    </li>
                  </NavLink>
                </ul>
              </li>
            )}
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Header;
