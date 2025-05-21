
import { useLoaderData } from 'react-router';
import FeaturedCard from './FeaturedCard';

const FeaturedRoommates = () => {
  const roommates = useLoaderData();

  return (
    <div className="max-w-7xl mx-auto px-4 mt-20">
      <h2 className="text-center text-3xl text-primary md:text-4xl font-bold mb-2">
        Our Featured <span className="text-secondary">Room & Roommate</span>
      </h2>
      <p className="text-center text-accent mb-12 max-w-2xl mx-auto">
        Discover handpicked rooms and roommates trusted by our community.
        Each listing is verified for comfort, safety, and compatibility.
      </p>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {roommates.map(mate => (
          <FeaturedCard key={mate._id} mate={mate} />
        ))}
      </div>
    </div>
  );
};

export default FeaturedRoommates;
