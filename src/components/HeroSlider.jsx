import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import "swiper/css/parallax";
import { Navigation, Pagination, Autoplay } from 'swiper/modules';

import slider1 from '../assets/slider/1.jpg'    
import slider2 from '../assets/slider/2.jpg'    
import slider3 from '../assets/slider/3.jpg'    
import { Link } from 'react-router';

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
    <div className="mt-16 max-w-7xl mx-auto rounded-md h-[600px] shadow-xl overflow-hidden relative">
      <Swiper
        modules={[Navigation, Pagination, Autoplay]}
        pagination={{ clickable: true }}
        autoplay={{ delay: 5000 }}
        loop
        className="h-full swi hero-swiper"
      >
        {slides.map((slide) => (
          <SwiperSlide key={slide.id}>
            <div className="relative w-full h-full group">
              <img
                src={slide.image}
                alt={slide.title}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-103 group-hover:brightness-95"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-secondary/40 via-black/30 to-transparent opacity-90 group-hover:opacity-100 transition-opacity duration-700 flex flex-col justify-center items-center text-center px-4">
                <h2 className="text-white drop-shadow-lg text-2xl md:text-4xl lg:text-5xl font-extrabold mb-4 tracking-tight animate-fade-in-up">
                  {slide.title}
                </h2>
                <p className="text-white text-lg md:text-2xl mb-6 animate-fade-in-up delay-100">
                  {slide.subtitle}
                </p>
                <div className="flex gap-3 mt-2 animate-fade-in-up delay-200">
                  <Link to='/signup' className="btn btn-secondary btn-lg font-semibold shadow-md hover:scale-105 transition-transform duration-200">Get Started</Link>
                  <Link to='/browse-listing' className="btn btn-outline text-white btn-lg font-semibold shadow-md hover:bg-white/10 hover:text-white transition-all duration-200">Learn More</Link>
                </div>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
     
    </div>
  );
};

export default HeroSlider;
