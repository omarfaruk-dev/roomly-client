import { useState } from 'react';
import { FaHeart, FaRegHeart } from 'react-icons/fa';
import { useLoaderData } from 'react-router';

const RoommateDetails = () => {
    const roommateData = useLoaderData()
  const [liked, setLiked] = useState(false);
  const [likeCount, setLikeCount] = useState(0);

  const {
    title,
    location,
    amount,
    ['room-type']: roomType,
    availability,
    preferences,
    description,
    contact,
    userName,
    email
  } = roommateData;

  const handleLike = () => {
    if (!liked) {
      setLiked(true);
      setLikeCount(prev => prev + 1);
    }
  };

  return (
    <div className="max-w-4xl mx-auto px-4 py-8">
      {/* Like Count at Top */}
      <div className="flex justify-end text-sm mb-2">
        <span className='bg-secondary/15 text-secondary rounded-3xl p-y-1 px-2'>{likeCount} people interested in</span>
      </div>

      {/* Room Photo */}
      <div className="mb-4">
        <img
          src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c"
          alt="Room"
          className="w-full h-80 object-cover rounded-md"
        />
      </div>

      {/* Title */}
      <h2 className="text-2xl font-bold text-primary mb-3">{title}</h2>

      {/* Info Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-4 text-accent">
        <p className="font-medium">Location: <span className='text-primary'>{location}</span></p>
        <p className="font-medium">Rent: <span className='text-primary'>${amount}/mo</span></p>
        <p className="font-medium">Room Type: <span className='text-primary'>{roomType}</span></p>
        <p className="font-medium">Availability: <span className='text-primary'>{availability}</span></p>
      </div>

      {/* Preferences */}
      <div className="mb-4">
        <p className="font-medium text-accent mb-1">Lifestyle Preferences:</p>
        <div className="flex flex-wrap gap-2">
          {Array.isArray(preferences) && preferences.map((pref, index) => (
            <span
              key={index}
              className="bg-secondary text-white text-sm font-medium px-3 py-1 rounded-full"
            >
              {pref}
            </span>
          ))}
        </div>
      </div>

      {/* Description */}
      <div className="mb-4">
        <p className="font-medium text-accent mb-1">Description:</p>
        <p className="text-primary">{description}</p>
      </div>

      {/* User Info & Like Button */}
      <div className="flex items-center justify-between border-dashed border-t border-secondary/30 pt-4">
        {/* User Info */}
        <div className="flex items-center gap-3">
          <img
            src="https://i.pravatar.cc/100"
            alt="User"
            className="w-10 h-10 rounded-full border border-secondary"
          />
          <div>
            <p className="font-medium text-primary">{userName}</p>
            <p className="text-sm text-accent">{email}</p>
          </div>
        </div>

        {/* Like Button */}
        <button
          onClick={handleLike}
          className={`text-xl transition-all hover:scale-110 ${liked ? 'text-secondary' : 'text-accent'}`}
          disabled={liked}
        >
          {liked ? <FaHeart /> : <FaRegHeart />}
        </button>
      </div>

      {/* Show Contact After Like */}
      {liked && (
        <div className="mt-4 bg-base-100 p-3 rounded border border-secondary/30 text-accent">
          <p className="font-medium">Contact Number:</p>
          <p>{contact}</p>
        </div>
      )}
    </div>
  );
};

export default RoommateDetails;
