import { Fade } from "react-awesome-reveal";
import { useLoaderData, Link } from "react-router";

const BrowseListing = () => {
    const listings = useLoaderData();

    return (
        <div className="max-w-7xl mx-auto mt-16 px-4 py-20">
            <Fade>
                <h2 className="text-center text-2xl text-primary md:text-3xl font-bold mb-10">
                    Browse <span className="text-secondary">Room/Roommate</span> Listings
                </h2>
            </Fade>
            <div className="overflow-x-auto shadow-md rounded-md border border-secondary/20">
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
                        {listings.map((item) => (
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
            </div>
        </div>
    );
};

export default BrowseListing;
