import Footer from '../../layout/Footer/Footer';
import Header from '../../layout/header/Header';
import PhoneSVG from '../../assets/phone.svg';
import LineSVG from '../../assets/line.svg';
import FacebookSVG from '../../assets/facebook.svg';

import SliderCard from './SliderCard';
import CardContent from './CardContent';

function HomeContainer() {
  return (
    <>
      <Header />
      <div className="bg-black home-content-bg">
        <div className="container mx-auto h-100 main d-flex flex-column justify-content-center box-about">
          <CardContent />
        </div>
      </div>

      <div id="content-about" className="bg-black content-about">
        <div className="container mx-auto h-100 main d-flex flex-column justify-content-center box-about">
          <div className="accordion" id="accordionExample">
            <div className="accordion-item ">
              <h2 className="accordion-header" id="headingOne">
                <button
                  className="accordion-button"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#collapseOne"
                  aria-expanded="true"
                  aria-controls="collapseOne"
                >
                  อัตราค่าบริการ
                </button>
              </h2>
              <div
                id="collapseOne"
                className="accordion-collapse collapse show"
                aria-labelledby="headingOne"
                data-bs-parent="#accordionExample"
              >
                <div className="accordion-body">
                  <strong>สนามฟุตบอลหญ้าเทียมคุณภาพ 2 สนาม</strong>
                  <br />
                  <br />
                  <p>
                    สนามกลางแจ้ง ขนาด 22x42 เมตร จำนวน 2 สนาม (ผู้เล่นทีมละ 7
                    คน)
                  </p>
                  <p>
                    วันจันทร์ - ศุกร์ (13:00 - 24:00 น. ราคา 600 บาท/ชั่วโมง
                    หลัง 17:00 น. ราคา 900 บาท/ชั่วโมง)
                  </p>
                  <p>
                    วันเสาร์ - อาทิตย์ (08:00 - 24:00 น. ราคา 600 บาท/ชั่วโมง
                    หลัง 17:00 น. ราคา 900 บาท/ชั่วโมง)
                  </p>
                </div>
              </div>
            </div>
            <div className="accordion-item">
              <h2 className="accordion-header" id="headingTwo">
                <button
                  className="accordion-button collapsed"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#collapseTwo"
                  aria-expanded="false"
                  aria-controls="collapseTwo"
                >
                  สิ่งอำนวยความสะดวกในสนาม
                </button>
              </h2>
              <div
                id="collapseTwo"
                className="accordion-collapse collapse"
                aria-labelledby="headingTwo"
                data-bs-parent="#accordionExample"
              >
                <div className="accordion-body">
                  มีเครื่องดื่มและอาหาร ห้องน้ำ และ Wifi พร้อมให้บริการ
                </div>
              </div>
            </div>
            <div className="accordion-item">
              <h2 className="accordion-header" id="headingThree">
                <button
                  className="accordion-button collapsed"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#collapseThree"
                  aria-expanded="false"
                  aria-controls="collapseThree"
                >
                  บริการอื่นๆ
                </button>
              </h2>
              <div
                id="collapseThree"
                className="accordion-collapse collapse"
                aria-labelledby="headingThree"
                data-bs-parent="#accordionExample"
              >
                <div className="accordion-body">
                  มีบริการ รับจัดงานเลี้ยง สังสรรค์ และ ศูนย์ฝึกซ้อมฟุตบอล
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <footer
        id="footer"
        className="bg-footer text-center text-lg-start home-footer"
      >
        <div className="container p-4 d-flex justify-content-center align-items-center h-100 ">
          <div className="row text-center home-box-footer">
            <div className="col-12 ">
              <h5 className="text-uppercase fs-1">ติดต่อเรา</h5>
              <p className="text-uppercase fs-4">
                22 ม.8 ตำบลบึงคำพร้อย อำเภอลำลูกกา จังหวัดปทุมธานี 12150
              </p>
              <p className="fs-4">
                <img className="me-2" src={PhoneSVG} alt="phone" />
                089-666-6929
              </p>
            </div>
            <div className="col-12">
              <h5 className="text-uppercase mb-3 fs-4">ช่องทางติดตาม</h5>
              <img className="me-4 icon-footer" src={LineSVG} alt="line" />
              <img className="icon-footer" src={FacebookSVG} alt="facebook" />
            </div>
            <div className="col-12">
              <div className="text-center p-3 fs-5">
                Copyright © 2022 P2C Stadium. All Right Reserved
              </div>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}
export default HomeContainer;
