import React from 'react';
import Swal from 'sweetalert2';

const Contact = () => {
    const handleSubmit = (e) => {
        e.preventDefault();
        Swal.fire({
            icon: 'success',
            title: 'Message Sent!',
            text: 'Thank you for reaching out. We will get back to you soon.',
            confirmButtonColor: '#6366f1',
        });
        e.target.reset();
    };
    return (
        <section className="max-w-7xl mx-auto mt-16 px-4 py-20 w-full flex flex-col items-center justify-start">
            {/* Top Section: Info + Form */}
            <div className="w-full max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 px-4 md:px-0 pb-20">
                {/* Left: Info */}
                <div className="flex flex-col gap-8 justify-center">
                    <div>
                        <h1 className="text-3xl md:text-4xl font-extrabold text-primary mb-2">Contact Us</h1>
                        <p className="text-base md:text-lg text-accent mb-4">Email, call, or complete the form to learn how Roomly can help you. Our team is ready to answer your questions and support your journey.</p>
                        <a href="mailto:hello@roomly.com" className="block text-primary font-semibold underline mb-1">hello@roomly.com</a>
                        <a href="tel:3212212231" className="block text-accent mb-1">321-221-2231</a>
                        <a href="#" className="block text-secondary underline font-semibold mb-4">Customer Support</a>
                    </div>
                    <div className="flex flex-col md:flex-row gap-6 text-sm">
                        <div>
                            <span className="font-bold text-primary">Customer Support</span>
                            <p className="text-accent">Our support team is available around the clock to address any concerns or queries you may have.</p>
                        </div>
                        <div>
                            <span className="font-bold text-primary">Feedback & Suggestions</span>
                            <p className="text-accent">We value your feedback and are always working to improve Roomly. Your input shapes our future.</p>
                        </div>
                        <div>
                            <span className="font-bold text-primary">Media Inquiries</span>
                            <p className="text-accent">For press or media questions, contact us at <a href="mailto:media@roomly.com" className="underline text-secondary">media@roomly.com</a>.</p>
                        </div>
                    </div>
                </div>
                {/* Right: Form */}
                <div className="flex flex-col justify-center items-center">
                    <div className="w-full max-w-md bg-secondary/5 rounded-xl shadow-lg p-8 border border-gray-100">
                        <h2 className="text-xl font-bold text-primary mb-2">Get in Touch</h2>
                        <p className="text-accent text-sm mb-4">You can reach us anytime</p>
                        <form className="flex flex-col gap-3" onSubmit={handleSubmit}>
                            <div className="flex gap-2">
                                <input type="text" className="w-1/2 px-3 py-2 border border-accent rounded-md focus:outline-none focus:ring-2 focus:ring-primary/30 text-sm" placeholder="First name" required />
                                <input type="text" className="w-1/2 px-3 py-2 border border-accent rounded-md focus:outline-none focus:ring-2 focus:ring-primary/30 text-sm" placeholder="Last name" required />
                            </div>
                            <input type="email" className="w-full px-3 py-2 border border-accent rounded-md focus:outline-none focus:ring-2 focus:ring-primary/30 text-sm" placeholder="Your email" required />
                            <input type="tel" className="w-full px-3 py-2 border border-accent rounded-md focus:outline-none focus:ring-2 focus:ring-primary/30 text-sm" placeholder="Phone number" />
                            <textarea className="w-full px-3 py-2 border border-accent rounded-md focus:outline-none focus:ring-2 focus:ring-primary/30 text-sm" rows="3" maxLength={200} placeholder="How can we help?" required></textarea>
                            <button type="submit" className="mt-2 bg-primary text-white font-bold py-2 rounded-md shadow-md hover:bg-secondary transition-colors">Submit</button>
                        </form>
                        <p className="text-xs text-accent mt-2 text-center">By contacting us, you agree to our <a href="/terms-and-conditions" className="underline text-primary">Terms of Service</a> and <a href="/privacy-policy" className="underline text-primary">Privacy Policy</a>.</p>
                    </div>
                </div>
            </div>
            {/* Middle Section: Map + Location */}
            <div className="w-full bg-secondary/5 py-12 mt-0">
                <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 px-4 md:px-0 items-center">
                    {/* Map (Google Maps embed) */}
                    <div className="rounded-xl overflow-hidden shadow-md flex items-center justify-center min-h-[260px] bg-secondary/10">
                        <iframe
                            title="Roomly HQ Map"
                            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3651.902964295028!2d90.3915633154316!3d23.7508763946017!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3755b8b6e7b6e7b7%3A0x7b7b7b7b7b7b7b7b!2s123%20Startup%20Lane%2C%20Dhaka%2C%20Bangladesh!5e0!3m2!1sen!2sbd!4v1687777777777!5m2!1sen!2sbd"
                            width="100%"
                            height="260"
                            style={{ border: 0 }}
                            allowFullScreen=""
                            loading="lazy"
                            referrerPolicy="no-referrer-when-downgrade"
                        ></iframe>
                    </div>
                    {/* Location Info */}
                    <div className="flex flex-col gap-2">
                        <h2 className="text-xl font-bold text-primary mb-1">Our Location</h2>
                        <h3 className="text-lg font-semibold text-secondary mb-1">Connecting Near and Far</h3>
                        <div className="mb-2">
                            <span className="font-bold text-primary">Headquarters</span>
                            <p className="text-accent">Roomly Inc.<br/>123 Startup Lane, Suite 456<br/>Dhaka, Bangladesh</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Contact;