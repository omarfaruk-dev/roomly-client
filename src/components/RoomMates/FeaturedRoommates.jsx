
import {  FaHome } from 'react-icons/fa';
import { FaLocationDot } from 'react-icons/fa6';
import { Link, useLoaderData } from 'react-router';

const FeaturedRoommates = () => {
  const roommates = useLoaderData();
  console.log(roommates);

  return (
    <section className="py-16 px-4 md:px-8 bg-white">
      <div className="max-w-7xl mx-auto px-4">
        <h2 className="text-4xl font-bold text-center text-primary mb-12">
          Featured Roommates
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {roommates.map((roommate, index) => (
            <div
              key={index}
              className="bg-base-100 border border-base-300 rounded-xl shadow-sm hover:shadow-md transition-all duration-300"
            >
              <div className="p-6">
                <div className="flex items-center gap-3 mb-4">
                  <FaHome className="text-secondary" />
                  <h3 className="text-xl font-semibold text-accent">{roommate.title}</h3>
                </div>

                <p className="mb-2 text-accent">
                  <span className="font-medium text-accent">Rent: $</span> {roommate.amount}/mo
                </p>

                <div className="flex items-center gap-2 mb-2 text-accent">
                  <FaLocationDot className="text-secondary" />
                  <span>{roommate.location}</span>
                </div>

                <p className="mb-2 text-accent">
                  <span className="font-medium text-accent">Availability:</span>
                  {roommate.availability}
                </p>

                <div className="mb-4">
                  <p className="font-medium text-accent mb-1">Lifestyle:</p>
                  <div className="flex flex-wrap gap-2">
                    {Array.isArray(roommate.preferences) && roommate.preferences.length > 0 ? (
                      roommate.preferences.map((pref, index) => (
                        <span
                          key={index}
                          className="bg-accent text-base-100  text-sm font-medium px-3 py-1 rounded-full"
                        >
                          {pref}
                        </span>
                      ))
                    ) : (
                      <span className="text-sm text-accent">No preferences listed</span>
                    )}
                  </div>
                </div>


                {/* <div className="mb-4">
                  <p className="font-medium text-accent mb-1">Lifestyle:</p>
                  {
                    roommate.preferences.map(pref => <span>{pref}</span>)
                  }
                </div> */}

                <Link to={`/roommate-details/${roommate._id}`} className="btn btn-secondary mt-4 w-full font-medium py-2 px-4 rounded-md transition">
                  See More
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturedRoommates;
