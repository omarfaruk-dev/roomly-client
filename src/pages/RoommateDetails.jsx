import { use, useState } from 'react';
import { FaHeart, FaList, FaPhone, FaRegHeart } from 'react-icons/fa';
import { Link, useLoaderData } from 'react-router';
import { AuthContext } from '../context/AuthContext';
import { toast } from 'react-hot-toast';
import Swal from 'sweetalert2';

const RoommateDetails = () => {
    const roommateData = useLoaderData()
    const { user } = use(AuthContext);
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
            Swal.fire({
                icon: "error",
                title: "Oops...",
                text: 'You can not like your own post',
            });
            return;
        }
        try {
            const response = await fetch(`https://roomly-server.vercel.app/roommates/${roommateData._id}/like`, {
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
        <div className="max-w-5xl mx-auto px-4 py-8 mt-16">
            <title>Roomly | Roommate Details</title>
            {/* Like Count at Top */}
            <div className="flex items-center justify-between my-8">
                <Link to='/browse-listing' className='btn btn-secondary'><FaList /> View All</Link>
                <span className='bg-secondary/15 text-secondary text-lg rounded-3xl py-1 px-3'><span className='font-bold'>{likeCount}</span> people interested in</span>
            </div>

            {/* Room Photo */}
            <div className="mb-4 relative group overflow-hidden rounded">
                <img
                    src={roomPhoto}
                    alt="Room"
                    className="w-full h-100 object-cover rounded transition-transform duration-300 group-hover:scale-105 group-hover:brightness-90"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-secondary/40 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none rounded" />
            </div>

            {/* Title */}
            <h2 className="text-3xl font-bold text-primary mb-4 text-center md:text-left tracking-tight leading-tight">{title}</h2>
            <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4 mb-6">
                {/* Info Grid */}
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 w-full text-accent bg-secondary/5 rounded-md p-4 border border-secondary/10 shadow">
                    <div className="flex flex-col items-center">
                        <span className="font-semibold text-xs text-secondary/80 uppercase mb-1">Location</span>
                        <span className="text-primary font-medium">{location}</span>
                    </div>
                    <div className="flex flex-col items-center">
                        <span className="font-semibold text-xs text-secondary/80 uppercase mb-1">Rent</span>
                        <span className="text-primary font-medium">${amount}/mo</span>
                    </div>
                    <div className="flex flex-col items-center">
                        <span className="font-semibold text-xs text-secondary/80 uppercase mb-1">Room Type</span>
                        <span className="text-primary font-medium">{roomType}</span>
                    </div>
                    <div className="flex flex-col items-center">
                        <span className="font-semibold text-xs text-secondary/80 uppercase mb-1">Availability</span>
                        <span className={`font-medium px-2 py-0.5 rounded-full ${availability === 'available' ? 'bg-green-100 text-green-600' : 'bg-red-100 text-red-600'}`}>{availability}</span>
                    </div>
                </div>
            </div>

            {/* Preferences */}
            <div className="mb-6">
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
            <div className="my-6">
                <p className="font-medium text-accent mb-1">Description:</p>
                <p className="text-primary">{description}</p>
            </div>

            {/* User Info & Like Button */}
            <div className="flex items-center justify-between border-dashed border-t border-secondary/20 pt-4">
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
                    </div>
                </div>

                {/* Like Button */}
                <button
                    onClick={handleLike}
                    className={`flex items-center gap-1 text-lg px-3 py-1 rounded-full shadow border border-secondary/30 bg-gradient-to-r from-secondary/20 via-base-200 to-secondary/10 font-semibold transition-all duration-200 hover:scale-102 hover:shadow-md focus:outline-none focus:ring-1 focus:ring-secondary ${liked ? 'text-secondary bg-secondary/10 border-secondary' : 'text-accent'}`}
                    title={isOwnPost ? "You can't like your own post" : liked ? "Already liked" : "Like to view contact info"}
                >
                    {liked ? <FaHeart className="animate-pulse text-red-500" /> : <FaRegHeart />}
                    <span className="ml-1 text-sm font-medium hidden sm:inline">{liked ? 'Liked' : 'View Contact Info'}</span>
                </button>
            </div>

            {(liked && !isOwnPost) && (
                <div className="mt-10 flex justify-center">
                    <div className="w-full max-w-md bg-secondary/5 border border-secondary/20 rounded-md shadow p-8 flex flex-col items-center gap-6">
                        <h3 className="font-bold text-2xl text-primary mb-2 text-center tracking-tight">Contact Details</h3>
                        <div className="w-full flex flex-col gap-4">
                            <div className="flex items-center gap-3 text-base">
                                <span className="inline-flex items-center justify-center w-9 h-9 rounded-full bg-secondary/10 text-secondary mr-2"><FaPhone /></span>
                                <span className="font-medium text-accent tracking-wide">{phone}</span>
                            </div>
                            <div className="flex items-center gap-3 text-base">
                                <span className="inline-flex items-center justify-center w-9 h-9 rounded-full bg-secondary/10 text-secondary mr-2">
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5">
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25H4.5a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-.659 1.591l-7.5 7.5a2.25 2.25 0 01-3.182 0l-7.5-7.5A2.25 2.25 0 012.25 6.993V6.75" />
                                    </svg>
                                </span>
                                <span className="text-accent break-all">{email}</span>
                            </div>
                        </div>
                        <a
                            href={chatLink}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="btn btn-secondary btn-wide font-semibold rounded-full shadow-md hover:scale-105 hover:bg-secondary/90 transition-all duration-200 mt-2"
                        >
                            Chat Now
                        </a>
                    </div>
                </div>
            )}


        </div>
    );
};

export default RoommateDetails;
