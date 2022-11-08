import { useEffect, useState } from 'react';

import Header from '../../../layout/header/Header';
import Footer from '../../../layout/Footer/Footer';
import CardStadium from './CardStadium';

import * as stadiumService from '../../../api/stadiumApi';

function AllStadiumContainer() {
  const [stadiumList, setStadiumList] = useState([]);

  useEffect(() => {
    const fetchStadiumList = async () => {
      try {
        const res = await stadiumService.getStadiumList();
        setStadiumList(res.data.data);
      } catch (err) {
        console.log(err);
      }
    };
    fetchStadiumList();
  }, []);

  return (
    <>
      <Header />
      <div className="all-stadium-main">
        <div className="mx-auto main pt-5">
          <div className="container">
            <div className="row">
              <div className="col-12">
                <h5 className="text-uppercase mb-3">สนามทั้งหมด</h5>
              </div>
              <div className="row">
                {stadiumList.map((item, keys) => {
                  return <CardStadium key={keys} itemData={item} />;
                })}
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}
export default AllStadiumContainer;
