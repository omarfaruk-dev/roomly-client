import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { FaStar } from "react-icons/fa";
import { Slide } from "react-awesome-reveal";

const testimonials = [
    {
        name: "Frank Klin",
        role: "Doctor",
        photo: "https://i.pravatar.cc/100?img=11",
        quote: "Roomly made it incredibly easy to find a trustworthy roommate in a new city. I found someone within a few days, and we’re now good friends!",
        rating: 5,
    },
    {
        name: "Linda Ann",
        role: "Software Engineer",
        photo: "https://i.pravatar.cc/100?img=12",
        quote: "As a busy professional, I didn’t have time to search endlessly. Roomly's smart filters and verified listings helped me find a place quickly and safely.",
        rating: 4,
    },
    {
        name: "David Gueta",
        role: "Student",
        photo: "https://i.pravatar.cc/100?img=13",
        quote: "I moved to CA University and was nervous about living with strangers. Thanks to Roomly, I found a student roommate who shares my schedule and values.",
        rating: 5,
    },
    {
        name: "Soda Lanna",
        role: "Apartment Owner",
        photo: "https://i.pravatar.cc/100?img=14",
        quote: "I had an extra room I wanted to rent out, but was worried about who to trust. Roomly helped me list my space and screen potential roommates easily.",
        rating: 4,
    },
    {
        name: "John Mark",
        role: "Designer",
        photo: "https://i.pravatar.cc/100?img=15",
        quote: "I was tired of Facebook groups and sketchy listings. Roomly felt safe, simple, and the people felt real. Found my roommate within 48 hours!",
        rating: 5,
    },
    {
        name: "Linda Anand",
        role: "Doctor",
        photo: "https://i.pravatar.cc/100?img=16",
        quote: "I’ve listed 3 different rooms over the past year using Roomly. Every time, I found respectful, responsible tenants. Highly recommended!",
        rating: 4,
    },
    {
        name: "David Wilson",
        role: "Artist",
        photo: "https://i.pravatar.cc/100?img=17",
        quote: "As someone relocating for work, I was stressed about housing. Roomly’s verified listings gave me confidence — and the roommate I found was a perfect match.",
        rating: 5,
    },
    {
        name: " Jessica Lee",
        role: "Medical Student",
        photo: "https://i.pravatar.cc/100?img=18",
        quote: "Being a female student, safety was my top concern. Roomly allowed me to filter and connect only with female roommates — total peace of mind!",
        rating: 4,
    },
];

const TestimonialSlider = () => {
    return (
        <div className="py-10 md:py-20 lg:py-30 max-w-7xl mx-auto px-4 text-center">
            <Slide direction="left" delay={300} duration={1000}>
                <h2 className="text-3xl text-primary md:text-4xl font-bold mb-2">
                    What Our <span className="text-secondary">Customers Are Saying</span>
                </h2>
            </Slide>
            <Slide direction="right" delay={300} duration={1000}>
                <p className="text-accent mb-12 max-w-2xl mx-auto">
                    Hear directly from our happy users who found the perfect room or roommate through Roomly.
                    Real stories, real matches — feedback
                </p>
            </Slide>


            <Swiper
                modules={[Navigation, Pagination, Autoplay]}
                spaceBetween={30}
                slidesPerView={1}
                loop={true}
                autoplay={{ delay: 2500, disableOnInteraction: false }}
                pagination={{ clickable: true }}
                breakpoints={{
                    768: { slidesPerView: 2 },
                    1024: { slidesPerView: 3 },
                }}
                className="max-w-6xl mx-auto"
            >
                {testimonials.map((item, index) => (
                    <SwiperSlide key={index}>
                        <div className="h-[400px] bg-gradient-to-br from-secondary/30 via-base-100 to-secondary/10 p-6 rounded-md overflow-hidden shadow-xl flex flex-col justify-between transition-transform hover:scale-101 hover:rounded-md">
                            <div className="flex justify-center">
                                <img
                                    src={item.photo}
                                    alt={item.name}
                                    className="w-20 h-20 rounded-full border-4 border-secondary shadow-md"
                                />
                            </div>
                            <div>
                                <h3 className="mt-4 text-xl font-semibold">{item.name}</h3>
                                <p className="text-secondary font-medium">{item.role}</p>

                                <div className="flex justify-center mt-2 mb-2">
                                    {Array.from({ length: item.rating }).map((_, i) => (
                                        <FaStar key={i} className="text-yellow-400" />
                                    ))}
                                </div>

                                <p className="italic text-accent text-sm px-2">“{item.quote}”</p>
                            </div>
                            <div className="flex justify-center mt-4">{item.social}</div>
                        </div>
                    </SwiperSlide>
                ))}
            </Swiper>
        </div>
    );
};

export default TestimonialSlider;
