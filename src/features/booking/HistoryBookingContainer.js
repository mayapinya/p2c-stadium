import Header from '../../layout/header/Header';
import Footer from '../../layout/Footer/Footer';
import CardStadium from './CardStadium';

const HistoryBookingContainer = () => {
  const mockDataItem = [...Array(3)].map((item, i) => {
    return {
      id: `s-${i + 1}`,
      name: `สนาม${i + 1}`,
      price: 900
    };
  });

  return (
    <>
      <Header />
      <div className="all-stadium-main">
        <div className="mx-auto main pt-5">
          <div className="container">
            <div className="row">
              <div className="col-12">
                <h5 className="text-uppercase mb-3 fw-bold">ประวัติการจอง</h5>
              </div>

              <div className="row d-flex justify-content-center">
                <div className="col-md-12 col-md-12 col-lg-12 col-xl-10">
                  <div className="table-responsive">
                    <table className="table">
                      <thead className="text-center align-middle">
                        <tr>
                          <th scope="col"></th>
                          <th scope="col">รหัสการจอง</th>
                          <th scope="col">รายการ</th>
                          <th scope="col">จองเมื่อ</th>
                          <th scope="col">สถานะ</th>
                          <th scope="col"></th>
                          <th scope="col"></th>
                        </tr>
                      </thead>
                      <tbody className="text-center align-middle">
                        {mockDataItem.map((item) => {
                          const { id } = item;
                          return (
                            <tr>
                              <th scope="row">1</th>
                              <td>P2C-001-2022-205</td>
                              <td>สนาม1</td>
                              <td>วันที่ 18/09/2565 เวลา 13.00</td>
                              <td>ยังไม่จ่ายเงิน</td>
                              <td>
                                <a
                                  href={`/booking-detail/${id}`}
                                  className="btn btn-primary text-white bt-rounded"
                                >
                                  ข้อมูลการจอง
                                </a>
                              </td>
                              <td>
                                <a
                                  href={'/history'}
                                  className="btn btn-danger bt-main text-white"
                                >
                                  ยกเลิกการจอง
                                </a>
                              </td>
                            </tr>
                          );
                        })}
                      </tbody>
                    </table>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};
export default HistoryBookingContainer;
