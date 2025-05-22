import { use, useState } from 'react';
import { FaHeart, FaPhone, FaRegHeart } from 'react-icons/fa';
import { Link, useLoaderData } from 'react-router';
import { AuthContext } from '../context/AuthContext';
import { toast } from 'react-hot-toast';

const RoommateDetails = () => {
    const roommateData = useLoaderData()
    const {user} = use(AuthContext);
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
        likes,
    } = roommateData;

    const [liked, setLiked] = useState(false);
    const [likeCount, setLikeCount] = useState(parseInt(likes));

    // Prevent user from liking their own post
    const isOwnPost = user && user.email === email;

    const handleLike = async () => {
        if (isOwnPost) {
            alert("You can't like your own post");
            return;
        }
        try {
            const response = await fetch(`http://localhost:3000/roommates/${roommateData._id}/like`, {
                method: 'PATCH',
            });
            if (response.ok) {
                const data = await response.json();
                setLiked(true);
                setLikeCount(data.likes);
                // Remove setTimeout: keep liked true so contact details stay expanded
            } else {
                const errorText = await response.text();
                toast.error('Failed to update like count.');
                console.error('Failed to update like count:', response.status, errorText);
            }
        } catch (e) {
            toast.error('An error occurred while updating like count.');
            console.error('An error occurred while updating like count:', e);
        }
    };

    return (
        <div className="max-w-4xl mx-auto px-4 py-8 mt-16">
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
                <div className="flex items-center gap-4">
                    <img
                        src="https://i.pravatar.cc/100"
                        alt="User"
                        className="w-12 h-12 rounded-full border-2 border-secondary shadow-sm hover:scale-105 transition-transform duration-200 bg-white"
                    />
                    <div className="flex flex-col">
                        <span className="font-semibold text-primary text-base flex items-center gap-1">
                            {userName}
                            <span className="inline-block bg-secondary/20 text-secondary text-xs px-2 py-0.5 rounded-full ml-1">Owner</span>
                        </span>
                        <span className="text-xs text-accent italic tracking-wide">{email}</span>
                    </div>
                </div>

                {/* Like Button */}
                <button
                    onClick={handleLike}
                    className={`flex items-center gap-1 text-lg px-3 py-1 rounded-full shadow border border-secondary/30 bg-gradient-to-r from-secondary/10 via-white to-primary/10 font-semibold transition-all duration-200 hover:scale-105 hover:shadow-md focus:outline-none focus:ring-2 focus:ring-secondary/30 ${liked ? 'text-secondary bg-secondary/10 border-secondary' : 'text-accent'}`}
                    title={isOwnPost ? "You can't like your own post" : liked ? "Already liked" : "Like to view contact info"}
                >
                    {liked ? <FaHeart className="animate-pulse" /> : <FaRegHeart />}
                    <span className="ml-1 text-sm font-medium hidden sm:inline">{liked ? 'Liked' : 'View Contact Info'}</span>
                </button>
            </div>

            {(liked && !isOwnPost) && (
                <div className="mt-6 bg-gradient-to-br from-secondary/10 via-base-100 to-primary/10 p-6 rounded-2xl border border-secondary/30 text-accent shadow-lg animate-fade-in">
                    <p className="font-bold text-center text-xl text-primary mb-3 tracking-wide">Contact Details</p>
                    <div className='flex flex-col sm:flex-row justify-center items-center gap-6'>
                        <p className="flex items-center gap-2 text-lg font-medium bg-secondary/10 px-4 py-2 rounded-full shadow-sm"><FaPhone className='text-secondary' /> {phone}</p>
                        {/* Chat Link */}
                        <Link to={chatLink}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="btn btn-secondary btn-outline text-base px-6 py-2 rounded-full shadow hover:bg-secondary/20 transition-all duration-200"
                        >Chat Now!</Link>
                    </div>
                </div>
            )}


        </div>
    );
};

export default RoommateDetails;
