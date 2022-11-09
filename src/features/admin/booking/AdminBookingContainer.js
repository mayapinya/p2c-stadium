import { useEffect, useState } from 'react';

import dayjs from 'dayjs';
import utc from 'dayjs/plugin/utc';

import * as bookingService from '../../../api/bookingApi';
import { Link } from 'react-router-dom';

const AdminBookingContainer = () => {
  dayjs.extend(utc);

  const [bookingList, setBookingList] = useState([]);

  const getBookingList = async () => {
    try {
      const res = await bookingService.getBookingAllList();
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

  const getClassColor = (status) => {
    if (status === 'BOOKING_NOT_PAID') {
      return 'badge rounded-pill text-bg-warning p-2';
    } else if (status === 'BOOKING_CANCEL') {
      return 'badge rounded-pill text-bg-secondary p-2';
    } else {
      return 'badge rounded-pill text-bg-success p-2';
    }
  };

  return (
    <>
      <div className="admin-panel">
        <div className="bg-white panel-radius  container px-5">
          <div className="row">
            <div className="row d-flex justify-content-center">
              <div className="col-md-12 col-md-12 col-lg-12 col-xl-12 mt-5">
                <h5 className="text-uppercase mb-3 fw-bold">รายการจอง</h5>
              </div>
            </div>

            <div className="row d-flex justify-content-center">
              <div className="col-md-12 col-md-12 col-lg-12 col-xl-12">
                <div className="table-responsive">
                  <table className="table">
                    <thead className="text-center align-middle">
                      <tr>
                        <th scope="col">รหัสการจอง</th>
                        <th scope="col">รายการ</th>
                        <th scope="col">จองเมื่อ</th>
                        <th scope="col">สถานะ</th>
                        <th scope="col">แก้ไข</th>
                      </tr>
                    </thead>
                    <tbody className="text-center align-middle">
                      {bookingList.map((item, keys) => {
                        const { id, createdAt, bookingStatus, StadiumDetail } =
                          item;
                        const { stadiumName } = StadiumDetail;

                        const day = dayjs.utc(createdAt).format('DD/MM/YYYY');
                        const time = dayjs(createdAt).format('HH.mm');
                        const bookingDate = `วันที่ ${day} เวลา ${time}`;

                        return (
                          <tr key={keys}>
                            <td>{id}</td>
                            <td>{stadiumName}</td>
                            <td>{bookingDate}</td>
                            <td>
                              <span className={getClassColor(bookingStatus)}>
                                {getBookingStatus(bookingStatus)}
                              </span>
                            </td>
                            <td>
                              <Link
                                to={`booking-detail/${id}`}
                                className="btn btn-primary text-white bt-rounded"
                              >
                                <i className="fa-regular fa-pen-to-square"></i>
                              </Link>
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
    </>
  );
};
export default AdminBookingContainer;
