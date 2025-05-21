import { FaLocationDot } from 'react-icons/fa6';
import { Link, useLoaderData } from 'react-router';
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
    // <section className="py-16 px-4 md:px-8 bg-base-100">
    //   <div className="max-w-7xl mx-auto">
    //     <h2 className="text-4xl font-bold text-center text-primary mb-12">
    //       Featured Roommates
    //     </h2>

    //     <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
    //       {roommates.map((roommate) => (
    //         <div
    //           key={roommate._id}
    //           className="border rounded-xl overflow-hidden shadow hover:shadow-md transition"
    //         >
    //           {/* Room Image */}
    //           <div className="relative">
    //             <img
    //               src={roommate.roomPhoto}
    //               alt={roommate.title}
    //               className="w-full h-56 object-cover"
    //             />
    //             <span
    //               className={`absolute top-3 right-3 px-3 py-1 text-xs font-semibold rounded-full ${
    //                 roommate.availability === 'Available'
    //                   ? 'bg-green-100 text-green-600'
    //                   : 'bg-rose-100 text-rose-600'
    //               }`}
    //             >
    //               {roommate.availability === 'Available'
    //                 ? 'Available'
    //                 : 'Not Available'}
    //             </span>
    //           </div>

    //           {/* Room Info */}
    //           <div className="p-4">
    //             <h3 className="text-lg font-semibold text-gray-800 mb-1">
    //               {roommate.title}
    //             </h3>

    //             <div className="flex items-center text-sm text-gray-500 mb-1">
    //               <FaLocationDot className="text-secondary mr-1" />
    //               {roommate.location}
    //             </div>

    //             <p className="text-sm text-gray-600 mb-3">
    //               {roommate.description.length > 160
    //                 ? roommate.description.slice(0, 160) + '...'
    //                 : roommate.description}
    //             </p>

    //             {/* Preferences */}
    //             <div className="flex flex-wrap gap-2 mb-3">
    //               {roommate.preferences.map((tag, idx) => (
    //                 <span
    //                   key={idx}
    //                   className="text-xs px-3 py-1 bg-secondary/10 text-secondary rounded-full font-medium"
    //                 >
    //                   {tag}
    //                 </span>
    //               ))}
    //             </div>

    //             {/* Price & Poster Info */}
    //             <div className="text-sm text-gray-800 font-semibold mb-1">
    //               ${roommate.amount} <span className="font-normal text-gray-500">/mo</span>
    //             </div>
    //             <div className="text-sm text-gray-600 mb-2">
    //               {roommate["room-type"]} Room
    //             </div>

    //             <div className="text-sm text-gray-600 mb-4">
    //               Posted by: <span className="font-medium">{roommate.userName}</span>
    //               <br />
    //               <span className="text-xs text-gray-500">{roommate.email}</span>
    //             </div>

    //             {/* Actions */}
    //             <div className="flex justify-between gap-2">
    //               <a
    //                 href={`tel:${roommate.phone}`}
    //                 className="btn btn-primary btn-sm w-1/2"
    //               >
    //                 Call
    //               </a>
    //               <a
    //                 href={`https://${roommate.chatLink}`}
    //                 target="_blank"
    //                 rel="noopener noreferrer"
    //                 className="btn btn-outline btn-primary btn-sm w-1/2"
    //               >
    //                 Chat
    //               </a>
    //             </div>

    //             {/* Details Button */}
    //             <Link
    //               to={`/roommate-details/${roommate._id}`}
    //               className="btn btn-link text-sm mt-2 block text-center text-primary"
    //             >
    //               More Details
    //             </Link>
    //           </div>
    //         </div>
    //       ))}
    //     </div>
    //   </div>
    // </section>
  );
};

export default FeaturedRoommates;
