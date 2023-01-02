import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import { Autoplay, Pagination, Navigation, EffectCoverflow } from 'swiper';

export default function Home() {

  return (
    <div className='flex z-0'>
      <Swiper
        spaceBetween={30}
        centeredSlides={true}
        loop={true}
        autoplay={{
          delay: 2500,
          disableOnInteraction: true,
        }}
        pagination={{
          clickable: true,
        }}
        effect="coverflow"
        navigation={true}
        modules={[Autoplay, Pagination, Navigation, EffectCoverflow ]}
      >
        <SwiperSlide>
          <img src='./img/cover1.png' alt='cover1' />
        </SwiperSlide>
        <SwiperSlide>
          <img src='./img/cover2.png' alt='cover1' />
        </SwiperSlide>
        <SwiperSlide>
          <img src='./img/cover3.png' alt='cover1' />
        </SwiperSlide>
      </Swiper>
    </div>
  );
}
