import Header from '../../layout/header/Header';
import bgImage from '../../assets/bg-home.png';
function AboutContainer() {
  return (
    <>
      <Header />
      <div className="bg-about">
        <img src={bgImage} className="" />
      </div>
      <div className="container mx-auto main h-100 d-flex flex-column justify-content-center box-about">
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
                  สนามกลางแจ้ง ขนาด 22x42 เมตร จำนวน 2 สนาม (ผู้เล่นทีมละ 7 คน)
                </p>
                <p>
                  วันจันทร์ - ศุกร์ (13:00 - 24:00 น. ราคา 600 บาท/ชั่วโมง หลัง
                  17:00 น. ราคา 900 บาท/ชั่วโมง)
                </p>
                <p>
                  วันเสาร์ - อาทิตย์ (08:00 - 24:00 น. ราคา 600 บาท/ชั่วโมง หลัง
                  17:00 น. ราคา 900 บาท/ชั่วโมง)
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
                <strong>This is the second item's accordion body.</strong> It is
                hidden by default, until the collapse plugin adds the
                appropriate classes that we use to style each element. These
                classes control the overall appearance, as well as the showing
                and hiding via CSS transitions. You can modify any of this with
                custom CSS or overriding our default variables. It's also worth
                noting that just about any HTML can go within the{' '}
                <code>.accordion-body</code>, though the transition does limit
                overflow.
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
                <strong>This is the third item's accordion body.</strong> It is
                hidden by default, until the collapse plugin adds the
                appropriate classes that we use to style each element. These
                classes control the overall appearance, as well as the showing
                and hiding via CSS transitions. You can modify any of this with
                custom CSS or overriding our default variables. It's also worth
                noting that just about any HTML can go within the{' '}
                <code>.accordion-body</code>, though the transition does limit
                overflow.
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
export default AboutContainer;
