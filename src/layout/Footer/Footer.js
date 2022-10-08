import PhoneSVG from '../../assets/phone.svg';
import LineSVG from '../../assets/line.svg';
import FacebookSVG from '../../assets/facebook.svg';

function Footer(children) {
  return (
    <>
      <footer className="bg-footer text-center text-lg-start">
        <div className="container p-4">
          <div className="row">
            <div className="col-lg-7 col-md-12 mb-4 mb-md-0">
              <h5 className="text-uppercase mb-3">ติดต่อเรา</h5>

              <p>22 ม.8 ตำบลบึงคำพร้อย อำเภอลำลูกกา จังหวัดปทุมธานี 12150</p>
              <p>
                <img className="me-2" src={PhoneSVG} alt="phone" />
                089-666-6929
              </p>
            </div>
            <div className="col-lg-4 col-md-12 mb-4 mb-md-0">
              <h5 className="text-uppercase mb-3">ช่องทางติดตาม</h5>
              <img className="me-4 icon-footer" src={LineSVG} alt="line" />
              <img className="icon-footer" src={FacebookSVG} alt="facebook" />
            </div>
          </div>
        </div>
        <div className="text-center p-3">
          Copyright © 2022 P2C Stadium. All Right Reserved
        </div>
      </footer>
    </>
  );
}

export default Footer;
