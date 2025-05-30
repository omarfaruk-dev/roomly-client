import { Link, NavLink, useNavigate } from "react-router";
import { use, useEffect, useState } from "react";
import { FaBars, FaTimes, FaUserCircle, FaSignOutAlt, FaUser, FaMoon, FaSun } from "react-icons/fa";
import {  MdSunny, MdWbSunny } from "react-icons/md";
import { IoMoon } from "react-icons/io5";
import { AuthContext } from "../context/AuthContext";
import Swal from "sweetalert2";

const NavBar = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 30);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const { user, signOutUser } = use(AuthContext);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const navigate = useNavigate();

  // Theme state
  const [theme, setTheme] = useState(() => {
    if (typeof window !== 'undefined') {
      const savedTheme = localStorage.getItem('roomly-theme');
      return savedTheme ? savedTheme : 'light';
    }
    return 'light';
  });

  useEffect(() => {
    document.documentElement.removeAttribute('data-theme');
    document.body.removeAttribute('data-theme');
    document.body.setAttribute('data-theme', theme);
    document.body.style.colorScheme = theme;
    localStorage.setItem('roomly-theme', theme);
  }, [theme]);

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


  const toggleTheme = () => {
    setTheme(theme === 'light' ? 'dark' : 'light');
  };

  const handleMobileMenuClose = () => setMobileMenuOpen(false);

  const navLinks = (
    <>
      <NavLink to="/" className=" md:px-2 lg:px-3 py-2 block font-medium text-primary hover:text-secondary" onClick={handleMobileMenuClose}>Home</NavLink>
      <NavLink to="/add-roommate" className=" md:px-2 lg:px-3 py-2 block text-primary font-medium hover:text-secondary" onClick={handleMobileMenuClose}>Add To Find Roommate</NavLink>
      <NavLink to="/browse-listing" className=" md:px-2 lg:px-3 py-2 block font-medium text-primary hover:text-secondary" onClick={handleMobileMenuClose}>Browse Listing</NavLink>
      <NavLink to="/my-listing" className=" md:px-2 lg:px-3 py-2 block font-medium text-primary hover:text-secondary" onClick={handleMobileMenuClose}>My Listing</NavLink>
    </>
  );

  const [showUserPhoto, setShowUserPhoto] = useState(true);
  const [showUserPhotoMobile, setShowUserPhotoMobile] = useState(true);

  return (
    <nav className={`fixed w-full top-0 z-50 bg-base-200 backdrop-blur-2xl border-b border-secondary/20 transition-colors duration-300 ${scrolled ? "shadow-md" : ""}`}>

      <div className="max-w-7xl mx-auto flex items-center justify-between h-16 px-4">
        {/* Logo (always left) */}
        <div className="flex items-center">
          <Link to="/" className="text-xl font-bold text-primary flex items-center">
            <img className="w-10" src="/logo-small.png" alt="RoomLy" />
            <span className="ml-2 block md:hidden lg:block text-secondary">ROOMLY</span>
          </Link>
        </div>

        {/* Desktop & Tablet Nav */}
        <div className="hidden md:flex space-x-0 md:text-sm lg:text-base lg:space-x-4">{navLinks}</div>

        {/* Right Buttons (show on md and up) */}
        <div className="hidden md:flex items-center space-x-2 lg:space-x-3 z-105">
          {/* Theme Toggle Button (tablet/desktop) */}
          <button
            onClick={toggleTheme}
            className="btn btn-secondary btn-sm rounded-full shadow flex items-center justify-center px-3 py-2"
            aria-label="Toggle dark mode"
            title={theme === 'light' ? 'Switch to dark mode' : 'Switch to light mode'}
          >
            {theme === 'light' ? <IoMoon  className="text-lg" /> : <MdSunny  className="text-lg" />}
          </button>
          {/* signup, signin, user photo nav right - tablet - desktop */}
          {!user ? (
            <>
              <Link to="/signin" className="btn btn-secondary btn-outline px-4 py-1 rounded-md text-sm">Sign In</Link>
              <Link to="/signup" className="btn btn-secondary px-4 py-1 rounded-md text-sm">Sign Up</Link>
            </>
          ) : (
            <div className="relative group cursor-pointer">
              {user ? (
                user.photoURL && showUserPhoto ? (
                  <img
                    src={user.photoURL}
                    alt={user.displayName}
                    className="w-12 h-12 p-1 rounded-full border-2 border-secondary"
                    onError={() => setShowUserPhoto(false)}
                  />
                ) : (
                  <div className="w-12 h-12 flex items-center justify-center rounded-full border-2 text-secondary">
                    <FaUser className="text-xl" />
                  </div>
                )
              ) : null}

              <div className="absolute right-2 border top-12 border-secondary/20 w-45 bg-base-200 backdrop-blur-2xl rounded-md shadow 
      origin-top scale-y-0 group-hover:scale-y-100 transition-transform duration-200 ease-out 
      transform z-50">
                <p className="px-4 py-2 font-medium text-primary">{user.displayName}</p>
                <hr className="border-t border-secondary/30" />
                <NavLink to='/my-profile' className="flex items-center hover:text-secondary gap-2 px-4 py-2 text-primary w-full text-left">
                  <FaUserCircle /> Profile
                </NavLink>
                <Link
                  onClick={handleSignOut}
                  className="flex items-center hover:text-secondary gap-2 px-4 py-2 text-primary w-full text-left">
                  <FaSignOutAlt /> Logout
                </Link>
              </div>
            </div>
          )}
        </div>

        {/* Mobile: theme toggle, hamburger */}
        <div className="flex md:hidden items-center gap-2">
          <button
            onClick={toggleTheme}
            className="btn btn-secondary btn-sm rounded-full shadow flex items-center justify-center px-2 py-2"
            aria-label="Toggle dark mode"
            title={theme === 'light' ? 'Switch to dark mode' : 'Switch to light mode'}
          >
            {theme === 'light' ? <FaMoon className="text-lg" /> : <MdWbSunny  className="text-lg" />}
          </button>
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="transition-all duration-300 ease-in-out transform text-xl"
            aria-label="Open menu"
          >
            {mobileMenuOpen ? (
              <FaTimes className="transition-all duration-300 ease-in-out" />
            ) : (
              <FaBars className="transition-all duration-300 ease-in-out" />
            )}
          </button>
        </div>

      </div>

      {/* Mobile Nav */}
      <div
        className={`md:hidden absolute right-0 top-16 w-full z-50 transition-all duration-300 ease-in-out ${mobileMenuOpen ? 'opacity-100 scale-y-100 max-h-[500px] pointer-events-auto' : 'opacity-0 scale-y-95 max-h-0 pointer-events-none'} origin-top`}

      >
        <div className="border border-secondary/20 w-11/12 mx-auto bg-base-200 rounded-md shadow mt-2 p-4">
          {navLinks}
          {!user ? (
            <div className="flex flex-col space-y-2 mt-2 px-3">
              <Link to="/signin" className="btn btn-secondary btn-outline px-4 py-1 rounded-md text-sm" onClick={handleMobileMenuClose}>Sign In</Link>
              <Link to="/signup" className="btn btn-secondary px-4 py-1 rounded-md text-sm" onClick={handleMobileMenuClose}>Sign Up</Link>
            </div>
          ) : (
            <div className="border-t border-secondary/30 pt-5 px-3 space-y-3 mt-2">
              {/* <p className="font-medium">{user?.displayName}</p> */}
              <NavLink to='/my-profile' className="flex items-center gap-2 text-primary w-full" onClick={handleMobileMenuClose}>
                {user?.photoURL && showUserPhotoMobile ? (
                  <img src={user.photoURL} alt={user.displayName || "User"} className="w-10 h-10 border p-1 border-secondary rounded-full" onError={() => setShowUserPhotoMobile(false)} />
                ) : (
                  <FaUser className="w-8 h-8 border border-secondary rounded-full p-1" />
                )}
                {user?.displayName}
              </NavLink>
              <Link
                onClick={() => { handleSignOut(); handleMobileMenuClose(); }}
                className="flex items-center gap-2 text-primary w-full"
              >
                <FaSignOutAlt /> Logout
              </Link>
            </div>
          )}
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
