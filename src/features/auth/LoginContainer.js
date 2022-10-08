import Header from '../../layout/header/Header';
import UserSvg from '../../assets/user.svg';
import Footer from '../../layout/Footer/Footer';

function LoginContainer() {
  return (
    <>
      <Header />
      <div className="login-main">
        <div className="container mx-auto main d-flex flex-column justify-content-center box-register">
          <div className="panel">
            <div className="text-center">
              <p className="fs-4">
                เข้าสู่ระบบ
                <img className="ms-3" src={UserSvg} alt="Login" />
              </p>
            </div>
            <div className="panel-content">
              <div className="mb-3">
                <label htmlFor="email-control" className="form-label">
                  อีเมล์
                </label>
                <input
                  type="email"
                  className="form-control"
                  id="email-control"
                  placeholder="user@gmail.com"
                />
              </div>
              <div className="mb-3">
                <label htmlFor="password-control" className="form-label">
                  รหัสผ่าน
                </label>
                <input
                  type="password"
                  className="form-control"
                  id="password-control"
                  placeholder="**********"
                />
              </div>
              <div className="mb-3 text-center">
                <button type="button" className="btn btn-danger bt-main">
                  เข้าสู่ระบบ
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}
export default LoginContainer;
