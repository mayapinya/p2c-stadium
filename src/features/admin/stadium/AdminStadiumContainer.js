import { useEffect, useState } from 'react';
import Switch from 'react-switch';
import * as stadiumService from '../../../api/stadiumApi';

import { Link, useNavigate } from 'react-router-dom';
import { useLoading } from '../../../contexts/LoadingContext';
import { toast } from 'react-toastify';
import { STADIUM_CLOSE, STADIUM_OPEN } from '../../../config/constants';

const RowTableStadium = ({ item }) => {
  let navigate = useNavigate();

  const { id, stadiumName, price, stadiumStatus } = item;
  const { startLoading, stopLoading } = useLoading();

  const [checked, setChecked] = useState(
    stadiumStatus === 'STADIUM_OPEN' ? true : false
  );
  const handleChange = (nextChecked) => {
    setChecked(nextChecked);
    console.log('id', id);
    console.log('stadiumStatus', nextChecked);
    saveUpdateStatus(id, nextChecked);
  };

  const saveUpdateStatus = async (id, stadiumStatus) => {
    try {
      startLoading();
      const formData = new FormData();
      formData.append('id', id);
      formData.append(
        'stadiumStatus',
        stadiumStatus ? STADIUM_OPEN : STADIUM_CLOSE
      );
      const res = await stadiumService.updateStatusStadium(formData);
      stopLoading();
      toast.success(`Update status stadiumId ${id} success`);
      if (res.status === 201) {
        navigate('/admin/stadium', { replace: true });
      }
    } catch (err) {
      stopLoading();
      toast.error(`Update status stadiumId ${id} fail`);
    }
  };

  return (
    <tr>
      <td>{stadiumName}</td>
      <td>{price}</td>
      <td>
        <Link
          to={`/admin/stadium-detail/${id}`}
          className="btn btn-primary text-white bt-rounded"
        >
          <i className="fa-regular fa-pen-to-square"></i>
        </Link>
      </td>
      <td>
        <Switch
          onChange={handleChange}
          checked={checked}
          uncheckedIcon={false}
          checkedIcon={false}
          className="react-switch"
        />
      </td>
    </tr>
  );
};

const AdminStadiumContainer = () => {
  const [stadiumList, setStadiumList] = useState([]);

  useEffect(() => {
    const fetchStadiumList = async () => {
      try {
        const res = await stadiumService.getStadiumAll();
        console.log('res.data.data', res.data.data);
        setStadiumList(res.data.data);
      } catch (err) {
        console.log(err);
      }
    };
    fetchStadiumList();
  }, []);

  return (
    <>
      <div className="admin-panel">
        <div className="bg-white panel-radius  container px-5">
          <div className="row position-relative ">
            <div className="d-flex justify-content-center">
              <div className="col-md-12 col-md-12 col-lg-12 col-xl-12 mt-5">
                <h5 className="text-uppercase mb-3 fw-bold">จัดการสนาม</h5>
              </div>
              <div className="position-absolute top-0 end-0 w-auto mt-4">
                <div className=" d-flex flex-column gap-4">
                  <Link
                    to={'/admin/create-stadium'}
                    type="button"
                    className="btn btn-danger btn-border-radius color-main"
                  >
                    <i className="fa-solid fa-plus me-2"></i>
                    <span>เพิ่มข้อมูลสนาม</span>
                  </Link>
                </div>
              </div>
            </div>

            <div className="row d-flex justify-content-center">
              <div className="col-md-12 col-md-12 col-lg-12 col-xl-12">
                <div className="table-responsive">
                  <table className="table">
                    <thead className="text-center align-middle">
                      <tr>
                        <th scope="col">ชื่อสนาม</th>
                        <th scope="col">ราคาต่อชั่วโมง</th>
                        <th scope="col">แก้ไข</th>
                        <th scope="col">สถานะ สนาม เปิด/ปิด</th>
                      </tr>
                    </thead>
                    <tbody className="text-center align-middle">
                      {stadiumList.map((item, keys) => {
                        return <RowTableStadium key={keys} item={item} />;
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
export default AdminStadiumContainer;
