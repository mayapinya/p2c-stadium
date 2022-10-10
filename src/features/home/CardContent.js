import { Link } from 'react-router-dom';
import logoAA from '../../assets/logo-text.png';

function CardContent({ top = '27%', right = '11%', left = '11%' }) {
  const onContact = () => {
    const divElement = document.getElementById('footer');
    divElement.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="content-main row d-block" style={{ top, right, left }}>
      <div className="content-box col-lg-6 col-md-9 col-sm-12 float-end">
        <img src={logoAA} className="logo-text" alt="text-logo" />
        <h2 className="text-white content-dec">
          สนามบอลหญ้าเทียมขนาด 7 คน มีห้องคลับเฮาน์ติดแอร์ไว้สำหรับผู้ติดตาม
          มีเครื่องดื่มและอาหาร พร้อมบริการ
        </h2>
        <div className="button-box col-lg-12 col-md-12 col-sm-12 float-end">
          <button
            onClick={onContact}
            type="button"
            className="btn btn-outline-light bt-outline-white bt-main-outline"
          >
            ติดต่อสอบถาม
          </button>

          <Link to={'/all-stadium'}>
            <button className="btn btn-danger bt-main">จองสนาม</button>
          </Link>
        </div>
      </div>
    </div>
  );
}
export default CardContent;
