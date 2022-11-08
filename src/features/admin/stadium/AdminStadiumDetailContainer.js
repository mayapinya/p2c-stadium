import { useEffect, useRef, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import Switch from 'react-switch';
import {
  STADIUM_CLOSE,
  STADIUM_OPEN,
  TIME_SLOTS
} from '../../../config/constants';
import { validateStadium } from '../../../validations/userValidate';
import { toast } from 'react-toastify';
import { IMaskInput } from 'react-imask';
import { getStadium, updateStadium } from '../../../api/stadiumApi';
import { useLoading } from '../../../contexts/LoadingContext';

function AdminStadiumDetailContainer() {
  let navigate = useNavigate();
  const { id } = useParams();

  const { startLoading, stopLoading } = useLoading();

  const [checked, setChecked] = useState(true);
  const [file, setFile] = useState();
  const inputEl = useRef();

  const [input, setInput] = useState({
    stadiumName: '',
    price: 500,
    facility: 'ทีวี, ห้องน้ำ, อาหารเครื่องดื่ม',
    openTime: '8.00',
    closeTime: '24.00',
    stadiumStatus: true,
    image: file
  });

  const handleChangeInput = (e) => {
    let value = e.target.value ?? e.target.checked;
    if (e.target.name === 'price') {
      value = value.replace(/[^0-9\.,]/g, ''); // eslint-disable-line
    }

    if (e.target.name === 'stadiumStatus') {
      setChecked(e.target.value);
    }

    setInput({ ...input, [e.target.name]: value });
  };

  const handleSubmitForm = async (e) => {
    e.preventDefault();
    const { error } = validateStadium(input);
    if (error) {
      return toast.error(error.message);
    }
    try {
      startLoading();
      const formData = new FormData();
      formData.append('id', id);
      formData.append('stadiumName', input.stadiumName);
      formData.append('price', input.price);
      formData.append('facility', input.facility);
      formData.append('openTime', input.openTime);
      formData.append('closeTime', input.closeTime);
      formData.append(
        'stadiumStatus',
        input.stadiumStatus ? STADIUM_OPEN : STADIUM_CLOSE
      );
      formData.append('image', input.image);
      const res = await updateStadium(formData);
      console.log('res', res);
      stopLoading();
      toast.success('create stadium success');
      if (res.status === 201) {
        navigate('/admin/stadium', { replace: true });
      }
    } catch (err) {
      stopLoading();
      toast.error(err.response.data.message);
    }
  };

  useEffect(() => {
    const fetchData = async () => {
      const res = await getStadium(id);
      console.log('res', res.data);
      const { data } = res.data;
      setInput({
        stadiumName: data.stadiumName,
        price: data.price,
        facility: data.facility,
        openTime: data.openTime,
        closeTime: data.closeTime !== '00.00' ? data.closeTime : '24.00',
        stadiumStatus: data.stadiumStatus === STADIUM_OPEN ? true : false,
        image: data.image
      });
      setFile(data.image);
    };
    fetchData();
  }, [id, startLoading, stopLoading]);

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
                  <span>จัดการข้อมูลสนาม </span>
                </p>
              </div>
            </div>
            <form onSubmit={handleSubmitForm}>
              <div className="row">
                <div className="col-sm-12 col-lg-12 col-xl-7 mt-4 pe-5">
                  <div className="mb-3">
                    <label
                      htmlFor="stadium-name-control"
                      className="form-label"
                    >
                      ชื่อสนาม
                    </label>
                    <input
                      type="text"
                      className="form-control btn-border-radius"
                      id="stadium-name-control"
                      placeholder="ชื่อสนาม"
                      name="stadiumName"
                      value={input.stadiumName}
                      onChange={handleChangeInput}
                    />
                  </div>
                  <div className="mb-3">
                    <label htmlFor="price-control" className="form-label">
                      ราคาต่อชั่วโมง
                    </label>
                    <IMaskInput
                      className="form-control btn-border-radius"
                      mask={'000000000'}
                      radix="."
                      value={input.price.toString()}
                      placeholder="0"
                      unmask={true}
                      onAccept={(value) => {
                        setInput({ ...input, price: value });
                      }}
                    />
                  </div>
                  <div className="mb-3">
                    <label htmlFor="facility-control" className="form-label">
                      สิ่งอำนวยความสะดวก
                    </label>
                    <textarea
                      rows={4}
                      type="text"
                      className="form-control btn-border-radius p-3"
                      id="facility-control"
                      placeholder="ทีวี, ห้องน้ำ, อาหารเครื่องดื่ม"
                      name="facility"
                      value={input.facility}
                      onChange={handleChangeInput}
                    />
                  </div>
                  <div className="row">
                    <div className="mb-3 col-6">
                      <label htmlFor="open-control" className="form-label">
                        <span>เวลาเปิด</span>
                      </label>
                      <select
                        className="form-select form-select-sm btn-border-radius"
                        id="open-control"
                        // defaultValue={'08.00'}
                        name="openTime"
                        value={input.openTime}
                        onChange={handleChangeInput}
                      >
                        {TIME_SLOTS.map((time, keys) => {
                          return (
                            <option key={keys} value={time}>
                              {time}
                            </option>
                          );
                        })}
                      </select>
                    </div>
                    <div className="mb-3 col-6">
                      <label htmlFor="open-control" className="form-label">
                        <span>เวลาปิด</span>
                        {/* <i className="fa-solid fa-store-slash ms-2"></i> */}
                      </label>
                      <select
                        className="form-select form-select-sm btn-border-radius"
                        id="open-control"
                        name="closeTime"
                        value={input.closeTime}
                        onChange={handleChangeInput}
                      >
                        {TIME_SLOTS.map((time, keys) => {
                          return (
                            <option key={keys} value={time}>
                              {time}
                            </option>
                          );
                        })}
                      </select>
                    </div>
                  </div>
                  <div className="mb-3 d-flex align-items-center">
                    <label htmlFor="open-control" className="form-label">
                      <span>สถานะสนาม</span>
                    </label>
                    <Switch
                      name="stadiumStatus"
                      onChange={(checked) => {
                        setChecked(checked);
                        setInput({ ...input, stadiumStatus: checked });
                      }}
                      checked={checked}
                      uncheckedIcon={false}
                      checkedIcon={false}
                      className="react-switch mb-1 ms-3"
                    />
                  </div>
                </div>
                <div className="col-sm-12 col-lg-12 col-xl-5 mt-5">
                  <div className="row">
                    <div className="upload-image">
                      {file || input.image ? (
                        input.image ? (
                          <img
                            src={input.image}
                            className="img-fluid shadow"
                            alt="upload"
                          />
                        ) : (
                          <img
                            src={URL.createObjectURL(file)}
                            className="img-fluid shadow"
                            alt="upload"
                          />
                        )
                      ) : (
                        <svg
                          className="bd-placeholder-img img-thumbnail img-fluid shadow"
                          width="394"
                          height="293"
                          xmlns="http://www.w3.org/2000/svg"
                          role="img"
                          aria-label="A generic square placeholder image with a white border around it, making it resemble a photograph taken with an old instant camera: 200x200"
                          preserveAspectRatio="xMidYMid slice"
                          focusable="false"
                        >
                          <title>
                            A generic square placeholder image with a white
                            border around it, making it resemble a photograph
                            taken with an old instant camera
                          </title>
                          <rect
                            width="100%"
                            height="100%"
                            fill="#868e96"
                          ></rect>
                          <text x="43%" y="50%" fill="#dee2e6" dy=".3em">
                            รูปสนาม
                          </text>
                        </svg>
                      )}
                      <input
                        name="image"
                        type="file"
                        className="d-none"
                        ref={inputEl}
                        onChange={(e) => {
                          if (e.target.files[0]) {
                            const fileData = e.target.files[0];
                            setFile(fileData);
                            setInput({ ...input, image: fileData });
                          }
                        }}
                      />
                      <div className="d-flex justify-content-center mt-4">
                        <button
                          onClick={() => inputEl.current.click()}
                          type="button"
                          className="btn btn-danger btn-border-radius color-main px-4"
                        >
                          <i className="fa-solid fa-cloud-arrow-up me-2"></i>
                          <span>เลือกรูปภาพ</span>
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="row">
                <div className="d-flex justify-content-center mt-4">
                  <button
                    type="submit"
                    className="btn btn-danger btn-border-radius color-main px-4 py-2"
                  >
                    <i className="fa-solid fa-floppy-disk me-2"></i>
                    <span className="fs-5">บันทึก</span>
                  </button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
}
export default AdminStadiumDetailContainer;
