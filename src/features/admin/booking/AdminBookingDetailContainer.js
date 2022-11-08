import { useEffect, useState } from 'react';

import dayjs from 'dayjs';
import utc from 'dayjs/plugin/utc';
import * as bookingService from '../../../api/bookingApi';

import { useNavigate, useParams } from 'react-router-dom';
import ModalConfirm from '../../../components/ModalConfirm';
import { BOOKING_CANCEL, BOOKING_SUCCESS } from '../../../config/constants';

function AdminBookingDetailContainer() {
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

  const onSubmitBookingStatus = async (id, bookingStatus) => {
    try {
      const dataBody = { id, bookingStatus };
      const res = await bookingService.updateBookingStatus(dataBody);
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
  }, [id]);

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
  const time = dayjs(createdAt).format('HH.mm');
  const bookingDate = `วันที่ ${day} เวลา ${time}`;

  return (
    <>
      <div className="mx-auto">
        <div className="admin-panel">
          <div className="container">
            <div className="text-start mb-4">
              <button
                type="button"
                className="btn btn-secondary"
                onClick={() => navigate(-1)}
              >
                <i className="fa-solid fa-arrow-left me-2"></i>
                <span>Back</span>
              </button>
            </div>
          </div>

          <div className="bg-white panel-radius container px-5 py-5">
            <div className="row position-relative">
              <div className="col-md-12 col-md-12 col-lg-12 col-xl-12">
                <p className="fs-4 text-center fw-bold">
                  <span>ใบจองสนาม </span>
                </p>
              </div>
              <div className="position-absolute top-0 end-0 w-auto">
                <div className=" d-flex flex-column gap-4">
                  <button
                    type="button"
                    className="btn btn-danger btn-border-radius color-main"
                    data-bs-toggle="modal"
                    data-bs-target="#booking_cancel"
                  >
                    <i className="fa-solid fa-ban me-2"></i>
                    <span>ยกเลิกการจอง</span>
                  </button>
                  <ModalConfirm
                    id="booking_cancel"
                    title={'ยกเลิกรายการจอง'}
                    content={'คุณต้องการยกเลิกรายการหรือไม่ ?'}
                    okText={'ตกลง'}
                    cancelText={'ยกเลิก'}
                    onSubmit={() => onSubmitBookingStatus(id, BOOKING_CANCEL)}
                  />
                  <button
                    type="button"
                    className="btn btn-success btn-border-radius color-green"
                    data-bs-toggle="modal"
                    data-bs-target="#booking_success"
                  >
                    <i className="fa-solid fa-check me-2"></i>
                    <span>จ่ายเงินแล้ว</span>
                  </button>
                  <ModalConfirm
                    id="booking_success"
                    title={'อัพเดท สถานะจ่ายเงิน'}
                    content={'คุณต้องการบันทึก จ่ายเงินแล้ว หรือไม่ ?'}
                    okText={'ใช่'}
                    cancelText={'ไม่'}
                    onSubmit={() => onSubmitBookingStatus(id, BOOKING_SUCCESS)}
                  />
                </div>
              </div>
            </div>
            <div className="row">
              <div className="col-sm-12 col-lg-12 col-xl-12 mb-3">
                <div className="fw-bold">รหัสการจอง</div>
                <div className="fw-normal">{id}</div>
              </div>
              <div className="col-sm-12 col-lg-12 col-xl-12 mb-3 ">
                <div className="fw-bold ">จองเมื่อ</div>
                <div className="fw-normal ">{bookingDate}</div>
              </div>
            </div>

            <div className="col-12 mb-3">
              <div className="fw-bold">สถานะการจอง</div>
              <div className="fw-normal ">
                <span
                  className={`badge rounded-pill ${getClassCss(bookingStatus)}`}
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
          </div>
        </div>
      </div>
    </>
  );
}
export default AdminBookingDetailContainer;
