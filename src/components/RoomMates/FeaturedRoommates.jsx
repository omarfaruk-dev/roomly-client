import { useLoaderData } from 'react-router';
import FeaturedCard from './FeaturedCard';
import { Typewriter } from 'react-simple-typewriter';
import { Slide } from 'react-awesome-reveal';

const FeaturedRoommates = () => {
  const roommates = useLoaderData();

  return (
    <div className="max-w-7xl mx-auto px-4 pt-20">
      <Slide direction="left" delay={300} duration={1000}>
        <h2 className="text-center text-3xl text-primary md:text-4xl font-bold mb-2">
          Our Featured <span className="text-secondary">
            <Typewriter
              words={[
                'Room',
                'Verified Listings',
                'Roommate',
                'Available Listings',
              ]}
              loop
              cursor
              cursorStyle="|"
              typeSpeed={70}
              deleteSpeed={50}
              delaySpeed={2000}
            />
          </span>
        </h2>
      </Slide>
      <Slide direction="right" delay={300} duration={1000}>
        <p className="text-center text-accent mb-12 max-w-2xl mx-auto">
          Discover handpicked rooms and roommates trusted by our community.
          Each listing is verified for comfort, safety, and compatibility.
        </p>
      </Slide>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {roommates.map(mate => (
          <Slide direction="up" delay={300} duration={1000} triggerOnce><FeaturedCard key={mate._id} mate={mate} /></Slide>

        ))}
      </div>
    </div>
  );
};

export default FeaturedRoommates;
