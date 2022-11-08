import React, {
  useState,
  forwardRef,
  useEffect,
  useMemo,
  useCallback
} from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { useAuth } from '../../../contexts/AuthContext';
import { useBooking } from '../../../contexts/BookingContext';

import dayjs from 'dayjs';
import utc from 'dayjs/plugin/utc';

import Header from '../../../layout/header/Header';
import Footer from '../../../layout/Footer/Footer';

import * as stadiumService from '../../../api/stadiumApi';
import * as bookingService from '../../../api/bookingApi';

import DatePicker from 'react-datepicker';

import 'react-datepicker/dist/react-datepicker.css';
import { useLoading } from '../../../contexts/LoadingContext';

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

const SlotTimeItems = ({ timeSlot, onCheckedData }) => {
  dayjs.extend(utc);
  let { id, start, end, price, is_booking, checked } = timeSlot;
  const timeStart = new Date(start);
  const timeEnd = new Date(end);
  const startHour = `${timeStart.getUTCHours()}.00`;
  const endHour = `${timeEnd.getUTCHours()}.00`;

  const { bookingSlots, setBookingSlots, stadium, setSumBooking } =
    useBooking();

  const onChangeSlot = (event, timeSlot) => {
    // console.log('event, timeSlot', event, timeSlot);
    const { target } = event;

    if (target.checked) {
      const newArr = [...bookingSlots];
      newArr.push({
        ...timeSlot,
        stadiumName: stadium.stadiumName,
        price: stadium.price,
        hour: dayjs.utc(timeSlot.end).diff(dayjs.utc(timeSlot.start), 'hour')
      });

      setBookingSlots(newArr);

      const calSum = calSumBooking(newArr);
      setSumBooking(calSum);
    } else {
      const oldArr = [...bookingSlots];

      const newArr = oldArr.filter(
        (slot) => slot.start !== timeSlot.start && slot.end !== timeSlot.end
      );
      setBookingSlots(newArr);

      const calSum = calSumBooking(newArr);
      setSumBooking(calSum);
    }
    timeSlot.checked = target.checked;
    onCheckedData(timeSlot);
  };

  const calSumBooking = (arrBooking) => {
    return {
      sumHour: arrBooking.map((a) => a.hour).reduce((a, b) => a + b, 0),
      sumPrice: arrBooking.map((a) => a.price).reduce((a, b) => a + b, 0)
    };
  };

  return (
    <label htmlFor={id} className="col-12 col-sm-6 col-md-4 col-lg-3">
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
            checked={checked}
            onChange={(event) => onChangeSlot(event, timeSlot)}
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

const BookingTableList = () => {
  const { bookingSlots, sumBooking } = useBooking();
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
                {bookingSlots.map((slot, keys) => {
                  dayjs.extend(utc);

                  const dayBooking = dayjs.utc(slot.start).format('DD/MM/YYYY');
                  const startTime = dayjs.utc(slot.start).format('HH.mm');
                  const endTime = dayjs.utc(slot.end).format('HH.mm');

                  const timeDiff = dayjs
                    .utc(slot.end)
                    .diff(dayjs.utc(slot.start), 'hour');

                  return (
                    <tr key={keys}>
                      <th scope="row">{keys + 1}</th>
                      <td>{slot.stadiumName}</td>
                      <td>{dayBooking}</td>
                      <td>{`${startTime} - ${endTime}`}</td>
                      <td>{timeDiff}</td>
                      <td>{slot.price}</td>
                    </tr>
                  );
                })}
              </tbody>
              <tfoot className="text-center">
                <tr>
                  <td className="fw-bold text-center" colSpan={4}>
                    ราคารวม
                  </td>
                  <td>{sumBooking.sumHour}</td>
                  <td>{sumBooking.sumPrice}</td>
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
  const { stadiumName, facility, image } = stadiumData;
  return (
    <>
      <div className="header-img">
        <img src={image} className="img-fluid" alt="header-img" />
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

const ButtonBooking = () => {
  const { bookingSlots, sumBooking, stadium } = useBooking();
  const { user } = useAuth();
  let navigate = useNavigate();

  const onSubmit = async () => {
    try {
      // console.log(user);
      // console.log('stadium', stadium);
      // console.log('sumBooking', sumBooking);
      // console.log('bookingSlots', bookingSlots);
      const timeSlots = bookingSlots.map(function (slot) {
        return {
          startTime: slot.start,
          endTime: slot.end
        };
      });

      const dataBody = {
        userId: user.id,
        stadiumDetailId: stadium.id,
        priceTotal: sumBooking.sumPrice,
        timeTotal: sumBooking.sumHour,
        timeSlots
      };

      console.log('dataBody', dataBody);
      const res = await bookingService.saveBooking(dataBody);
      if (res.status === 200) {
        navigate(`/booking-history`);
      }
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div className="row py-5">
      <div className="mb-3 col-12 col-sm-12 d-flex justify-content-center align-items-end ">
        <button
          disabled={sumBooking.sumHour > 0 ? false : true}
          onClick={onSubmit}
          // to={'/booking-history'}
          className="btn btn-danger bt-main text-white fs-5"
        >
          ยืนยันการจอง
        </button>
      </div>
    </div>
  );
};

const BookingSelectForm = () => {
  const { startLoading, stopLoading } = useLoading();
  const { clearDataSlotBooking } = useBooking();
  const today = new Date().toISOString().substr(0, 19).split('T')[0];
  const dateStr = `${today}T00:00:00.000Z`;
  const [startDate, setStartDate] = useState(new Date(Date.parse(dateStr)));

  const [bookingSlots, setBookingSlots] = useState([]);
  const { id } = useParams();

  const [input, setInput] = useState({
    stadiumId: id,
    dayBooking: new Date().toISOString()
  });

  const onDateSelectChange = async (date) => {
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
    clearDataSlotBooking();
    await getBookingSlots();
  };

  const onChecked = (item) => {
    const newArr = [...bookingSlots];
    const updateIndex = newArr.findIndex((i) => i.start === item.start);
    newArr[updateIndex].checked = item.checked;
    setBookingSlots(newArr);
  };

  const getBookingSlots = async () => {
    try {
      const res = await bookingService.getBookingSlot(input);
      const mapData = res.data.slots.map((i) => ({ ...i, checked: false }));

      setBookingSlots(mapData);
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
      startLoading();
      await getBookingSlots();
      stopLoading();
    };

    fetchBookingSlots();
  }, [inputMemo, startLoading, stopLoading]);

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
                    {bookingSlots?.map((item, keys) => {
                      return (
                        <SlotTimeItems
                          key={keys}
                          timeSlot={item}
                          onCheckedData={onChecked}
                        />
                      );
                    })}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <BookingTableList />
      <ButtonBooking />
    </>
  );
};

const BookingContainer = () => {
  const { stadium, setStadium } = useBooking();
  const { id } = useParams();

  useEffect(() => {
    const fetchStadiumDetail = async () => {
      try {
        const res = await stadiumService.getStadium(id);
        setStadium(res.data.data);
      } catch (err) {
        console.log(err);
      }
    };
    fetchStadiumDetail();
  }, [id]);

  return (
    <>
      <Header />
      <div className="booking-main">
        <div className=""></div>
        <div className="mx-auto main text-black">
          <div className="container">
            <div className="row">
              <BookingHead stadiumData={stadium} />
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
