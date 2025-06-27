import { FaHome, FaListUl, FaPlusCircle, FaSignOutAlt, FaUser } from "react-icons/fa";
import { Link, NavLink, Outlet, useNavigate } from "react-router";
import Swal from "sweetalert2";
import useAuth from "../hooks/useAuth";
// import Stats from "../components/Stats";
import Lottie from "lottie-react";
import { ImStatsBars } from "react-icons/im";
import welcome from "../../src/assets/lotties/welcom-lottie.json";

const DashboardLayout = () => {
    const { user, signOutUser } = useAuth();
    const navigate = useNavigate();
    // const location = useLocation();
    const isDashboardHome = location?.pathname === "/dashboard";

    // Signout user
    const handleSignOut = () => {
        Swal.fire({
            title: 'Are you sure?',
            text: 'You will be logged out of your account.',
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3C65F5',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes, log out',
            cancelButtonText: 'Cancel',
        }).then((result) => {
            if (result.isConfirmed) {
                signOutUser();
                Swal.fire({
                    position: 'center',
                    icon: 'success',
                    title: 'Sign Out Successful!',
                    showConfirmButton: false,
                    timer: 1500
                })
                    .then(() => {
                        navigate('/');
                    });
            }

        });
    };

    // Helper to close drawer on nav click (mobile only)
    const closeDrawer = () => {
        const drawer = document.getElementById('roomly-drawer');
        if (drawer && window.innerWidth < 1024) drawer.checked = false;
    };
    return (
        <div className="max-w-[1440px] mx-auto drawer lg:drawer-open min-h-screen">
            <input id="roomly-drawer" type="checkbox" className="drawer-toggle" />
            <div className="drawer-content flex flex-col">
                {/* Dashboard Top Bar - always visible */}
                <div className="hidden w-full bg-base-200 border-b border-base-200 py-3 px-4 lg:flex items-center justify-between sticky top-0 z-30">
                    <span className="text-lg font-semibold text-primary">
                        Welcome to your <span className="text-secondary">ROOMLY</span> Dashboard
                    </span>
                    {/* User avatar at top right */}
                    <Link to="/dashboard/my-profile" className="ml-4 flex items-center gap-2">
                        <img
                            src={user?.photoURL || "/logo-small.png"}
                            alt="User Avatar"
                            className="h-10 w-10 p-1 rounded-full border border-base-300 object-cover"
                        />
                    </Link>
                </div>
                {/* Navbar for mobile */}
                <div className="flex justify-between navbar sticky top-0 z-50 bg-base-200 w-full lg:hidden">
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
                    <div>
                        <Link to="/dashboard/my-profile" className="ml-4 flex items-center gap-2">
                            <img
                                src={user?.photoURL || "/logo-small.png"}
                                alt="User Avatar"
                                className="h-10 w-10 p-1 rounded-full border border-base-300 object-cover"
                            />
                        </Link>
                    </div>

                </div>
                {/* Main content */}
                <div className="p-4 flex-1">
                    {/* Dashboard home page default content */}
                    {isDashboardHome && (
                        <>
                            <div className="flex flex-col md:flex-row items-center gap-4 mb-8 animate-fade-in">
                                <div className="w-30 md:w-80 ">
                                    <Lottie animationData={welcome} loop={true} />
                                </div>
                                <div className="flex-1 text-center md:text-left">
                                    <h2 className="text-2xl md:text-3xl font-bold text-primary mb-2">Welcome, {user?.displayName || "User"}!</h2>
                                    <p className="text-accent text-lg">Here's a quick overview of your dashboard stats.</p>
                                </div>
                            </div>
                        </>
                    )}
                    <Outlet />
                </div>
            </div>
            <div className="drawer-side z-50 lg:z-auto">
                <label
                    htmlFor="roomly-drawer"
                    aria-label="close sidebar"
                    className="drawer-overlay"
                ></label>
                <div className="w-60 pt-5 lg:w-70 min-h-full bg-base-200 flex flex-col">
                    {/* Sidebar logo - always visible */}
                    <Link to="/" className="mb-6 flex items-center gap-2 px-4 pt-4 lg:pt-0 bg-base-200 sticky top-0 z-10">
                        <img src="/logo-small.png" alt="Roomly Logo" className="h-8 w-8" />
                        <span className="text-xl font-bold">ROOMLY</span>
                    </Link>
                    <ul className="menu flex-1 bg-transparent text-base-content p-4 md:text-base font-medium">
                        <li>
                            <NavLink to="/dashboard" end onClick={closeDrawer}>
                                <FaHome className="inline-block mr-2" />
                                Home
                            </NavLink>
                        </li>
                        <li>
                            <NavLink to="/dashboard/add-roommate" onClick={closeDrawer}>
                                <FaPlusCircle className="inline-block mr-2" />
                                Add Roommate
                            </NavLink>
                        </li>
                        <li>
                            <NavLink to="/dashboard/my-listing" onClick={closeDrawer}>
                                <FaListUl className="inline-block mr-2" />
                                My Listings
                            </NavLink>
                        </li>
                        <li>
                            <NavLink to="/dashboard/my-profile" onClick={closeDrawer}>
                                <FaUser className="inline-block mr-2" />
                                My Profile
                            </NavLink>
                        </li>
                        <li>
                            <NavLink to="/dashboard/stats" onClick={closeDrawer}>
                                <ImStatsBars  className="inline-block mr-2" />
                                Statistic
                            </NavLink>
                        </li>
                        {/* Add more private route links here */}
                        <li className="mt-auto">
                            <button
                                onClick={e => { closeDrawer(); handleSignOut(e); }}
                                className="btn btn-error btn-outline w-full">
                                <FaSignOutAlt className="inline-block mr-2" />
                                Logout
                            </button>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default DashboardLayout;