import { useEffect, useState } from 'react';

import dayjs from 'dayjs';
import utc from 'dayjs/plugin/utc';

import Header from '../../layout/header/Header';
import Footer from '../../layout/Footer/Footer';

import * as bookingService from '../../api/bookingApi';
import { Link } from 'react-router-dom';

const HistoryBookingContainer = () => {
  dayjs.extend(utc);

  const [bookingList, setBookingList] = useState([]);

  const getBookingList = async () => {
    try {
      const res = await bookingService.getBookingList();
      setBookingList(res.data.data);
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    const fetchBookingHistory = async () => {
      await getBookingList();
    };

    fetchBookingHistory();
  }, []);

  const getBookingStatus = (status) => {
    if (status === 'BOOKING_NOT_PAID') {
      return 'ยังไม่จ่ายเงิน';
    } else if (status === 'BOOKING_CANCEL') {
      return 'ยกเลิก';
    } else {
      return 'จ่ายเงินแล้ว';
    }
  };

  const onSubmitCancelBooking = async (id) => {
    try {
      const dataBody = { id };
      const res = await bookingService.cancelBooking(dataBody);
      if (res.status === 200) {
        await getBookingList();
      }
    } catch (err) {
      console.log(err);
    }
  };

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
                        {bookingList.map((item, keys) => {
                          const {
                            id,
                            createdAt,
                            bookingStatus,
                            StadiumDetail
                          } = item;
                          const { stadiumName } = StadiumDetail;

                          const day = dayjs.utc(createdAt).format('DD/MM/YYYY');
                          const time = dayjs(createdAt).format('HH.mm');
                          const bookingDate = `วันที่ ${day} เวลา ${time}`;

                          return (
                            <tr key={keys}>
                              <th scope="row">1</th>
                              <td>{id}</td>
                              <td>{stadiumName}</td>
                              <td>{bookingDate}</td>
                              <td>{getBookingStatus(bookingStatus)}</td>
                              <td>
                                <Link
                                  to={`/booking-detail/${id}`}
                                  className="btn btn-primary text-white bt-rounded"
                                >
                                  ข้อมูลการจอง
                                </Link>
                              </td>
                              <td>
                                <button
                                  onClick={() => onSubmitCancelBooking(id)}
                                  className="btn btn-danger bt-main text-white"
                                >
                                  ยกเลิกการจอง
                                </button>
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
