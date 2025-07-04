import { use } from 'react';
import { FaArrowLeft, FaArrowRight, FaChevronDown, FaPlus } from 'react-icons/fa';
import { Link, useLoaderData, useNavigate } from 'react-router';
import Swal from 'sweetalert2';
import { AuthContext } from '../context/AuthContext';
import { Fade } from 'react-awesome-reveal';
import { GrUpdate } from 'react-icons/gr';

const UpdateRoommateInfo = () => {
    const allData = useLoaderData();
    const { _id, roomPhoto, title,
        location, amount, ['room-type']: roomType, availability, preferences,
        description, phone, chatLink, } = allData;

    const { user } = use(AuthContext);
    const navigate = useNavigate();

    const handleUpdatePost = (e) => {
        e.preventDefault();
        const form = e.target;
        const formData = new FormData(form);
        const updatePost = Object.fromEntries(formData.entries());

        // Get multiple checkbox values
        const preferences = formData.getAll('preferences');
        updatePost.preferences = preferences;


        //Update roommate info and send to db
        fetch(`https://roomly-server.vercel.app/roommates/${_id}`, {
            method: "PUT",
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(updatePost)
        })
            .then(res => res.json())
            .then(data => {
                if (data.modifiedCount) {
                    Swal.fire({
                        position: "center",
                        icon: "success",
                        title: "Post Updated successfully!",
                        showConfirmButton: false,
                        timer: 1500
                    });
                } else {
                    Swal.fire({
                        icon: "info",
                        title: "No Changes Detected",
                        text: "Please make a change before updating.",
                        confirmButtonText: "OK"
                    });
                }
            })
            .catch((err) => {
                console.error("Error Saving Roommate Data:", err);
                Swal.fire({
                    title: "Error!",
                    text: "Something went wrong!",
                    icon: "error",
                });
            })
    }

    return (
        <div className="max-w-7xl mx-auto px-4 py-10 md:py-20">
            {/* Top Bar: Back | Title | View All */}
            <div className='flex justify-between items-center py-5'>
                <button onClick={() => navigate(-1)} to='/' className="flex btn btn-secondary btn-outline btn-sm text-sm font-medium">
                    <FaArrowLeft /> Go Back
                </button>
                <Link to={`/roommate-details/${_id}`} className="flex btn btn-secondary btn-outline btn-sm text-sm font-medium">
                    View Update  <GrUpdate />
                </Link>
            </div>

            <Fade>
                <form
                    onSubmit={handleUpdatePost}
                    className="space-y-6 bg-base-200 shadow-md rounded-md p-6 border-2 border-secondary/30"
                >
                    <h2 className="text-center text-2xl text-primary md:text-3xl font-bold mb-2">
                        Update <span className="text-secondary">Room / Roommate</span>
                    </h2>
                    <p className="text-center text-accent mb-12 max-w-2xl mx-auto">
                        Edit your listing details below. All fields are required to ensure your post is up-to-date and visible to the right matches.
                    </p>
                    {/* Title */}
                    <div>
                        <label className="block text-sm font-medium text-primary mb-1">Title</label>
                        <input
                            type="text"
                            name="title"
                            defaultValue={title}
                            required
                            placeholder="Looking for a roommate in NYC"
                            className="input input-bordered w-full rounded-md focus:outline-none focus:ring-1 focus:ring-secondary"
                        />
                    </div>

                    {/* Location & Rent */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div>
                            <label className="block text-sm font-medium text-primary mb-1">Location</label>
                            <input
                                type="text"
                                name="location"
                                defaultValue={location}
                                placeholder="123 Main St, NY, US."
                                required
                                className="input input-bordered w-full rounded-md focus:outline-none focus:ring-1 focus:ring-secondary"
                            />
                        </div>
                        <div>
                            <label className="block text-sm font-medium text-primary mb-1">Rent Amount ($/mo)</label>
                            <input
                                type="number"
                                name="amount"
                                defaultValue={amount}
                                required
                                placeholder="e.g. 1200"
                                className="input input-bordered w-full rounded-md focus:outline-none focus:ring-1 focus:ring-secondary"
                            />
                        </div>
                    </div>

                    {/* Room Type & Lifestyle Preferences */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div>
                            <label className="block text-sm font-medium text-primary mb-1">Room Type</label>
                            <div className='relative'>
                                <select
                                    name='room-type'
                                    defaultValue={roomType}
                                    required
                                    className="input input-bordered w-full rounded-md focus:outline-none focus:ring-1 focus:ring-secondary">
                                    <option value="">Select Room Type</option>
                                    <option value="Single">Single</option>
                                    <option value="Shared">Shared</option>
                                    <option value="Studio">Studio</option>
                                </select>
                                <div className="absolute inset-y-0 right-3 flex items-center pointer-events-none text-accent">
                                    <FaChevronDown className="text-sm" />
                                </div>
                            </div>
                        </div>
                        {/* Availability */}
                        <div>
                            <label className="block text-sm font-medium text-primary mb-1">Availability</label>
                            <div className="relative">
                                <select
                                    name='availability'
                                    defaultValue={availability}
                                    required
                                    className="input input-bordered w-full rounded-md focus:outline-none focus:ring-1 focus:ring-secondary appearance-none pr-10">
                                    <option value="">Select Availability</option>
                                    <option value="available">Available</option>
                                    <option value="not-available">Not Available</option>
                                </select>
                                <div className="absolute inset-y-0 right-3 flex items-center pointer-events-none text-accent">
                                    <FaChevronDown className="text-sm" />
                                </div>
                            </div>
                        </div>
                    </div>
                    {/* lifestyle preferences */}
                    <div>
                        <label className="label">
                            <span className="label-text text-primary font-medium">Lifestyle Preferences</span>
                        </label>
                        <div className="flex flex-wrap gap-3">
                            {['Pets', 'Smoking', 'Night Owl', 'Early Riser'].map((item) => (
                                <label key={item} className="flex items-center gap-2 text-accent">
                                    <input
                                        name="preferences"
                                        type="checkbox"
                                        value={item}
                                        defaultChecked={preferences?.includes(item)}
                                        className="checkbox checkbox-sm checkbox-secondary"
                                    />
                                    <span>{item}</span>
                                </label>
                            ))}
                        </div>
                    </div>

                    {/* Description */}
                    <div>
                        <label className="block text-sm font-medium text-primary mb-1">Description</label>
                        <textarea
                            rows={10}
                            name="description"
                            defaultValue={description}
                            required
                            className="input input-bordered w-full h-30 rounded-md focus:outline-none focus:ring-1 focus:ring-secondary overflow-x-hidden overflow-y-auto whitespace-pre-wrap break-words"
                            placeholder="Write something about the room or preferences..."
                        ></textarea>

                    </div>
                    {/* Title */}
                    <div>
                        <label className="block text-sm font-medium text-primary mb-1">Room Photo URL</label>
                        <input
                            type="text"
                            name="roomPhoto"
                            defaultValue={roomPhoto}
                            required
                            placeholder="https://example.com/room.jpg"
                            className="input input-bordered w-full rounded-md focus:outline-none focus:ring-1 focus:ring-secondary"
                        />
                    </div>

                    {/* Contact Info */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div>
                            <label className="block text-sm font-medium text-primary mb-1">Phone No</label>
                            <input
                                type="text"
                                name="phone"
                                defaultValue={phone}
                                required
                                placeholder='+1 234 567 8900'
                                className="input input-bordered w-full rounded-md focus:outline-none focus:ring-1 focus:ring-secondary"
                            />
                        </div>
                        <div>
                            <label className="block text-sm font-medium text-primary mb-1">Social Chat <span className='text-xs italic'>(whatsapp/messenger/team)</span></label>
                            <input
                                type="text"
                                name="chatLink"
                                defaultValue={chatLink}
                                placeholder='wa.me/username'
                                className="input input-bordered w-full rounded-md focus:outline-none focus:ring-1 focus:ring-secondary"
                            />
                        </div>
                    </div>

                    {/* Read-Only User Info */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div>
                            <label className="block text-sm font-medium text-primary mb-1">User Name</label>
                            <input
                                type="text"
                                name="userName"
                                value={user?.displayName}
                                readOnly
                                className="input input-bordered w-full rounded-md focus:outline-none focus:ring-1 focus:ring-secondary"
                            />
                        </div>
                        <div>
                            <label className="block text-sm font-medium text-primary mb-1">User Email</label>
                            <input
                                type="email"
                                name="email"
                                value={user?.email}
                                readOnly
                                className="input input-bordered w-full rounded-md focus:outline-none focus:ring-1 focus:ring-secondary"
                            />
                        </div>
                    </div>
                    {/* Submit */}
                    <div className="text-center">
                        <button
                            type="submit"
                            className="btn btn-secondary text-base-100 px-6 py-2 rounded-md hover:bg-opacity-90 transition duration-300"
                        >
                            <FaPlus /> Update Post
                        </button>
                    </div>
                </form>
            </Fade>
        </div>
    );
};

export default UpdateRoommateInfo;
