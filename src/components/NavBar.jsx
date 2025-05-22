import { Link, NavLink, useNavigate } from "react-router";
import { use, useEffect, useState } from "react";
import { FaBars, FaTimes, FaUserCircle, FaSignOutAlt, FaUser } from "react-icons/fa";
import { AuthContext } from "../context/AuthContext";
import toast from "react-hot-toast";

const NavBar = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 30); // Adjust threshold as needed
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const { user, signOutUser } = use(AuthContext);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const navigate = useNavigate();

  //signout user
  const handleSignOut = () => {
    signOutUser()
      .then(() => {
        navigate('/')
        toast.success('Log Out Successfully!')
      })
      .catch(error => {
        const errorMessage = error.message;
        toast.error(errorMessage || 'Something went wrong!')
      })
  }

  const navLinks = (
    <>
      <NavLink to="/" className="px-3 md:px-2 lg:px-3 py-2 block font-medium text-primary hover:text-secondary">Home</NavLink>
      <NavLink to="/add-roommate" className="px-3 md:px-2 lg:px-3 py-2 block text-primary font-medium hover:text-secondary">Add to Find Roommate</NavLink>
      <NavLink to="/browse-listing" className="px-3 md:px-2 lg:px-3 py-2 block font-medium text-primary hover:text-secondary">Browse Listing</NavLink>
      <NavLink to="/my-listing" className="px-3 md:px-2 lg:px-3 py-2 block font-medium text-primary hover:text-secondary">My Listing</NavLink>
    </>
  );

  return (
    // <nav className="bg-secondary/20 shadow fixed w-full mx-auto top-0 z-50 backdrop-blur-xs">
    <nav className={`fixed w-full top-0 z-50 bg-base-100/95 backdrop-blur-2xl transition-colors duration-300 ${scrolled ? "shadow-md" : ""}`}>

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
              {user?.photoURL ? (
                <img
                  src={user?.photoURL}
                  alt={user?.displayName}
                  className="w-12 h-12 rounded-full border-2 border-secondary"
                />
              ) : (
                <div className="w-12 h-12 flex items-center justify-center rounded-full border-2 text-secondary">
                  <FaUser className="text-xl" />
                </div>
              )}

              <div className="absolute right-0 border border-secondary/20 w-40 bg-base-100/95 backdrop-blur-2xl rounded shadow 
      origin-top scale-y-0 group-hover:scale-y-100 transition-transform duration-200 ease-out 
      transform z-50">
                <p className="px-4 py-2 font-medium text-primary">{user.displayName}</p>
                <hr className="border-t border-secondary/30"/>
                <button className="flex items-center hover:text-secondary gap-2 px-4 py-2 text-primary w-full text-left">
                  <FaUserCircle /> Profile
                </button>
                <Link
                  onClick={handleSignOut}
                  className="flex items-center hover:text-secondary gap-2 px-4 py-2 text-primary w-full text-left">
                  <FaSignOutAlt /> Logout
                </Link>
              </div>
            </div>

          )}
        </div>

        {/* Mobile Toggle */}
        <div className="md:hidden text-secondary">
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="transition-all duration-300 ease-in-out transform text-xl"
          >
            <div className={`transition-all duration-300 ease-in-out transform 
      ${mobileMenuOpen ? "rotate-90 scale-110 opacity-100" : "rotate-0 scale-100 opacity-90"}`}>
              {mobileMenuOpen ? (
                <FaTimes className="transition-all duration-300 ease-in-out" />
              ) : (
                <FaBars className="transition-all duration-300 ease-in-out" />
              )}
            </div>
          </button>
        </div>

      </div>

      {/* Mobile Nav */}
      {mobileMenuOpen && (
        <div
          className={`md:hidden overflow-hidden transition-all duration-500 ease-in-out transform 
    ${mobileMenuOpen ? 'max-h-[500px] opacity-100' : 'max-h-0 opacity-0'} mt-2 space-y-1 border-t border-secondary/30 pt-2 pb-6`}
        >
          {navLinks}
          {!user ? (
            <div className="flex flex-col space-y-2 mt-2 px-3">
              <Link to="/signin" className="btn btn-secondary btn-outline px-4 py-1 rounded text-sm">Sign In</Link>
              <Link to="/signup" className="btn btn-secondary px-4 py-1 rounded text-sm">Sign Up</Link>
            </div>
          ) : (
            <div className="border-t border-secondary/30 pt-5 px-3 space-y-3 mt-2">
              <p className="font-medium">{user?.displayName}</p>
              <button className="flex items-center gap-2 text-primary w-full">
                <FaUserCircle /> Profile
              </button>
              <Link
                onClick={handleSignOut}
                className="flex items-center gap-2 text-primary w-full"
              >
                <FaSignOutAlt /> Logout
              </Link>
            </div>
          )}
        </div>
      )}
    </nav>
  );
};

export default NavBar;
