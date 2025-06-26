import { FaHome, FaListUl, FaSignOutAlt, FaUser } from "react-icons/fa";
import { Link, NavLink, Outlet, useLoaderData, useLocation } from "react-router";
import { AuthContext } from "../context/AuthContext";
import Lottie from "lottie-react";
import welcome from "../assets/lotties/welcom-lottie.json";
import { use } from "react";

const DashboardLayout = () => {
       const { user } = use(AuthContext);
    const roommatesData = useLoaderData();
    // Example stats from API data
    const myListings = Array.isArray(roommatesData)
        ? roommatesData.filter(r => r.email === user?.email).length
        : (roommatesData.email === user?.email ? 1 : 0);
    const activeRoommates = Array.isArray(roommatesData)
        ? roommatesData.filter(r => r.availability === "available").length
        : roommatesData.availability === "available" ? 1 : 0;
    const pendingRequests = Array.isArray(roommatesData)
        ? roommatesData.filter(r => r.availability === "pending").length
        : roommatesData.availability === "pending" ? 1 : 0;
 
    const location = useLocation();
    const isDashboardHome = location.pathname === "/dashboard";

    return (
        <div className="max-w-[1440px] mx-auto drawer lg:drawer-open min-h-screen">
            <input id="roomly-drawer" type="checkbox" className="drawer-toggle" />
            <div className="drawer-content flex flex-col">
                {/* Dashboard Top Bar - always visible */}
                <div className="w-full bg-base-100 border-b border-base-200 py-3 px-4 flex items-center justify-between sticky top-0 z-30">
                    <span className="text-lg font-semibold text-primary">
                        Welcome to your <span className="text-secondary">ROOMLY</span> Dashboard
                    </span>
                    {/* User avatar at top right */}
                    <Link to="/dashboard/my-profile" className="ml-4 flex items-center gap-2">
                        <img
                            src={user?.photoURL || "/logo-small.png"}
                            alt="User Avatar"
                            className="h-9 w-9 rounded-full border border-base-300 object-cover"
                        />
                    </Link>
                </div>
                {/* Navbar for mobile */}
                <div className="navbar bg-base-300 w-full lg:hidden">
                    <div className="flex-none">
                        <label
                            htmlFor="roomly-drawer"
                            aria-label="open sidebar"
                            className="btn btn-square btn-ghost"
                        >
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                viewBox="0 0 24 24"
                                className="inline-block h-6 w-6 stroke-current"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth="2"
                                    d="M4 6h16M4 12h16M4 18h16"
                                ></path>
                            </svg>
                        </label>
                    </div>
                    <div className="mx-2 flex-1 px-2 text-lg font-bold">
                        Roomly Dashboard
                    </div>
                </div>
                {/* Main content */}
                <div className="p-4 flex-1">
                    {isDashboardHome && (
                        <>
                            {/* Welcome message with Lottie animation */}
                            <div className="flex flex-col md:flex-row items-center gap-4 mb-8 animate-fade-in">
                                <div className="w-30 md:w-80 ">
                                    <Lottie animationData={welcome} loop={true} />
                                </div>
                                <div className="flex-1 text-center md:text-left">
                                    <h2 className="text-2xl md:text-3xl font-bold text-primary mb-2">Welcome, {user?.displayName || "User"}!</h2>
                                    <p className="text-accent text-lg">Here's a quick overview of your dashboard stats.</p>
                                </div>
                            </div>
                            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
                                <div className="bg-white rounded-lg shadow p-5 flex flex-col items-center">
                                    <span className="text-2xl font-bold text-primary">{myListings}</span>
                                    <span className="text-accent mt-1">My Listings</span>
                                </div>
                                <div className="bg-white rounded-lg shadow p-5 flex flex-col items-center">
                                    <span className="text-2xl font-bold text-primary">{activeRoommates}</span>
                                    <span className="text-accent mt-1">Active Roommates</span>
                                </div>
                                <div className="bg-white rounded-lg shadow p-5 flex flex-col items-center">
                                    <span className="text-2xl font-bold text-primary">{pendingRequests}</span>
                                    <span className="text-accent mt-1">Pending Requests</span>
                                </div>
                            </div>
                            <div className="bg-white rounded-lg shadow p-5 mb-8">
                                <div className="text-lg font-semibold mb-2 text-primary">Listings Overview</div>
                                <div className="w-full h-40 flex items-center justify-center text-accent/60">
                                    <span>[Graph will go here]</span>
                                </div>
                            </div>
                        </>
                    )}
                    <Outlet />
                </div>
            </div>
            <div className="drawer-side">
                <label
                    htmlFor="roomly-drawer"
                    aria-label="close sidebar"
                    className="drawer-overlay"
                ></label>
                <ul className="menu bg-base-200 text-base-content min-h-full w-72 p-4">
                    {/* Sidebar logo */}
                    <Link to="/" className="mb-6 flex items-center gap-2">
                        <img src="/logo-small.png" alt="Roomly Logo" className="h-8 w-8" />
                        <span className="text-xl font-bold">Roomly</span>
                    </Link>
                    <li>
                        <NavLink to="/dashboard" end>
                            <FaHome className="inline-block mr-2" />
                            Home
                        </NavLink>
                    </li>

                    <li>
                        <NavLink to="/dashboard/my-listing">
                            <FaListUl className="inline-block mr-2" />
                            My Listings
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to="/dashboard/my-profile">
                            <FaUser className="inline-block mr-2" />
                            My Profile
                        </NavLink>
                    </li>
                    {/* Add more private route links here */}
                    <li className="mt-auto">
                        <button className="btn btn-secondary btn-outline w-full">
                            <FaSignOutAlt className="inline-block mr-2" />
                            Logout
                        </button>
                    </li>
                </ul>
            </div>
        </div>
    );
};

export default DashboardLayout;