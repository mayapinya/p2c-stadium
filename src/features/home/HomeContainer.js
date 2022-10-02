import Header from '../../layout/header/Header';

import SliderCard from './SliderCard';

function HomeContainer() {
  return (
    <>
      <Header />
      <div className="container-home">
        <SliderCard />
      </div>
    </>
  );
}
export default HomeContainer;
