import { useLoaderData } from "react-router";
import { FaEdit, FaTrashAlt, FaHeart } from "react-icons/fa";
import { Link } from "react-router";
import { use, useState } from "react";
import { AuthContext } from "../../context/AuthContext";
import Swal from "sweetalert2";
import { DotLottieReact } from "@lottiefiles/dotlottie-react";

const MyListing = () => {
    const { user } = use(AuthContext);
    const allListings = useLoaderData();

    // Filter listings based on the logged-in user's email
    const [listing, setListing] = useState(allListings);
    const myListings = listing.filter(listing => listing.email === user?.email);


    const handleDelete = (id) => {
        Swal.fire({
            title: 'Are you sure?',
            text: "You won't be able to revert this!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#dc3741', // your primary color
            cancelButtonColor: '#545454',  // your secondary color
            confirmButtonText: 'Yes, delete it!',
        })
            .then((result) => {
                if (result.isConfirmed) {
                    fetch(`http://localhost:3000/roommates/${id}`, {
                        method: 'DELETE',
                    })
                        .then((res) => res.json())
                        .then(data => {
                            console.log(data.deletedCount);
                            if (data.deletedCount > 0) {
                                Swal.fire({
                                    position: "center",
                                    icon: "success",
                                    title: "Post has been deleted!",
                                    showConfirmButton: false,
                                    timer: 1500
                                });
                                // Remove the deleted item from the state
                                const remainingList = listing.filter(list => list._id !== id);
                                setListing(remainingList);
                            }
                        })
                }
            })
    };

    return (
        <div className="max-w-7xl min-h-[calc(100vh-300px)] mx-auto px-4 py-10 mt-20">
            <h2 className="ext-xl md:text-3xl font-bold text-primary text-center mb-6">My Roommate Listings</h2>

            {myListings.length === 0 ? (
                <div className="flex flex-col items-center justify-center">
                    <DotLottieReact
                        src="https://lottie.host/e925104f-0bf4-432b-b7b5-6f6d3c7daba9/HfcdVb090q.lottie"

                        loop
                        autoplay
                        style={{ width: '100%', maxWidth: '750px' }}
                    />
                    <p className="text-primary text-xl text-center">You don't have roommate finding list. Add first</p>
                </div>
            ) :
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
                                    <tr key={item._id} className="hover:bg-secondary/5 transition duration-200">
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
                                                to={`/update-roommate/${item._id}`}
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

export default MyListing;
