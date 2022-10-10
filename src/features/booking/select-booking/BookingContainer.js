import React, { useState, forwardRef, useEffect, useMemo } from 'react';
import { useParams } from 'react-router-dom';
import { useAuth } from '../../../contexts/AuthContext';

import Header from '../../../layout/header/Header';
import Footer from '../../../layout/Footer/Footer';

import s1 from '../../../assets/slider/2.jpg';
import * as stadiumService from '../../../api/stadiumApi';
import * as bookingService from '../../../api/bookingApi';

import DatePicker from 'react-datepicker';

import 'react-datepicker/dist/react-datepicker.css';

const CustomInput = forwardRef((props, ref) => {
  const { onClick, value } = props;
  return (
    <div className="input-group">
      <input
        onClick={onClick}
        type="text"
        className="form-control border-end-0"
        placeholder="วันที่"
        aria-label="วันที่"
        aria-describedby="วันที่"
        value={value ?? ''}
        readOnly={true}
      />
      <span className="input-group-text bg-transparent" onClick={props.onClick}>
        <i className="fa-solid fa-calendar-days color-main"></i>
      </span>
    </div>
  );
});

const SlotTimeItems = ({ timeSlot }) => {
  const { id, start, end, price, is_booking } = timeSlot;
  const timeStart = new Date(start);
  const timeEnd = new Date(end);
  const startHour = `${timeStart.getUTCHours()}.00`;
  const endHour = `${timeEnd.getUTCHours()}.00`;
  return (
    <label htmlFor={id} className="col-12 col-sm-6 col-md-4 col-lg-3  ">
      <div
        className={`px-3 py-2 border ${
          is_booking ? 'border-dark opacity-25' : 'border-primary'
        } border-2 rounded mt-4 mb-2 mx-3`}
      >
        <div className="d-flex flex-row align-items-center justify-content-between">
          <input
            id={id}
            className="form-check-input me-1"
            type="checkbox"
            aria-label="time"
            disabled={is_booking}
          />

          <div className="d-flex flex-column align-items-center justify-content-start">
            <div className="d-flex flex-row align-items-center">
              {/* <p className="h6 mb-0">{`${start}-${end}`}</p> */}
              <span className="h6 mx-1 mt-2">{`${startHour}-${endHour}`}</span>
            </div>
            <div className="d-flex flex-row align-items-center">
              <sup className="dollar font-weight-bold text-muted">฿</sup>
              <span className="h6 mx-1 mt-2">{price}</span>
              <span className="text-muted font-weight-bold">/ ชั่วโมง</span>
            </div>
          </div>
        </div>
      </div>
    </label>
  );
};

const BookingTableList = ({}) => {
  return (
    <div className="container">
      <div className="row d-flex justify-content-center">
        <div className="col-md-12 col-md-12 col-lg-12 col-xl-10">
          <div className="mt-2">
            <h5 className="text-uppercase mb-3 fw-bold">รายการจอง</h5>
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
    </div>
  );
};

const BookingHead = ({ stadiumData }) => {
  const { stadiumName, facility } = stadiumData;
  return (
    <>
      <div className="header-img">
        <img src={s1} className="img-fluid" alt="header-img" />
      </div>
      <div className="row">
        <div className="mt-5">
          <h2 className="text-uppercase mb-3 title-booking">{stadiumName}</h2>
        </div>
      </div>
      <div className="row">
        <div className="mt-2">
          <h5 className="text-uppercase mb-3">สิ่งอำนวยความสะดวก</h5>
        </div>
      </div>
      <div className="row ps-4">
        {facility?.split(',').map((item, keys) => {
          return (
            <div className="button-red mb-3" key={keys}>
              {/* <i className="fa-solid fa-tv color-main"></i> */}
              <span>{item}</span>
            </div>
          );
        })}
      </div>
    </>
  );
};

const BookingSelectForm = () => {
  const today = new Date().toISOString().substr(0, 19).split('T')[0];
  const dateStr = `${today}T00:00:00.000Z`;
  const [startDate, setStartDate] = useState(new Date(Date.parse(dateStr)));

  const [bookingSlots, setBookingSlots] = useState([]);
  const { user } = useAuth();
  const { id } = useParams();

  const [input, setInput] = useState({
    stadiumId: id,
    dayBooking: new Date().toISOString()
  });

  const onDateSelectChange = (date) => {
    const dateSelected = new Date(date)
      .toISOString()
      .substr(0, 19)
      .split('T')[0];
    const dateStr = `${dateSelected}T00:00:00.000Z`;
    const currentDate = new Date(dateStr);

    setStartDate(currentDate);
    setInput({
      ...input,
      dayBooking: currentDate
    });
    getBookingSlots();
  };

  const getBookingSlots = async () => {
    try {
      console.log('input', input);
      const res = await bookingService.getBookingSlot(input);
      setBookingSlots(res.data);
    } catch (err) {
      console.log(err);
    }
  };

  const inputMemo = useMemo(
    () => ({
      stadiumId: input.id,
      dayBooking: input.dayBooking
    }),
    [input.id, input.dayBooking]
  );

  useEffect(() => {
    const fetchBookingSlots = async () => {
      await getBookingSlots();
    };

    fetchBookingSlots();
  }, [inputMemo]);

  return (
    <>
      <section>
        <div className="container py-5">
          <div className="row d-flex justify-content-center">
            <div className="col-md-12 col-md-12 col-lg-12 col-xl-10">
              <div className="card rounded-3">
                <div className="card-body mx-1 my-2">
                  <div className="d-flex align-items-center justify-content-center">
                    <form className="row">
                      <div className="mb-3 col-12 col-sm-8">
                        <label htmlFor="day" className="form-label">
                          วันที่
                        </label>
                        <DatePicker
                          id="day"
                          dateFormat="dd/MM/yyyy"
                          customInput={<CustomInput />}
                          selected={startDate}
                          // value={startDate}
                          onChange={onDateSelectChange}
                        />
                      </div>
                      <div className="mb-3 col-12 col-sm-4 d-flex justify-content-center align-items-end ">
                        <button
                          type="button"
                          className="btn btn-danger bt-main text-white"
                        >
                          ดูตารางจอง
                        </button>
                      </div>
                    </form>
                  </div>
                  <div className="d-flex align-content-start flex-wrap">
                    {bookingSlots.slots?.map((item, keys) => {
                      return <SlotTimeItems key={keys} timeSlot={item} />;
                    })}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <BookingTableList />
      <div className="row py-5">
        <div className="mb-3 col-12 col-sm-12 d-flex justify-content-center align-items-end ">
          <a
            href={'/booking-history'}
            className="btn btn-danger bt-main text-white fs-5"
          >
            ยืนยันการจอง
          </a>
        </div>
      </div>
    </>
  );
};

const BookingContainer = () => {
  const [stadiumDetail, setStadiumDetail] = useState([]);
  const { user } = useAuth();
  const { id } = useParams();

  useEffect(() => {
    const fetchStadiumDetail = async () => {
      try {
        const res = await stadiumService.getStadium(id);
        setStadiumDetail(res.data.data);
      } catch (err) {
        console.log(err);
      }
    };
    fetchStadiumDetail();
  }, []);

  return (
    <>
      <Header />
      <div className="booking-main">
        <div className=""></div>
        <div className="mx-auto main text-black">
          <div className="container">
            <div className="row">
              <BookingHead stadiumData={stadiumDetail} />
              <BookingSelectForm />
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};
export default BookingContainer;
