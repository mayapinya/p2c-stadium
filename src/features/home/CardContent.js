import logoAA from '../../assets/logo-text.png';

function CardContent({ top = '27%', right = '11%', left = '11%' }) {
  return (
    <div className="content-main" style={{ top, right, left }}>
      <div className="content-box">
        <img src={logoAA} className="logo-text" alt="text-logo" />
        <h2 className="text-white content-dec">สนามบอลหญ้าเทียมขนาด 7 คน</h2>
        <h2 className="text-white content-dec">
          มีห้องคลับเฮาน์ติดแอร์ไว้สำหรับผู้ติดตาม
        </h2>
        <h2 className="text-white content-dec">
          มีเครื่องดื่มและอาหาร พร้อมบริการ
        </h2>
        <div className="button-box">
          <button
            type="button"
            className="btn btn-outline-light bt-outline-white bt-main-outline"
          >
            ติดต่อสอบถาม
          </button>
          <button type="button" className="btn btn-danger bt-main ms-4">
            จองสนาม
          </button>
        </div>
      </div>
    </div>
  );
}
export default CardContent;
