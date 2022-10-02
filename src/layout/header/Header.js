import AppLogo from '../../assets/logo.png';

function Header({ children }) {
  return (
    <nav className="navbar navbar-expand-lg bg-nav fixed-top">
      <div className="container-fluid">
        <a className="navbar-brand" href={'/'}>
          <img className="app-logo" src={AppLogo} alt="logo" />
          <span>P2C STADIUM</span>
        </a>
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
              <a className="nav-link active" aria-current="page" href={'/'}>
                หน้าหลัก
              </a>
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
                  <a className="dropdown-item" href={'/about'}>
                    อัตตราค่าบริการ
                  </a>
                </li>
                <li>
                  <a className="dropdown-item" href={'/'}>
                    ติดต่อเรา
                  </a>
                </li>
              </ul>
            </li>
            <li className="nav-item nav-menu">
              <a className="nav-link" href={'/booking-all'}>
                จองสนาม
              </a>
            </li>
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
                  <a className="dropdown-item" href="/login">
                    เข้าสู่ระบบ
                  </a>
                </li>
                <li>
                  <a className="dropdown-item" href="/register">
                    สมัครสมาชิก
                  </a>
                </li>
              </ul>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Header;
