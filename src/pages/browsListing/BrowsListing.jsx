import React, { useState, useMemo } from "react";
import { Fade } from "react-awesome-reveal";
import { useLoaderData, Link } from "react-router";
import HowItWorks from "../../components/HowItWorks";

const BrowseListing = () => {
    const listings = useLoaderData();
    const [sortOrder, setSortOrder] = useState('asc');
    const [availability, setAvailability] = useState('all');
    const [search, setSearch] = useState('');
    const filteredListings = useMemo(() => {
        let filtered = listings;
        if (availability !== 'all') {
            filtered = filtered.filter(item => item.availability === availability);
        }
        if (search.trim() !== '') {
            const s = search.trim().toLowerCase();
            filtered = filtered.filter(item =>
                (item.title && item.title.toLowerCase().includes(s)) ||
                (item.location && item.location.toLowerCase().includes(s))
            );
        }
        return filtered;
    }, [listings, availability, search]);
    const sortedListings = useMemo(() => {
        return [...filteredListings].sort((a, b) => {
            if (sortOrder === 'asc') return a.amount - b.amount;
            return b.amount - a.amount;
        });
    }, [filteredListings, sortOrder]);

    return (
        <div className="max-w-7xl mx-auto mt-16 px-4 py-20">
            <title>Brows Roommate Listing | Roomly</title>
            <Fade>
                <h2 className="text-center text-2xl text-primary md:text-3xl font-bold mb-10">
                    Browse <span className="text-secondary">Room/Roommate</span> Listings
                </h2>
            </Fade>
            <div className="flex flex-col sm:flex-row justify-between mb-4 gap-2 sm:gap-4">
                {/* Responsive search input with button */}
                <div className="w-full sm:w-auto flex flex-col sm:flex-row flex-1 gap-2 sm:gap-4 items-center justify-center mb-2 sm:mb-0">
                    <form className="w-full flex flex-row gap-2" onSubmit={e => e.preventDefault()}>
                        <input
                            type="text"
                            className="input input-bordered input-sm w-full max-w-xs bg-base-100 text-primary"
                            placeholder="Search by title or location..."
                            value={search}
                            onChange={e => setSearch(e.target.value)}
                        />
                        <button type="button" className="btn btn-secondary btn-sm text-white px-4">Search</button>
                    </form>
                </div>
                <div className="flex items-center">
                    <label className="mr-2 font-semibold text-primary">Availability:</label>
                    <select
                        className="select select-bordered select-sm bg-base-100 text-primary"
                        value={availability}
                        onChange={e => setAvailability(e.target.value)}
                    >
                        <option value="all">All</option>
                        <option value="available">Available</option>
                        <option value="not-available">Not Available</option>
                    </select>
                </div>
                <div className="flex items-center whitespace-nowrap">
                    <label className="mr-2 font-semibold text-primary">Sort by Price:</label>
                    <select
                        className="select select-bordered select-sm bg-base-100 text-primary"
                        value={sortOrder}
                        onChange={e => setSortOrder(e.target.value)}
                    >
                        <option value="asc">Low to High</option>
                        <option value="desc">High to Low</option>
                    </select>
                </div>
            </div>
            <div className="overflow-x-auto shadow-md rounded-md border border-secondary/20">
                {sortedListings.length === 0 ? (
                    <div className="flex flex-col items-center justify-center py-16">
                        <h3 className="text-2xl md:text-3xl font-bold text-primary mt-8 mb-2 text-center">No data found with this keyword "{search}"</h3>
                    </div>
                ) : (
                    <table className="min-w-full bg-base-200 text-left text-sm">
                        <thead className="bg-secondary/10 text-secondary uppercase text-xs tracking-wider">
                            <tr>
                                <th className="px-4 py-3 border-b border-secondary/20">Photo</th>
                                <th className="px-4 py-3 border-b border-secondary/20">Title</th>
                                <th className="px-4 py-3 border-b border-secondary/20">Location</th>
                                <th className="px-4 py-3 border-b border-secondary/20">Rent Amount</th>
                                <th className="px-4 py-3 border-b border-secondary/20 text-center">Actions</th>
                            </tr>
                        </thead>
                        <tbody>
                            {sortedListings.map((item) => (
                                <tr key={item._id} className="hover:bg-secondary/5 transition">
                                    <td className="px-4 py-3 border-b border-secondary/10">
                                        <img
                                            src={item.roomPhoto}
                                            alt={item.title}
                                            className="h-16 w-24 object-cover rounded-md border border-secondary/20"
                                        />
                                    </td>
                                    <td className="px-4 py-3 border-b border-secondary/10 font-medium text-primary">
                                        {item.title}
                                    </td>
                                    <td className="px-4 py-3 border-b border-secondary/10 text-primary">
                                        {item.location}
                                    </td>
                                    <td className="px-4 py-3 border-b border-secondary/10 font-semibold text-primary">
                                        ${item.amount}
                                    </td>
                                    <td className="px-4 py-3 border-b border-secondary/10 text-center">
                                        <Link
                                            to={`/roommate-details/${item._id}`}
                                            className="btn btn-secondary text-white btn-xs sm:btn-md whitespace-nowrap"
                                        >
                                            See Details
                                        </Link>

                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                )}
            </div>
            <HowItWorks />
        </div>
    );
};

export default BrowseListing;
