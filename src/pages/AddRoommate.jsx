import React from 'react';
import { FaChevronDown } from 'react-icons/fa';

const AddRoommateForm = () => {




    
    return (
        <div className="max-w-4xl mx-auto px-4 py-8">
            {/* Top Bar: Back | Title | View All */}
            <div className="flex items-center justify-between mb-6">
                <button className="text-sm text-primary font-medium">
                    ← Back
                </button>
                <h2 className="text-xl md:text-2xl font-bold text-primary text-center flex-1">Add to Find Roommate</h2>
                <button className="text-sm text-primary font-medium">
                    View All
                </button>
            </div>

            <form className="space-y-6 bg-base-100 shadow-md rounded-xl p-6 border border-accent">
                {/* Title */}
                <div>
                    <label className="block text-sm font-medium text-primary mb-1">Title</label>
                    <input
                        type="text"
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
                            className="input input-bordered w-full rounded focus:outline-none focus:ring-2 focus:ring-secondary"
                        />
                    </div>
                    <div>
                        <label className="block text-sm font-medium text-primary mb-1">Rent Amount ($/mo)</label>
                        <input
                            type="number"
                            className="input input-bordered w-full rounded focus:outline-none focus:ring-2 focus:ring-secondary"
                        />
                    </div>
                </div>

                {/* Room Type & Lifestyle Preferences */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                        <label className="block text-sm font-medium text-primary mb-1">Room Type</label>
                        <select className="input input-bordered w-full rounded focus:outline-none focus:ring-2 focus:ring-secondary">
                            <option value="">Select</option>
                            <option value="Single">Single</option>
                            <option value="Shared">Shared</option>
                            <option value="Studio">Studio</option>
                        </select>
                    </div>
                    <div>
                        <label className="block text-sm font-medium text-primary mb-1">Lifestyle Preferences</label>
                        <select className="input input-bordered w-full rounded focus:outline-none focus:ring-2 focus:ring-secondary">
                            <option value="">Select</option>
                            <option value="Single">Pets</option>
                            <option value="Shared">Smoking</option>
                            <option value="Studio">Night OWl</option>
                            <option value="Studio">Early Bird</option>
                        </select>
                    </div>
                </div>
                {/* Availability */}
                <div>
                    <label className="block text-sm font-medium text-primary mb-1">Availability</label>
                    <div className="relative">
                        <select className="input input-bordered w-full rounded focus:outline-none focus:ring-2 focus:ring-secondary appearance-none pr-10">
                            <option value="available">Available</option>
                            <option value="not-available">Not Available</option>
                        </select>
                        <div className="absolute inset-y-0 right-3 flex items-center pointer-events-none text-accent">
                            <FaChevronDown className="text-sm" />
                        </div>
                    </div>
                </div>

                {/* Description */}
                <div>
                    <label className="block text-sm font-medium text-primary mb-1">Description</label>
                    <textarea
                        rows={10}
                        className="input input-bordered w-full h-30 rounded focus:outline-none focus:ring-2 focus:ring-secondary"
                        placeholder="Write something about the room or preferences..."
                    ></textarea>
                </div>

                {/* Contact Info */}
                <div>
                    <label className="block text-sm font-medium text-primary mb-1">Contact Info</label>
                    <input
                        type="text"
                        className="input input-bordered w-full rounded focus:outline-none focus:ring-2 focus:ring-secondary"
                        placeholder="Phone number, social link etc."
                    />
                </div>

                {/* Read-Only User Info */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                        <label className="block text-sm font-medium text-primary mb-1">User Name</label>
                        <input
                            type="text"
                            value="John Doe"
                            readOnly
                            className="w-full border border-accent rounded-md p-2 text-accent bg-gray-100"
                        />
                    </div>
                    <div>
                        <label className="block text-sm font-medium text-primary mb-1">User Email</label>
                        <input
                            type="email"
                            value="john@example.com"
                            readOnly
                            className="w-full border border-accent rounded-md p-2 text-accent bg-gray-100"
                        />
                    </div>
                </div>

                {/* Submit */}
                <div className="text-right">
                    <button
                        type="submit"
                        className="bg-primary text-white px-6 py-2 rounded-md hover:bg-opacity-90 transition duration-300"
                    >
                        Add Roommate
                    </button>
                </div>
            </form>
        </div>
    );
};

export default AddRoommateForm;
