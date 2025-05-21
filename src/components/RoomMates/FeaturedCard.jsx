import { FaPhoneAlt, FaFacebookMessenger, FaMapMarkerAlt } from "react-icons/fa";
import { Link } from "react-router";

const FeaturedCard = ({ mate }) => {
  const {
    _id,
    title,
    location,
    amount,
    roomPhoto,
    "room-type": roomType,
    availability,
    preferences,
    description,
    userName,
  } = mate;

  return (
   
    <div className="rounded overflow-hidden border border-secondary/15 bg-base-100 shadow-md hover:shadow-lg transition duration-300 flex flex-col">
      <img
        src={roomPhoto}
        alt={title}
        className="w-full h-60 object-cover transform transition-transform duration-500 ease-in-out hover:scale-105"
      />
      <div className="p-4 flex flex-col flex-1">
        <div className="flex justify-between items-start -gap-5">
          <h2 className="text-xl font-semibold text-primary">{title}</h2>
          <span className={`px-2 py-1 text-xs rounded-full font-medium ${availability === "not-available" ? "bg-red-100 text-red-600" : "bg-green-100 text-green-600"
            }`}>
            {availability === "not-available" ? "Not Available" : "Available"}
          </span>
        </div>

        <p className="text-accent my-2 flex items-center gap-1">
          <FaMapMarkerAlt className="text-secondary" />
          {location}
        </p>
        <p className="mb-2 text-sm text-accent">
          {description.length > 50 ? description.substring(0, 100) + "..." : description}
        </p>


        {/* <p className="mb-2 text-sm text-accent">{description.trim(0, 50)}</p> */}

        <div className="flex flex-wrap gap-2 mb-3">
          {preferences.map((pref, i) => (
            <span key={i} className="bg-secondary/10 text-secondary text-xs px-2 py-1 rounded">
              {pref}
            </span>
          ))}
        </div>

        <div className="flex justify-between items-center mt-auto">
          <div>
            <p className="font-medium text-lg text-secondary">${amount} <span className="text-sm text-accent">/mo</span></p>
            <p className="text-sm text-accent">{roomType} Room</p>
          </div>

          <div className="text-right">
            <p className="text-sm text-accent">Posted by: <span className="font-medium">{userName}</span></p>
          </div>
        </div>

        <div className="my-5 mx-auto">
          <Link className="btn btn-secondary text-base-100 " to={`/roommate-details/${_id}`}>See Details</Link>
        </div>
      </div>
    </div>

  );
};

export default FeaturedCard;
