import { Link, NavLink } from "react-router";
import { use, useState } from "react";
import { FaBars, FaTimes, FaUserCircle, FaSignOutAlt, FaUser } from "react-icons/fa";
import { AuthContext } from "../context/AuthContext";

const NavBar = () => {
  const { user } = use(AuthContext);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  // const userLoggedIn = false; 

  const navLinks = (
    <>
      <NavLink to="/" className="px-3 md:px-2 lg:px-3 py-2 block text-sm font-medium text-primary">Home</NavLink>
      <NavLink to="/add-roommate" className="px-3 md:px-2 lg:px-3 py-2 block text-sm font-medium text-primary">Add to Find Roommate</NavLink>
      <NavLink to="/browse-roommate" className="px-3 md:px-2 lg:px-3 py-2 block text-sm font-medium text-primary">Browse Listing</NavLink>
      <NavLink to="/my-listing" className="px-3 md:px-2 lg:px-3 py-2 block text-sm font-medium text-primary">My Listing</NavLink>
    </>
  );

  return (
    <nav className="bg-base-100 shadow">
      <div className="max-w-7xl mx-auto flex items-center justify-between h-16 px-4">
        {/* Logo */}
        <div className="flex items-center">
          <Link to="/" className="text-xl font-bold text-primary flex items-center">
            <img className="w-10" src="/logo-small.png" alt="" />
            <span className="ml-2 block md:hidden lg:block">RoomLy</span>
          </Link>
        </div>

        {/* Desktop Nav */}
        <div className="hidden md:flex space-x-4">{navLinks}</div>

        {/* Right Buttons */}
        <div className="hidden md:flex items-center space-x-3 z-105">
          {!user ? (
            <>
              <Link to="/signin" className="btn btn-secondary btn-outline px-4 py-1 rounded text-sm">Sign In</Link>
              <Link to="/signup" className="btn btn-secondary px-4 py-1 rounded text-sm">Sign Up</Link>
            </>
          ) : (
            <div className="relative group cursor-pointer">
              {user ? <img src={user.photoRUL} alt="profile" className="w-9 h-9 rounded-full border border-secondary" /> : <FaUser />}

              <div className="absolute right-0 mt-2 w-40 bg-base-100 border rounded-md shadow-lg opacity-0 group-hover:opacity-100 transition-opacity">
                <p className="px-4 py-2 text-sm font-medium text-primary">{user.displayName}</p>
                <hr />
                <button className="flex items-center gap-2 px-4 py-2 text-sm text-primary w-full text-left">
                  <FaUserCircle /> Profile
                </button>
                <button className="flex items-center gap-2 px-4 py-2 text-sm text-primary w-full text-left">
                  <FaSignOutAlt /> Logout
                </button>
              </div>
            </div>
          )}
        </div>

        {/* Mobile Toggle */}
        <div className="md:hidden text-secondary">
          <button onClick={() => setMobileMenuOpen(!mobileMenuOpen)} className="text-xl">
            {mobileMenuOpen ? <FaTimes /> : <FaBars />}
          </button>
        </div>
      </div>

      {/* Mobile Nav */}
      {mobileMenuOpen && (
        <div className="md:hidden mt-2 space-y-1 border-t border-secondary/30 pt-2 pb-6 ">
          {navLinks}
          {!user ? (
            <div className="flex flex-col space-y-2 mt-2 px-3">
              <Link to="/signin" className="btn btn-secondary btn-outline px-4 py-1 rounded text-sm">Sign In</Link>
              <Link to="/signup" className="btn btn-secondary px-4 py-1 rounded text-sm">Sign Up</Link>
            </div>
          ) : (
            <div className="px-3 space-y-2 mt-2">
              <p className="text-sm font-medium">{user?.displayName}</p>
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
