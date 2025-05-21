import { useState } from 'react';
import { FaHeart, FaPhone, FaRegHeart } from 'react-icons/fa';
import { Link, useLoaderData } from 'react-router';

const RoommateDetails = () => {
    const roommateData = useLoaderData()
    const [liked, setLiked] = useState(false);
    const [likeCount, setLikeCount] = useState(0);

    const {
        roomPhoto,
        title,
        location,
        amount,
        ['room-type']: roomType,
        availability,

        preferences,
        description,
        phone,
        userName,
        email,
        chatLink,
    } = roommateData;

    const handleLike = () => {
        if (!liked) {
            setLiked(true);
            setLikeCount(prev => prev + 1);
        }
    };

    return (
        <div className="max-w-4xl mx-auto px-4 py-8 mt-20">
            {/* Like Count at Top */}
            <div className="flex justify-end text-sm mb-2">
                <span className='bg-secondary/15 text-secondary rounded-3xl p-y-1 px-2'>{likeCount} people interested in</span>
            </div>

            {/* Room Photo */}
            <div className="mb-4">
                <img
                    src={roomPhoto}
                    alt="Room"
                    className="w-full h-80 object-cover rounded"
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
                            className="bg-secondary/15 text-secondary text-sm font-medium px-3 py-1 rounded-full"
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

            {liked && (
                <div className="mt-4 bg-base-100 p-4 rounded border border-secondary/30 text-accent space-y-2">
                    <p className="font-medium text-center text-lg">Contact Details</p>
                    <div className='flex justify-center items-center gap-5'>
                        <p className="flex items-center gap-2"><FaPhone className='text-secondary' /> {phone}</p>

                        {/* Chat Link */}
                        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2 mt-2">
                            <Link to={chatLink}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="btn btn-outline btn-secondary text-sm sm:w-auto w-full"
                            >Chat Now! </Link>
                        </div>
                    </div>
                </div>
            )}


        </div>
    );
};

export default RoommateDetails;
