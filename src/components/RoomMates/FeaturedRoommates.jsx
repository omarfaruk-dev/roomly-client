
import {  useLoaderData } from 'react-router';
import FeaturedCard from './FeaturedCard';

const FeaturedRoommates = () => {
  const roommates = useLoaderData();

  return (
    <div className="max-w-7xl mx-auto px-4 mt-20">
      <h1 className="text-2xl text-primary font-bold mb-6 text-center">Featured Roommate Listings</h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {roommates.map(mate => (
          <FeaturedCard key={mate._id} mate={mate} />
        ))}
      </div>
    </div>
  );
};

export default FeaturedRoommates;
