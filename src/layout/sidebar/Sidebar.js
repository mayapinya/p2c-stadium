import { Link, useLocation } from 'react-router-dom';
import { useAuthAdmin } from '../../contexts/AuthAdminContext';
import { BallIcon, BookIcon, LogoutIcon } from './icon';

function Sidebar() {
  const location = useLocation();
  const { logout } = useAuthAdmin();
  const { pathname } = location;
  console.log('pathname', pathname);
  const classActive = (name, currentName) => {
    return name === currentName ? 'nav-link active' : 'nav-link link-dark';
  };

  return (
    <div
      className="d-flex flex-column justify-content-between flex-shrink-0 p-3 bg-light fixed"
      style={{
        width: '280px',
        height: 'calc(100vh - 60px)',
        position: 'fixed'
      }}
    >
      <ul className="nav nav-pills flex-column mb-auto">
        <li className="nav-item">
          <Link className={classActive('/admin', pathname)} to={'/admin'}>
            <BookIcon />
            <span className="ms-2">รายการจอง</span>
          </Link>
        </li>
        <li className="nav-item">
          <Link
            className={classActive('/admin/stadium', pathname)}
            to={'/admin/stadium'}
          >
            <BallIcon />
            <span className="ms-2">จัดการสนาม</span>
          </Link>
        </li>
        {/* <li className="nav-item">
          <Link
            className={classActive('/admin/user', pathname)}
            to={'/admin/user'}
          >
            <UserIcon />
            <span className="ms-2">ผู้ดูแลระบบ</span>
          </Link>
        </li> */}
      </ul>
      <div>
        <hr />
        <ul className="nav nav-pills flex-column mb-auto ">
          <li className="nav-item logout" onClick={() => logout()}>
            <div className="nav-link link-dark">
              <LogoutIcon />
              <span className="ms-2">ออกจากระบบ</span>
            </div>
          </li>
        </ul>
      </div>
    </div>
  );
}
export default Sidebar;
