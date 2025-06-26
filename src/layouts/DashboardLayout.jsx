

import { FaHome, FaListUl, FaSignOutAlt, FaUser } from "react-icons/fa"; // Update path if needed
import { NavLink, Outlet } from "react-router";

const DashboardLayout = () => {
  return (
    <div className="drawer lg:drawer-open min-h-screen">
      <input id="roomly-drawer" type="checkbox" className="drawer-toggle" />
      <div className="drawer-content flex flex-col">
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
          {/* Sidebar content */}
          <div className="mb-6 flex items-center gap-2">
            <img src="/logo-small.png" alt="Roomly Logo" className="h-8 w-8" />
            <span className="text-xl font-bold">Roomly</span>
          </div>
          <li>
            <NavLink to="/dashboard" end>
              <FaHome className="inline-block mr-2" />
              Dashboard Home
            </NavLink>
          </li>
          <li>
            <NavLink to="/dashboard/my-profile">
              <FaUser className="inline-block mr-2" />
              My Profile
            </NavLink>
          </li>
          <li>
            <NavLink to="/dashboard/my-listings">
              <FaListUl className="inline-block mr-2" />
              My Listings
            </NavLink>
          </li>
          {/* Add more private route links here */}
          <li className="mt-auto">
            <button className="btn btn-error btn-outline w-full">
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