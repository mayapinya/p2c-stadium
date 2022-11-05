import { Link } from 'react-router-dom';
// import s1 from '../../assets/slider/1.jpg';

function CardStadium({ itemData }) {
  const { id, stadiumName, price, image } = itemData;
  return (
    <div className="col-lg-3 col-md-4 col-sm-5 mb-3">
      <div className="card">
        <img src={image} className="card-img-top card-img" alt="card" />
        <div className="card-body">
          <h5 className="card-title">{stadiumName}</h5>
          <p className="card-text text-end">{price} บาท / ต่อชั่วโมง</p>
          <Link
            to={`/booking/${id}`}
            className="btn btn-danger bt-main text-white col-12"
          >
            จองสนาม
          </Link>
        </div>
      </div>
    </div>
  );
}
export default CardStadium;
