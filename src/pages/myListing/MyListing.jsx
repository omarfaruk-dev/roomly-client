import { useLoaderData } from "react-router";
import { FaEdit, FaTrashAlt, FaHeart } from "react-icons/fa";
import { Link } from "react-router";
import { use, useState } from "react";
import { AuthContext } from "../../context/AuthContext";
import Swal from "sweetalert2";
import { DotLottieReact } from "@lottiefiles/dotlottie-react";
import { Fade } from "react-awesome-reveal";

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
            cancelButtonColor: '#5F6CE0',  // your secondary color
            confirmButtonText: 'Yes, delete it!',
        })
            .then((result) => {
                if (result.isConfirmed) {
                    fetch(`https://roomly-server.vercel.app/roommates/${id}`, {
                        method: 'DELETE',
                    })
                        .then((res) => res.json())
                        .then(data => {
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
        <div className="max-w-7xl mx-auto px-4 py-10 md:py-20">
            <title>My Roommate Listing | Roomly</title>
            <Fade>
                <h2 className="text-center text-2xl text-primary md:text-3xl font-bold mb-10">
                    My <span className="text-secondary">Room/Roommate</span> Listings
                </h2>
            </Fade>
 
            {myListings.length === 0 ? (
                <div className="flex flex-col items-center justify-center py-16">
                    <DotLottieReact
                        src="https://lottie.host/e925104f-0bf4-432b-b7b5-6f6d3c7daba9/HfcdVb090q.lottie"
                        loop
                        autoplay
                        style={{ width: '100%', maxWidth: '500px' }}
                    />
                    <h3 className="text-2xl md:text-3xl font-bold text-primary mt-8 mb-2 text-center">No Listings Found</h3>
                    <p className="text-accent text-lg mb-6 text-center max-w-md">You haven't added any room or roommate listings yet. Start by creating your first listing to find your perfect match!</p>
                    <Link
                        to="/add-roommate"
                        className="btn btn-secondary btn-lg px-8 py-3 font-semibold shadow hover:scale-105 transition-all duration-200"
                    >
                        + Add New Listing
                    </Link>
                </div>
            ) :
                (
                    <div className="overflow-x-auto shadow-md rounded">
                        <table className="min-w-full bg-base-200 overflow-x-scroll text-left border border-secondary/10">
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
                                                to={`/dashboard/update-roommate/${item._id}`}
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
