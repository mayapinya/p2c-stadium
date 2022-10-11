import { useEffect, useState } from 'react';

import dayjs from 'dayjs';
import utc from 'dayjs/plugin/utc';
import * as bookingService from '../../api/bookingApi';

import { useNavigate, useParams } from 'react-router-dom';
import Header from '../../layout/header/Header';
import Footer from '../../layout/Footer/Footer';

function BookingDetailContainer() {
  let navigate = useNavigate();

  const { id } = useParams();

  const [bookingDetail, setBookingDetail] = useState({
    bookingStatus: '',
    priceTotal: 0,
    timeTotal: 0,
    createdAt: '',
    User: {},
    StadiumDetail: {},
    StadiumSlots: []
  });

  const onSubmitCancelBooking = async (id) => {
    try {
      const dataBody = { id };
      const res = await bookingService.cancelBooking(dataBody);
      if (res.status === 200) {
        await getBookingDetail(id);
      }
    } catch (err) {
      console.log(err);
    }
  };

  const getBookingDetail = async (id) => {
    try {
      const res = await bookingService.getBooking(id);
      setBookingDetail(res.data.data);
    } catch (err) {
      console.log(err);
    }
  };

  const getBookingStatus = (status) => {
    if (status === 'BOOKING_NOT_PAID') {
      return 'ยังไม่จ่ายเงิน';
    } else if (status === 'BOOKING_CANCEL') {
      return 'ยกเลิก';
    } else {
      return 'จ่ายเงินแล้ว';
    }
  };

  const getClassCss = (status) => {
    if (status === 'BOOKING_NOT_PAID') {
      return ' text-bg-warning ';
    } else if (status === 'BOOKING_CANCEL') {
      return ' text-bg-danger ';
    } else {
      return ' text-bg-success ';
    }
  };

  const trTimeSlotRow = (slotData, StadiumDetail) => {
    const { stadiumName, price } = StadiumDetail;
    return (
      slotData &&
      slotData.map((slot, keys) => {
        dayjs.extend(utc);

        const dayBooking = dayjs.utc(slot.startTime).format('DD/MM/YYYY');
        const startTime = dayjs.utc(slot.startTime).format('HH.mm');
        const endTime = dayjs.utc(slot.endTime).format('HH.mm');

        const timeDiff = dayjs
          .utc(slot.endTime)
          .diff(dayjs.utc(slot.startTime), 'hour');

        return (
          <tr key={keys}>
            <th scope="row">{keys + 1}</th>
            <td>{stadiumName}</td>
            <td>{dayBooking}</td>
            <td>{`${startTime} - ${endTime}`}</td>
            <td>{timeDiff}</td>
            <td>{price}</td>
          </tr>
        );
      })
    );
  };

  useEffect(() => {
    const fetchBookingDetail = async () => {
      await getBookingDetail(id);
    };

    fetchBookingDetail();
  }, []);

  const {
    bookingStatus,
    priceTotal,
    timeTotal,
    createdAt,
    User,
    StadiumSlots,
    StadiumDetail
  } = bookingDetail;

  const day = dayjs.utc(createdAt).format('DD/MM/YYYY');
  const time = dayjs.utc(createdAt).format('HH.mm');
  const bookingDate = `วันที่ ${day} เวลา ${time}`;

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
                  <div className="fw-normal">{id}</div>
                </div>
                <div className="col-sm-5 col-lg-4 col-xl-4 mb-3 ">
                  <div className="fw-bold ">จองเมื่อ</div>
                  <div className="fw-normal ">{bookingDate}</div>
                </div>
              </div>

              <div className="col-12 mb-3">
                <div className="fw-bold">สถานะการจอง</div>
                <div className="fw-normal ">
                  <span
                    className={`badge rounded-pill ${getClassCss(
                      bookingStatus
                    )}`}
                  >
                    {getBookingStatus(bookingStatus)}
                  </span>
                </div>
              </div>
              <div className="mb-3 mb-3">
                <div className="col-12">
                  <div className="fw-bold">ผู้จอง</div>
                  <div className="fw-normal ">{`${User?.firstName} ${User?.lastName}`}</div>
                  {User?.phoneNumber ? (
                    <div className="fw-normal ">
                      เบอร์ติดต่อ : {User.phoneNumber}
                    </div>
                  ) : null}
                  {User?.email ? (
                    <div className="fw-normal ">อีเมล์ : {User.email}</div>
                  ) : null}
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
                        {trTimeSlotRow(StadiumSlots, StadiumDetail)}
                      </tbody>
                      <tfoot className="text-center">
                        <tr>
                          <td className="fw-bold text-center" colSpan={4}>
                            ราคารวม
                          </td>
                          <td>{timeTotal}</td>
                          <td>{priceTotal}</td>
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
                    <span>{priceTotal} บาท</span>
                  </div>
                </div>
              </div>
              <div className="mb-3 text-center">
                <button
                  type="button"
                  className="btn btn-danger bt-main"
                  onClick={() => onSubmitCancelBooking(id)}
                >
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
