
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { Navigation, Pagination, Autoplay } from 'swiper/modules';

import slider1 from '../assets/slider/1.jpg'    
import slider2 from '../assets/slider/2.jpg'    
import slider3 from '../assets/slider/3.jpg'    

const HeroSlider = () => {
  const slides = [
    {
      id: 1,
      image: slider1,
      title: 'Find Your Perfect Roommate',
      subtitle: 'Roomly connects you with people that match your lifestyle.',
    },
    {
      id: 2,
      image: slider2,
      title: 'Live Where You Belong',
      subtitle: 'Search by location, rent, and preferences.',
    },
    {
      id: 3,
      image: slider3,
      title: 'Start a New Chapter',
      subtitle: 'Safe, easy, and reliable roommate finder.',
    },
  ];

  return (
    <div className="w-full h-[400px] md:h-[500px]">
      <Swiper
        modules={[Navigation, Pagination, Autoplay]}
        navigation
        pagination={{ clickable: true }}
        autoplay={{ delay: 5000 }}
        dynamicBullets={true}
        loop
        className="h-full"
      >
        {slides.map((slide) => (
          <SwiperSlide key={slide.id}>
            <div className="relative w-full h-full">
              <img
                src={slide.image}
                alt={slide.title}
                className="w-full h-full object-cover"
              />
             <div className="absolute inset-0 bg-black/40 flex flex-col justify-center items-center text-center px-4">

                <h2 className="text-white text-2xl md:text-4xl lg:text-5xl font-bold">
                  {slide.title}
                </h2>
                <p className="text-gray-200 text-sm md:text-lg mt-2">
                  {slide.subtitle}
                </p>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default HeroSlider;
