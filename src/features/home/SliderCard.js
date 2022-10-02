import CardContent from './CardContent';

import s1 from '../../assets/slider/1.jpg';
import s2 from '../../assets/slider/2.jpg';
import s3 from '../../assets/slider/3.jpg';

function SliderCard() {
  return (
    <div
      id="carouselExampleIndicators"
      className="carousel slide carousel-fade bg-h"
      data-bs-ride="carousel"
    >
      <div className="carousel-indicators">
        <button
          type="button"
          data-bs-target="#carouselExampleIndicators"
          data-bs-slide-to="0"
          className="active"
          aria-label="Slide 1"
          aria-current="true"
        ></button>
        <button
          type="button"
          data-bs-target="#carouselExampleIndicators"
          data-bs-slide-to="1"
          aria-label="Slide 2"
          className=""
        ></button>
        <button
          type="button"
          data-bs-target="#carouselExampleIndicators"
          data-bs-slide-to="2"
          aria-label="Slide 3"
          className=""
        ></button>
      </div>
      <div className="carousel-inner slider">
        <div className="carousel-item active" data-bs-interval="6000">
          <img className="d-block slider-bg" src={s1} alt="1 slide" />
          <CardContent />
        </div>
        <div className="carousel-item" data-bs-interval="6000">
          <img className="d-block slider-bg" src={s2} alt="2 slide" />
          <CardContent />
        </div>
        <div className="carousel-item" data-bs-interval="6000">
          <img className="d-block slider-bg" src={s3} alt="3 slide" />
          <CardContent />
        </div>
      </div>
      <button
        className="carousel-control-prev"
        type="button"
        data-bs-target="#carouselExampleIndicators"
        data-bs-slide="prev"
      >
        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Previous</span>
      </button>
      <button
        className="carousel-control-next"
        type="button"
        data-bs-target="#carouselExampleIndicators"
        data-bs-slide="next"
      >
        <span className="carousel-control-next-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Next</span>
      </button>
    </div>
  );
}
export default SliderCard;
