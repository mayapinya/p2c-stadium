import AppLogo from '../../assets/logo.png';
import UserSvg from '../../assets/user.svg';
import { Link } from 'react-router-dom';

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
        <Link className="navbar-brand" to={'/'}>
          <img className="app-logo" src={AppLogo} alt="logo" />
          <span>P2C STADIUM</span>
        </Link>
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
            <li className="nav-item">
              <Link className="nav-link active" aria-current="page" to={'/'}>
                หน้าหลัก
              </Link>
            </li>
            <li className="nav-item dropdown nav-menu">
              <a
                className="nav-link dropdown-toggle"
                href={''}
                role="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                เกี่ยวกับเรา
              </a>
              <ul className="dropdown-menu dropdown-menu-lg-end">
                <li>
                  <Link className="dropdown-item" to={'/about'}>
                    อัตตราค่าบริการ
                  </Link>
                </li>
                <li>
                  <Link to="/" className="dropdown-item" onClick={onContact}>
                    ติดต่อเรา
                  </Link>
                </li>
              </ul>
            </li>
            <li className="nav-item nav-menu">
              <Link className="nav-link" to={'/all-stadium'}>
                จองสนาม
              </Link>
            </li>
            {user ? (
              <li className="nav-item dropdown nav-menu nav-account">
                <a
                  className="nav-link dropdown-toggle"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  <img className="ms-3" src={UserSvg} alt="Login" />
                </a>
                <ul className="dropdown-menu dropdown-menu-lg-end">
                  <li>
                    <Link className="dropdown-item" to={'/booking-history'}>
                      ประวัติการจอง
                    </Link>
                  </li>
                  <li>
                    <button className="dropdown-item" onClick={logout}>
                      ออกจากระบบ
                    </button>
                  </li>
                </ul>
              </li>
            ) : (
              <li className="nav-item dropdown nav-menu nav-account">
                <a
                  className="nav-link dropdown-toggle"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  บัญชี
                </a>
                <ul className="dropdown-menu dropdown-menu-lg-end">
                  <li>
                    <Link className="dropdown-item" to={'/login'}>
                      เข้าสู่ระบบ
                    </Link>
                  </li>
                  <li>
                    <Link className="dropdown-item" to={'/register'}>
                      สมัครสมาชิก
                    </Link>
                  </li>
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
