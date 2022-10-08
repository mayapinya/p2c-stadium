import logoAA from '../../assets/logo-text.png';

function CardContent({ top = '27%', right = '11%', left = '11%' }) {
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
            type="button"
            className="btn btn-outline-light bt-outline-white bt-main-outline"
          >
            ติดต่อสอบถาม
          </button>
          <button type="button" className="btn btn-danger bt-main">
            จองสนาม
          </button>
        </div>
      </div>
    </div>
  );
}
export default CardContent;
