import Header from '../../layout/header/Header';
import Footer from '../../layout/Footer/Footer';

import s1 from '../../assets/slider/2.jpg';

import React, { useState, forwardRef, useEffect } from 'react';
import DatePicker from 'react-datepicker';

import 'react-datepicker/dist/react-datepicker.css';

const CustomInput = forwardRef((props, ref) => {
  return (
    <div className="input-group">
      <input
        onClick={props.onClick}
        type="text"
        className="form-control border-end-0"
        placeholder="วันที่"
        aria-label="วันที่"
        aria-describedby="วันที่"
        defaultValue={props.value}
      />
      <span className="input-group-text bg-transparent" onClick={props.onClick}>
        <i className="fa-solid fa-calendar-days color-main"></i>
      </span>
    </div>
  );
});

const SlotTimeItems = ({ timeSlot }) => {
  const { id, start, end, price, is_booking } = timeSlot;
  return (
    <label htmlFor={id} className="col-12 col-sm-6 col-md-4 col-lg-3">
      <div className="px-3 py-2 border border-primary border-2 rounded mt-4 mb-2 mx-3">
        <div className="d-flex flex-row align-items-center justify-content-between">
          <input
            id={id}
            className="form-check-input me-1"
            type="checkbox"
            aria-label="time"
          />

          <div className="d-flex flex-column align-items-center justify-content-start">
            <div className="d-flex flex-row align-items-center">
              {/* <p className="h6 mb-0">{`${start}-${end}`}</p> */}
              <span className="h6 mx-1 mt-2">{`${start}-${end}`}</span>
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

const BookingTableList = () => {
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

const BookingHead = ({ facilityData }) => {
  return (
    <>
      <div className="header-img">
        <img src={s1} className="img-fluid" alt="header-img" />
      </div>
      <div className="row">
        <div className="mt-5">
          <h2 className="text-uppercase mb-3 title-booking">สนาม1</h2>
        </div>
      </div>
      <div className="row">
        <div className="mt-2">
          <h5 className="text-uppercase mb-3">สิ่งอำนวยความสะดวก</h5>
        </div>
      </div>
      <div className="row ps-4">
        {facilityData.map((i, keys) => {
          return (
            <div className="button-red mb-3" key={keys}>
              <i className="fa-solid fa-tv color-main"></i>
              <span>ทีวี</span>
            </div>
          );
        })}
      </div>
    </>
  );
};

const BookingSelectForm = () => {
  const [startDate, setStartDate] = useState(new Date());
  const [timeSlot, setTimeSlot] = useState([]);

  useEffect(() => {
    const genTime = () => {
      var today = new Date();
      today.setHours(today.getHours() + 16);
      let openEndTime = [];
      for (let i = 0; i < 16; i++) {
        let start = 8 + i;
        openEndTime.push({
          id: i,
          start: start.toFixed(2),
          end: (start + 1).toFixed(2),
          price: 900,
          is_booking: false
        });
      }
      setTimeSlot(openEndTime);
      console.log('timeSlot', timeSlot);
    };
    genTime();
    // return () => {
    //   genTime();
    // };
  }, []);
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
                          onChange={(date) => setStartDate(date)}
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
                    {timeSlot.map((item, keys) => {
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
  const mockDataItem = [...Array(6)].map((item, i) => {
    return {
      id: `s-${i + 1}`,
      name: `ทีวี${i + 1}`
    };
  });

  return (
    <>
      <Header />
      <div className="booking-main">
        <div className=""></div>
        <div className="mx-auto main text-black">
          <div className="container">
            <div className="row">
              <BookingHead facilityData={mockDataItem} />
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
