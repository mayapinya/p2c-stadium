import Header from '../../layout/header/Header';
import Footer from '../../layout/Footer/Footer';
import CardStadium from './CardStadium';

function AllStadiumContainer() {
  const mockDataItem = [...Array(5)].map((item, i) => {
    return {
      id: `s-${i + 1}`,
      name: `สนาม${i + 1}`,
      price: 900
    };
  });

  return (
    <>
      <Header />
      <div className="all-stadium-main">
        <div className="mx-auto main pt-5">
          {/* <div className="card" style="width: 18rem;"> */}
          <div className="container">
            <div className="row">
              <div className="col-12">
                <h5 className="text-uppercase mb-3">สนามทั้งหมด</h5>
              </div>
              <div className="row">
                {mockDataItem.map((item, keys) => {
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
