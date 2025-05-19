import { Typewriter } from 'react-simple-typewriter';
import { Link } from 'react-router';
import bannerImage from '../assets/slider/3.jpg';

const Banner = () => {
    return (
        <div
            className="relative w-full h-[500px] md:h-[600px] bg-cover bg-center bg-no-repeat"
            style={{ backgroundImage: `url(${bannerImage})` }}
        >
            {/* Black overlay */}
            <div
                className="absolute inset-0 z-10"
                style={{ backgroundColor: 'rgba(0, 0, 0, 0.6)' }} // 50% transparent black
            ></div>

            {/* Content */}
            <div className="absolute inset-0 z-20 flex flex-col justify-center items-center text-center px-4">
                <h1 className="text-3xl md:text-5xl font-bold text-base-200 mb-4">
                    <Typewriter
                        words={[
                            'Find Your Perfect Roommate',
                            'Live Where You Belong',
                            'Start a New Chapter',
                        ]}
                        loop
                        cursor
                        cursorStyle="|"
                        typeSpeed={70}
                        deleteSpeed={50}
                        delaySpeed={2000}
                    />
                </h1>
                <p className="text-white text-lg md:text-xl mb-6">
                    Make it easier to find people who match your lifestyle.
                </p>
                <Link to="/browse-listings" className='btn btn-secondary'>
                    Browse Listing
                </Link>
            </div>
        </div>
    );
};

export default Banner;
