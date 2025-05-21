import { useLoaderData } from "react-router";
import { FaEdit, FaTrashAlt, FaHeart } from "react-icons/fa";
import { Link } from "react-router";
import { use } from "react";
import { AuthContext } from "../../context/AuthContext";

const MyListing = () => {
    const { user } = use(AuthContext);
    const allListings = useLoaderData();

    // Filter listings based on the logged-in user's email
    const myListings = allListings.filter(listing => listing.email === user?.email);

    return (
        <div className="max-w-7xl mx-auto px-4 py-10 mt-20">
            <h2 className="ext-xl md:text-3xl font-bold text-primary text-center mb-6">My Roommate Listings</h2>

            {myListings.length === 0 ? (<p className="text-primary text-xl text-center">You don't have roommate finding list. Add first</p>) :
                (
                    <div className="overflow-x-auto shadow-md rounded-lg">
                        <table className="min-w-full bg-base-100 text-left border border-secondary/10">
                            <thead className="bg-secondary/10 text-secondary text-sm">
                                <tr>
                                    <th className="px-4 py-3 border-b border-secondary/10">Photo</th>
                                    <th className="px-4 py-3 border-b border-secondary/10">Title</th>
                                    <th className="px-4 py-3 border-b border-secondary/10">Like Counts</th>
                                    <th className="px-4 py-3 border-b border-secondary/10 text-center">Actions</th>
                                </tr>
                            </thead>
                            <tbody>
                                {myListings.map((item) => (
                                    <tr key={item._id} className="hover:bg-gray-50 transition duration-200">
                                        <td className="px-4 py-3 border-b border-secondary/10">
                                            <img
                                                src={item.roomPhoto}
                                                alt={item.title}
                                                className="h-16 w-24 object-cover rounded"
                                            />
                                        </td>
                                        <td className="px-4 py-3 border-b border-secondary/10 font-medium text-primary">
                                            {item.title}
                                        </td>
                                        <td className="px-4 py-3 border-b border-secondary/10 text-center">
                                            <div className="flex items-center justify-center gap-1 text-red-500">
                                                <FaHeart className="text-red-400" /> {item.likes || 0}
                                            </div>
                                        </td>

                                        <td className="px-4 py-3 border-b border-secondary/10 text-center space-y-1 lg:space-y-0 space-x-2">
                                            <Link
                                                to={`/edit-roommate/${item._id}`}
                                                className="btn btn-xs md:btn-sm btn-outline btn-primary"
                                            >
                                                <FaEdit className="mr-1" /> Edit
                                            </Link>
                                            <button
                                                onClick={() => handleDelete(item._id)}
                                                className="btn btn-xs md:btn-sm btn-outline btn-error"
                                            >
                                                <FaTrashAlt className="mr-1" /> Delete
                                            </button>
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                )
            }
        </div>
    );
};

// Dummy delete handler (replace with actual logic)
const handleDelete = (id) => {
    console.log("Delete clicked:", id);
};

export default MyListing;
