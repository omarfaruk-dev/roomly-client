import { Link, NavLink } from "react-router";
import { useState } from "react";
import { FaBars, FaTimes, FaUserCircle, FaSignOutAlt } from "react-icons/fa";

const NavBar = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const userLoggedIn = false; // change to false for logged-out view

  const navLinks = (
    <>
      <NavLink to="/" className="px-3 py-2 block text-sm font-medium text-gray-800">Home</NavLink>
      <NavLink to="/browse" className="px-3 py-2 block text-sm font-medium text-gray-800">Add to Find Roommate</NavLink>
      <NavLink to="/add" className="px-3 py-2 block text-sm font-medium text-gray-800">Browse</NavLink>
      <NavLink to="/mylistings" className="px-3 py-2 block text-sm font-medium text-gray-800">My Listing</NavLink>
    </>
  );

  return (
    <nav className="bg-white shadow">
      <div className="max-w-7xl mx-auto flex items-center justify-between h-16 px-4">
        {/* Logo */}
        <div className="flex items-center">
          <Link to="/" className="text-xl font-bold text-primary flex items-center">
            <img className="w-10" src="logo-small.png" alt="" />
            <span className="ml-2 block md:hidden lg:block">RoomLy</span>
          </Link>
        </div>

        {/* Desktop Nav */}
        <div className="hidden md:flex space-x-4">{navLinks}</div>

        {/* Right Buttons */}
        <div className="hidden md:flex items-center space-x-3">
          {!userLoggedIn ? (
            <>
              <Link to="/login" className="btn btn-secondary btn-outline px-4 py-1 rounded text-sm">Sign In</Link>
              <Link to="/signup" className="btn btn-secondary px-4 py-1 rounded text-sm">Sign Up</Link>
            </>
          ) : (
            <div className="relative group cursor-pointer">
              <img src="/default-avatar.png" alt="profile"
                className="w-9 h-9 rounded-full border border-purple-500" />
              <div className="absolute right-0 mt-2 w-40 bg-white border rounded-md shadow-lg opacity-0 group-hover:opacity-100 transition-opacity">
                <p className="px-4 py-2 text-sm font-medium text-gray-700">John Doe</p>
                <hr />
                <button className="flex items-center gap-2 px-4 py-2 text-sm text-gray-700 w-full text-left">
                  <FaUserCircle /> Profile
                </button>
                <button className="flex items-center gap-2 px-4 py-2 text-sm text-gray-700 w-full text-left">
                  <FaSignOutAlt /> Logout
                </button>
              </div>
            </div>
          )}
        </div>

        {/* Mobile Toggle */}
        <div className="md:hidden">
          <button onClick={() => setMobileMenuOpen(!mobileMenuOpen)} className="text-xl">
            {mobileMenuOpen ? <FaTimes /> : <FaBars />}
          </button>
        </div>
      </div>

      {/* Mobile Nav */}
      {mobileMenuOpen && (
        <div className="md:hidden mt-2 space-y-1 border-t pt-2">
          {navLinks}
          {!userLoggedIn ? (
            <div className="flex flex-col space-y-2 mt-2 px-3">
              <Link to="/login" className="btn btn-secondary btn-outline px-4 py-1 rounded text-sm">Sign In</Link>
              <Link to="/signup" className="btn btn-secondary px-4 py-1 rounded text-sm">Sign Up</Link>
            </div>
          ) : (
            <div className="px-3 space-y-2 mt-2">
              <p className="text-sm font-medium">John Doe</p>
              <button className="flex items-center gap-2 text-sm text-gray-700 w-full">
                <FaUserCircle /> Profile
              </button>
              <button className="flex items-center gap-2 text-sm text-gray-700 w-full">
                <FaSignOutAlt /> Logout
              </button>
            </div>
          )}
        </div>
      )}
    </nav>
  );
};

export default NavBar;
