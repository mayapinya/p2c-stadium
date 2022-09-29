import './App.css';
import AppLogo from './assets/logo.png';

function App() {
  return (
    <div className="app">
      <nav className="navbar navbar-expand-lg bg-nav fixed-top">
        <div className="container-fluid">
          <a className="navbar-brand" href={'#'}>
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
                <a className="nav-link active" aria-current="page" href={'#'}>
                  หน้าหลัก
                </a>
              </li>
              <li className="nav-item dropdown nav-menu">
                <a
                  className="nav-link dropdown-toggle"
                  href={'#'}
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  เกี่ยวกับเรา
                </a>
                <ul className="dropdown-menu dropdown-menu-lg-end">
                  <li>
                    <a className="dropdown-item" href={'#'}>
                      อัตตราค่าบริการ
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item" href={'#'}>
                      ติดต่อเรา
                    </a>
                  </li>
                </ul>
              </li>
              <li className="nav-item nav-menu">
                <a className="nav-link" href={'#'}>
                  จองสนาม
                </a>
              </li>
              <li className="nav-item dropdown nav-menu nav-account">
                <a
                  className="nav-link dropdown-toggle"
                  href={'#'}
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  บัญชี
                </a>
                <ul className="dropdown-menu dropdown-menu-lg-end">
                  <li>
                    <a className="dropdown-item" href={'#'}>
                      เข้าสู่ระบบ
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item" href={'#'}>
                      สมัครสมาชิก
                    </a>
                  </li>
                </ul>
              </li>
            </ul>
          </div>
        </div>
      </nav>
      <div className="container-home">
        <div className="content-main">
          <div className="content">
            <h1 className="text-white">P2C Stadium</h1>
            <h2 className="text-white">เป็นสนามบอลหญ้าเทียมขนาด 7 คน </h2>
            <h2 className="text-white">
              มีห้องคลับเฮาน์ติดแอร์ไว้สำหรับผู้ติดตาม{' '}
            </h2>
            <h2 className="text-white">มีเครื่องดื่มและอาหาร พร้อมบริการ </h2>
          </div>
          <div className="button-box">
            <button
              type="button"
              className="btn btn-outline-light bt-outline-white bt-outline-main"
            >
              ติดต่อสอบถาม
            </button>
            <button type="button" className="btn btn-danger bt-main ms-4">
              จองสนาม
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
