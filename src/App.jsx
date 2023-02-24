import { Swiper, SwiperSlide } from 'swiper/react';
import styled from 'styled-components';
import { Navigation } from 'swiper';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';

const Slide = styled.div`
  border: 5px solid tomato;
  height: 100vh;

`;

function App() {
  return (
    <div className="App">
      <Swiper
        direction="vertical"
        // navigation={true}
        slidesPerView={1}
        speed={1500}
        modules={[Navigation]}
        // loop={true} // infinity
      >
        <Slide>
          <SwiperSlide>
            <Header />
          </SwiperSlide>
        </Slide>
        <Slide>
          <SwiperSlide>
            <Footer />
          </SwiperSlide>
        </Slide>
      </Swiper>
    </div>
  );
}

export default App;
