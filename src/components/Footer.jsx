import { FaFacebookF, FaTwitter, FaInstagram } from "react-icons/fa";
import { Link } from "react-router";

const Footer = () => {
    return (
        <footer className="bg-secondary/5 text-accent py-10 mt-">
            <div className="max-w-7xl mx-auto px-4 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 text-sm">

                {/* Contact Section */}
                <div>
                    <h3 className="text-lg font-semibold mb-2 text-primary">Contact Us</h3>
                    <p>Email: support@roomly.com</p>
                    <p>Phone: +1 (800) 123-4567</p>
                    <p>Address: 123 Room St, WA, USA</p>
                </div>

                {/* Terms Section */}
                <div>
                    <h3 className="text-lg font-semibold mb-2 text-primary">Legal</h3>
                    <ul>
                        <li>
                            <Link to="/terms" className="hover:text-secondary">Terms & Conditions</Link>
                        </li>
                        <li>
                            <Link to="/privacy" className="hover:text-secondary">Privacy Policy</Link>
                        </li>
                    </ul>
                </div>

                {/* Social Media Section */}
                <div>
                    <h3 className="text-lg font-semibold mb-2 text-primary">Follow Us</h3>
                    <div className="flex gap-4 text-lg">
                        <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="hover:text-secondary">
                            <FaFacebookF />
                        </a>
                        <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="hover:text-secondary">
                            <FaTwitter />
                        </a>
                        <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="hover:text-secondary">
                            <FaInstagram />
                        </a>
                    </div>
                </div>
            </div>

            <div className="pt-5 mt-5 text-center text-sm text-accent border-t border-secondary/20">
                © {new Date().getFullYear()} Roomly. All rights reserved.
            </div>
        </footer>
    );
};

export default Footer;
