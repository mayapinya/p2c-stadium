import s1 from '../../assets/slider/1.jpg';

function CardStadium({ itemData }) {
  const { id, name, price } = itemData;
  return (
    <div className="col-lg-3 col-md-4 col-sm-5 mb-3">
      <div className="card">
        <img src={s1} className="card-img-top" alt="card" />
        <div className="card-body">
          <h5 className="card-title">{name}</h5>
          <p className="card-text text-end">{price} บาท / ต่อชั่วโมง</p>
          <a
            href={`/booking/${id}`}
            className="btn btn-danger bt-main text-white col-12"
          >
            จองสนาม
          </a>
        </div>
      </div>
    </div>
  );
}
export default CardStadium;
