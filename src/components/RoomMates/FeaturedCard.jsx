import { FaMapMarkerAlt } from "react-icons/fa";
import { Link } from "react-router";

const FeaturedCard = ({ mate }) => {
  const {
    _id,
    title,
    location,
    amount,
    roomPhoto,
    availability,
    preferences,
    userName,
  } = mate;

  return (
    <div className="rounded-md overflow-hidden border-2 border-secondary/20 bg-base-200 shadow-md hover:shadow-lg transition duration-300 flex flex-col">
      <div className="relative group overflow-hidden">
        <img
          src={roomPhoto}
          alt={title}
          className="w-full h-44 object-cover transform transition-transform duration-500 ease-in-out group-hover:scale-105 group-hover:brightness-90"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-secondary/40 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />
        <span className={`absolute top-3 right-3 px-2 py-1 text-xs rounded-full font-medium shadow-md ${availability === "not-available" ? "bg-red-100 text-red-600" : "bg-green-100 text-green-600"}`}>
          {availability === "not-available" ? "Not Available" : "Available"}
        </span>
      </div>
      <div className="p-4 flex flex-col flex-1">
        <h2 className="text-xl font-semibold text-primary w-full mb-2">{title}</h2>
        <p className="text-accent my-2 flex items-center gap-1">
          <FaMapMarkerAlt className="text-secondary" />
          {location}
        </p>

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
          </div>

          <div className="text-right">
            <p className="text-sm text-accent">Posted by: <span className="font-medium">{userName}</span></p>
          </div>
        </div>

        <div className="my-5 mx-auto">
          <Link className="btn btn-secondary text-white " to={`/roommate-details/${_id}`}>See Details</Link>
        </div>
      </div>
    </div>

  );
};

export default FeaturedCard;
