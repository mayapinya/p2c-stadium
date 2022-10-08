import Footer from '../../layout/Footer/Footer';
import Header from '../../layout/header/Header';

import SliderCard from './SliderCard';

function HomeContainer() {
  return (
    <>
      <Header />
      <div className="container-home">
        <SliderCard />
      </div>
      <Footer />
    </>
  );
}
export default HomeContainer;
