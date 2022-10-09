import { useNavigate } from 'react-router-dom';
import Header from '../../layout/header/Header';
import Footer from '../../layout/Footer/Footer';

function BookingDetailContainer() {
  let navigate = useNavigate();

  return (
    <>
      <Header />
      <div className="login-main">
        <div className="container mx-auto main d-flex flex-column justify-content-center box-booking">
          <div className="panel">
            <div className="text-center">
              <button
                type="button"
                className="btn btn-secondary back-button"
                onClick={() => navigate(-1)}
              >
                <i className="fa-solid fa-arrow-left"></i>
                <span>Back</span>
              </button>
              <p className="fs-4">
                <span>ใบจองสนาม </span>
              </p>
            </div>
            <div className="panel-content px-2 pt-5">
              <div className="row">
                <div className="col-sm-7 col-lg-8 col-xl-8 mb-3">
                  <div className="fw-bold">รหัสการจอง</div>
                  <div className="fw-normal">P2C-001-2022-205</div>
                </div>
                <div className="col-sm-5 col-lg-4 col-xl-4 mb-3 ">
                  <div className="fw-bold ">จองเมื่อ</div>
                  <div className="fw-normal ">วันที่ 18/09/2565 เวลา 13.00</div>
                </div>
              </div>

              <div className="col-12 mb-3">
                <div className="fw-bold">สถานะการจอง </div>
                <div className="fw-normal ">
                  <span class="badge rounded-pill text-bg-warning">
                    ยังไม่จ่ายเงิน
                  </span>
                </div>
              </div>
              <div className="mb-3 mb-3">
                <div className="col-12">
                  <div className="fw-bold">ผู้จอง</div>
                  <div className="fw-normal ">สมชาย ก้อนคำ</div>
                  <div className="fw-normal ">เบอร์ติดต่อ : 0836637502</div>
                  <div className="fw-normal ">อีเมล์ : user@gmail.com</div>
                </div>
              </div>
              <div className="row">
                <div className="col-md-12 col-md-12 col-lg-12 col-xl-12">
                  <div className="mt-2">
                    <div className="mb-3 fw-bold">รายการจอง</div>
                  </div>
                  <div className="table-responsive">
                    <table className="table">
                      <thead className="text-center">
                        <tr>
                          <th scope="col"></th>
                          <th scope="col">รายการ</th>
                          <th scope="col">วันที่</th>
                          <th scope="col">เวลา</th>
                          <th scope="col">ชั่วโมง</th>
                          <th scope="col">ราคา</th>
                        </tr>
                      </thead>
                      <tbody className="text-center">
                        <tr>
                          <th scope="row">1</th>
                          <td>สนาม1</td>
                          <td>19/09/2565</td>
                          <td>18.00-19.00</td>
                          <td>1</td>
                          <td>900</td>
                        </tr>
                        <tr>
                          <th scope="row">2</th>
                          <td>สนาม1</td>
                          <td>19/09/2565</td>
                          <td>19.00-20.00</td>
                          <td>1</td>
                          <td>900</td>
                        </tr>
                      </tbody>
                      <tfoot className="text-center">
                        <tr>
                          <td className="fw-bold text-center" colSpan={4}>
                            ราคารวม
                          </td>
                          <td>2</td>
                          <td>1,800</td>
                        </tr>
                      </tfoot>
                    </table>
                  </div>
                </div>
              </div>
              <div className="mb-3">
                <div className="col-12 p-2">
                  <div className="fw-bold text-end">
                    <span className="me-5">รวมราคาสุทธิ</span>
                    <span>1,800 บาท</span>
                  </div>
                </div>
              </div>
              <div className="mb-3 text-center">
                <button type="button" className="btn btn-danger bt-main">
                  ยกเลิกการจอง
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
export default BookingDetailContainer;
