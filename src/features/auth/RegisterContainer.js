import Header from '../../layout/header/Header';
import RegisterSvg from '../../assets/register.svg';
import Footer from '../../layout/Footer/Footer';
function RegisterContainer() {
  return (
    <>
      <Header />
      <div className="login-register">
        <div className="container mx-auto main d-flex flex-column justify-content-center box-register">
          <div className="panel">
            <div className="text-center">
              <p className="fs-4">
                สมัครสมาชิก
                <img className="ms-3" src={RegisterSvg} alt="Register" />
              </p>
            </div>
            <div className="panel-content">
              <div className="mb-3">
                <label htmlFor="first-name-control" className="form-label">
                  ชื่อ
                </label>
                <input
                  type="text"
                  className="form-control"
                  id="first-name-control"
                  placeholder="สมชาย"
                />
              </div>
              <div className="mb-3">
                <label htmlFor="last-name-control" className="form-label">
                  นามสกุล
                </label>
                <input
                  type="text"
                  className="form-control"
                  id="last-name-control"
                  placeholder="ก้อนคำ"
                />
              </div>
              <div className="mb-3">
                <label htmlFor="last-name-control" className="form-label">
                  เบอร์โทรศัพท์
                </label>
                <input
                  type="number"
                  className="form-control"
                  id="last-name-control"
                  placeholder="0836637502"
                  maxLength={10}
                />
              </div>
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
              <div className="mb-3">
                <label htmlFor="re-password-control" className="form-label">
                  ยืนยันรหัสผ่าน
                </label>
                <input
                  type="password"
                  className="form-control"
                  id="re-password-control"
                  placeholder="**********"
                />
              </div>
              <div className="mb-3 text-center">
                <button type="button" className="btn btn-danger bt-main">
                  สมัครสมาชิก
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
export default RegisterContainer;
