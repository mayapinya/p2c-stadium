import Header from '../../layout/header/Header';

import Footer from '../../layout/Footer/Footer';
function AboutContainer() {
  return (
    <>
      <Header />
      <div className="about-main">
        <div className="container mx-auto h-100 main d-flex flex-column justify-content-center box-about">
          {/* <div className="container mx-auto main h-100  box-about"> */}
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
      <Footer />
    </>
  );
}
export default AboutContainer;
