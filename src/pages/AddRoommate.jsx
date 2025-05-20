import React from 'react';
import { FaArrowLeft, FaArrowRight, FaChevronDown, FaPlus } from 'react-icons/fa';
import { Link } from 'react-router';
import Swal from 'sweetalert2';

const AddRoommateForm = () => {

    const handleSubmit = (e) => {
        e.preventDefault();
        const form = e.target;

        const formData = new FormData(form);
        const newPost = Object.fromEntries(formData.entries());


        // Get multiple checkbox values
        const preferences = formData.getAll('preferences');
        newPost.preferences = preferences;
        console.log(newPost);

        //send to db
        fetch('http://localhost:3000/roommates', {
            method: "POST",
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(newPost)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                if (data.insertedId) {
                    Swal.fire({
                        position: "center",
                        icon: "success",
                        title: "Post Submitted successfully!",
                        showConfirmButton: false,
                        timer: 1500
                    });
                }
            })
    }



    return (
        <div className="max-w-4xl mx-auto px-4 py-8">
            {/* Top Bar: Back | Title | View All */}
            <div className="flex items-center justify-between mb-6">

                <h2 className="text-xl md:text-3xl font-bold text-primary text-center flex-1">Add to Find Roommate</h2>

            </div>
            <div className='flex justify-between items-center py-5'>
                <Link to='/' className="flex btn btn-secondary btn-outline btn-sm text-sm font-medium">
                    <FaArrowLeft /> Go Back
                </Link>
                <Link to='/browse-roommate' className="flex btn btn-secondary btn-outline btn-sm text-sm font-medium">
                    View All <FaArrowRight />
                </Link>
            </div>

            <form
                onSubmit={handleSubmit}
                className="space-y-6 bg-base-100 shadow-md rounded p-6 border-2 border-secondary/30">
                {/* Title */}
                <div>
                    <label className="block text-sm font-medium text-primary mb-1">Title</label>
                    <input
                        type="text"
                        name="title"
                        required
                        placeholder="Looking for a roommate in NYC"
                        className="input input-bordered w-full rounded focus:outline-none focus:ring-2 focus:ring-secondary"
                    />
                </div>

                {/* Location & Rent */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                        <label className="block text-sm font-medium text-primary mb-1">Location</label>
                        <input
                            type="text"
                            name="location"
                            placeholder="123 Main St, NY, US."
                            required
                            className="input input-bordered w-full rounded focus:outline-none focus:ring-2 focus:ring-secondary"
                        />
                    </div>
                    <div>
                        <label className="block text-sm font-medium text-primary mb-1">Rent Amount ($/mo)</label>
                        <input
                            type="number"
                            name="amount"
                            required
                            placeholder="e.g. 1200"
                            className="input input-bordered w-full rounded focus:outline-none focus:ring-2 focus:ring-secondary"
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
                                className="input input-bordered w-full rounded focus:outline-none focus:ring-2 focus:ring-secondary">
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
                                required
                                className="input input-bordered w-full rounded focus:outline-none focus:ring-2 focus:ring-secondary appearance-none pr-10">
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
                                <input name="preferences" type="checkbox" value={item} className="checkbox checkbox-sm checkbox-secondary" />
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
                        required
                        className="input input-bordered w-full h-30 rounded focus:outline-none focus:ring-2 focus:ring-secondary overflow-x-hidden overflow-y-auto whitespace-pre-wrap break-words"
                        placeholder="Write something about the room or preferences..."
                    ></textarea>

                </div>
                {/* Title */}
                <div>
                    <label className="block text-sm font-medium text-primary mb-1">Room Photo URL</label>
                    <input
                        type="text"
                        name="roomPhoto"
                        required
                        placeholder="https://example.com/room.jpg"
                        className="input input-bordered w-full rounded focus:outline-none focus:ring-2 focus:ring-secondary"
                    />
                </div>

                {/* Contact Info */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                        <label className="block text-sm font-medium text-primary mb-1">Phone No</label>
                        <input
                            type="text"
                            name="phone"
                            placeholder='+1 234 567 8900'
                            className="input input-bordered w-full rounded focus:outline-none focus:ring-2 focus:ring-secondary"
                        />
                    </div>
                    <div>
                        <label className="block text-sm font-medium text-primary mb-1">Social Chat</label>
                        <input
                            type="text"
                            name="chatLink"
                            placeholder='wa.me/username'
                            className="input input-bordered w-full rounded focus:outline-none focus:ring-2 focus:ring-secondary"
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
                            // value="John Doe"
                            // readOnly
                            className="input input-bordered w-full rounded focus:outline-none focus:ring-2 focus:ring-secondary"
                        />
                    </div>
                    <div>
                        <label className="block text-sm font-medium text-primary mb-1">User Email</label>
                        <input
                            type="email"
                            name="email"
                            // value="john@example.com"
                            // readOnly
                            className="input input-bordered w-full rounded focus:outline-none focus:ring-2 focus:ring-secondary"
                        />
                    </div>
                </div>
                {/* Likes (hidden, default 0) */}
                <div className="md:col-span-2 hidden">
                    <label className="block font-medium mb-1">
                        Like Count (default: 0)
                    </label>
                    <input
                        type="number"
                        name="likes"
                        value={0}
                        readOnly
                        className="input-base cursor-not-allowed"
                    />
                </div>

                {/* Submit */}
                <div className="text-center">
                    <button
                        type="submit"
                        className="btn btn-secondary text-base-100 px-6 py-2 rounded-md hover:bg-opacity-90 transition duration-300"
                    >
                        <FaPlus /> Add Roommate
                    </button>
                </div>
            </form>
        </div>
    );
};

export default AddRoommateForm;
