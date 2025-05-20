
import { useState } from 'react';
import { AiFillHeart, AiOutlineHeart } from 'react-icons/ai';
import { FaDollarSign, FaHome } from 'react-icons/fa';
import { FaLocationDot } from 'react-icons/fa6';
import { Link, useLoaderData } from 'react-router';

const FeaturedRoommates = () => {
  const roommates = useLoaderData();
  console.log(roommates);
   const [liked, setLiked] = useState(false);
   const handleLikeToggle = () => {
    setLiked(!liked);
  }
  return (
    // <section className="py-16 px-4 md:px-8 bg-white">
    //   <div className="max-w-7xl mx-auto px-4">
    //     <h2 className="text-4xl font-bold text-center text-primary mb-12">
    //       Featured Roommates
    //     </h2>

    //     <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
    //       {roommates.map((roommate, index) => (
    //         <div
    //           key={index}
    //           className="bg-base-100 border border-base-300 rounded-xl shadow-sm hover:shadow-md transition-all duration-300"
    //         >
    //           <div className="p-6">
    //             <div className="flex items-center gap-3 mb-4">
    //               <FaHome className="text-secondary" />
    //               <h3 className="text-xl font-semibold text-accent">{roommate.title}</h3>
    //             </div>

    //             <p className="mb-2 text-accent">
    //               <span className="font-medium text-accent">Rent: $</span> {roommate.amount}/mo
    //             </p>

    //             <div className="flex items-center gap-2 mb-2 text-accent">
    //               <FaLocationDot className="text-secondary" />
    //               <span>{roommate.location}</span>
    //             </div>

    //             <p className="mb-2 text-accent">
    //               <span className="font-medium text-accent">Availability:</span>
    //               {roommate.availability}
    //             </p>

    //             <div className="mb-4">
    //               <p className="font-medium text-accent mb-1">Lifestyle:</p>
    //               <div className="flex flex-wrap gap-2">
    //                 {Array.isArray(roommate.preferences) && roommate.preferences.length > 0 ? (
    //                   roommate.preferences.map((pref, index) => (
    //                     <span
    //                       key={index}
    //                       className="bg-accent text-base-100  text-sm font-medium px-3 py-1 rounded-full"
    //                     >
    //                       {pref}
    //                     </span>
    //                   ))
    //                 ) : (
    //                   <span className="text-sm text-accent">No preferences listed</span>
    //                 )}
    //               </div>
    //             </div>

    //             <Link to={`/roommate-details/${roommate._id}`} className="btn btn-secondary mt-4 w-full font-medium py-2 px-4 rounded-md transition">
    //               See More
    //             </Link>
    //           </div>
    //         </div>
    //       ))}
    //     </div>
    //   </div>
    // </section>
    <section className="py-16 px-4 md:px-8 bg-white">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-4xl font-bold text-center text-primary mb-12">
          Featured Roommates
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {roommates.map((roommate, index) => (
            <div
              key={index}
              className="bg-base-100 border border-base-300 rounded shadow hover:shadow-lg transition duration-300 overflow-hidden"
            >
              {/* Room Image with Heart Button */}
              <div className="relative h-56 w-full overflow-hidden">
                <img
                  src={roommate.roomPhoto} // optional dynamic image
                  alt="Room"
                  className="w-full h-full object-cover transition-transform duration-500 ease-in-out hover:scale-105"
                />
                <button
                  onClick={handleLikeToggle}
                  className="absolute top-3 right-3 bg-white rounded-full p-2 text-secondary hover:text-error shadow-md"
                >
                  {liked ? <AiFillHeart className="text-xl text-error" /> : <AiOutlineHeart className="text-xl" />}
                </button>
              </div>

              {/* Content */}
              <div className="p-5">
                <h3 className="text-xl text-primary font-semibold mb-3">{roommate.title}</h3>

                <p className="text-accent text-lg font-semibold mb-1 flex items-center">
                   <FaDollarSign className='text-secondary'/> {roommate.amount}/mo
                </p>
                <div className="flex items-center gap-2 text-accent my-2">
                  <FaLocationDot className="text-secondary" />
                  <span>{roommate.location}</span>
                </div>
                <p className="text-accent mb-1">
                  <span className="font-medium">Availability:</span> {roommate.availability}
                </p>

                {/* Lifestyle Preferences */}
                <div className="mt-3 mb-4">
                  <p className="font-medium text-accent mb-1">Lifestyle:</p>
                  <div className="flex flex-wrap gap-2">
                    {Array.isArray(roommate.preferences) && roommate.preferences.length > 0 ? (
                      roommate.preferences.map((pref, i) => (
                        <span
                          key={i}
                          className="bg-secondary/15 text-secondary text-xs font-medium px-3 py-1 rounded-full"
                        >
                          {pref}
                        </span>
                      ))
                    ) : (
                      <span className="text-sm text-accent">No preferences listed</span>
                    )}
                  </div>
                </div>

                <Link
                  to={`/roommate-details/${roommate._id}`}
                  className="btn btn-secondary w-full font-medium py-2 mt-3 rounded-md transition"
                >
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
