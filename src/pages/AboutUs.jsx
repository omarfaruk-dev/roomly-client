
import communityImg from '../assets/slider/1.jpg'
const AboutUs = () => {
    return (
        <section className="flex mt-16 flex-col items-center justify-center bg-gradient-to-br from-secondary/10 via-base-100 to-base-200 py-16 px-4">
            <div className="max-w-4xl w-full text-center">
                <h1 className="text-2xl md:text-3xl font-extrabold text-primary mb-4 tracking-tight">
                    About <span className="text-secondary">Roomly</span>
                </h1>
                <p className="text-lg md:text-xl text-accent mb-8 leading-relaxed">
                    Roomly is your trusted platform for finding the perfect roommate and safe, comfortable living spaces. We believe in making shared living easy, transparent, and enjoyable for everyone. Our mission is to connect people, build trust, and help you feel at home—wherever you are.
                </p>
                <div className="flex flex-col md:flex-row items-center justify-center gap-8 mb-12">
                    <div className="flex-1 text-left md:text-center">
                        <h2 className="text-2xl font-bold text-secondary mb-2">Our Story</h2>
                        <p className="text-accent text-base md:text-lg mb-4">
                            Founded by a group of friends who struggled to find the right roommates, Roomly was born out of a desire to make shared living stress-free and joyful. Today, we empower thousands to find their perfect match and create lasting memories together.
                        </p>
                        <div className="flex flex-wrap gap-2 justify-center md:justify-start">
                            <span className="bg-secondary/10 text-secondary px-3 py-1 rounded-full text-xs font-semibold">Est. 2024</span>
                            <span className="bg-primary/10 text-primary px-3 py-1 rounded-full text-xs font-semibold">10K+ Users</span>
                            <span className="bg-accent/10 text-accent px-3 py-1 rounded-full text-xs font-semibold">Global Reach</span>
                        </div>
                    </div>
                    <div className="flex-1 flex items-center justify-center">
                        <img src={communityImg} alt="Roomly Community" className="rounded-md shadow-lg w-full max-w-xs object-cover border-4 border-secondary/20" />
                    </div>
                </div>

                {/* Stories & Testimonials Section */}
                <div className="mt-20 max-w-5xl mx-auto">
                    <h2 className="text-2xl font-bold text-secondary mb-6 text-center">Roomly Stories</h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {/* Card 1 */}
                        <div className="relative bg-gradient-to-br from-primary/10 to-white rounded-md shadow-md p-6 flex flex-col items-start border-t-4 border-primary/40 hover:scale-105 transition-transform">
                            <span className="absolute -top-5 left-4 bg-primary text-white px-3 py-1 rounded-full text-xs font-semibold shadow">Success Story</span>
                            <h4 className="font-semibold text-primary mb-2 mt-4">From Strangers to Friends</h4>
                            <p className="text-accent mb-2">“I moved to a new city for work and didn’t know anyone. Thanks to Roomly, I found a roommate who’s now my closest friend. We even started a book club together!”</p>
                            <span className="text-xs text-secondary font-semibold">— Jamie, Marketing Analyst</span>
                        </div>
                        {/* Card 2 */}
                        <div className="relative bg-gradient-to-br from-secondary/10 to-white rounded-md shadow-md p-6 flex flex-col items-start border-t-4 border-secondary/40 hover:scale-105 transition-transform">
                            <span className="absolute -top-5 left-4 bg-secondary text-white px-3 py-1 rounded-full text-xs font-semibold shadow">Success Story</span>
                            <h4 className="font-semibold text-secondary mb-2 mt-4">A Safe Start for Students</h4>
                            <p className="text-accent mb-2">“As an international student, safety was my top concern. Roomly’s verification and support made my transition smooth and stress-free.”</p>
                            <span className="text-xs text-secondary font-semibold">— Minh, University Student</span>
                        </div>
                        {/* Card 3 */}
                        <div className="relative bg-gradient-to-br from-accent/10 to-white rounded-md shadow-md p-6 flex flex-col items-start border-t-4 border-accent/40 hover:scale-105 transition-transform">
                            <span className="absolute -top-5 left-4 bg-accent text-white px-3 py-1 rounded-full text-xs font-semibold shadow">User Review</span>
                            <h4 className="font-semibold text-accent mb-2 mt-4">Stress-Free Roommate Search</h4>
                            <p className="italic text-accent mb-2">“Roomly made finding a roommate so easy and stress-free. I found my best friend here!”</p>
                            <span className="text-xs text-primary font-semibold">— Sarah, Student</span>
                        </div>
                        {/* Card 4 */}
                        <div className="relative bg-gradient-to-br from-primary/5 to-white rounded-md shadow-md p-6 flex flex-col items-start border-t-4 border-primary/20 hover:scale-105 transition-transform">
                            <span className="absolute -top-5 left-4 bg-primary text-white px-3 py-1 rounded-full text-xs font-semibold shadow">User Review</span>
                            <h4 className="font-semibold text-primary mb-2 mt-4">Peace of Mind</h4>
                            <p className="italic text-accent mb-2">“The verification process gave me peace of mind. Highly recommend Roomly!”</p>
                            <span className="text-xs text-primary font-semibold">— Alex, Young Professional</span>
                        </div>
                        {/* Card 5 */}
                        <div className="relative bg-gradient-to-br from-secondary/5 to-white rounded-md shadow-md p-6 flex flex-col items-start border-t-4 border-secondary/20 hover:scale-105 transition-transform">
                            <span className="absolute -top-5 left-4 bg-secondary text-white px-3 py-1 rounded-full text-xs font-semibold shadow">User Review</span>
                            <h4 className="font-semibold text-secondary mb-2 mt-4">Community Vibes</h4>
                            <p className="italic text-accent mb-2">“I love the community vibe and support. Roomly is more than just a platform.”</p>
                            <span className="text-xs text-primary font-semibold">— Priya, Graduate</span>
                        </div>
                        {/* Card 6 */}
                        <div className="relative bg-gradient-to-br from-accent/5 to-white rounded-md shadow-md p-6 flex flex-col items-start border-t-4 border-accent/20 hover:scale-105 transition-transform">
                            <span className="absolute -top-5 left-4 bg-accent text-white px-3 py-1 rounded-full text-xs font-semibold shadow">User Review</span>
                            <h4 className="font-semibold text-accent mb-2 mt-4">Easy & Fast Process</h4>
                            <p className="italic text-accent mb-2">“I found a great roommate within days. The process was so easy and the filters helped me find exactly what I needed!”</p>
                            <span className="text-xs text-primary font-semibold">— Daniel, Remote Worker</span>
                        </div>
                    </div>
                </div>

                {/* Meet the Team Section */}
                <div className="mt-20 max-w-4xl mx-auto">
                    <h2 className="text-2xl font-bold text-secondary mb-8 text-center">Meet the Team</h2>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
                        {/* Team Member 1 */}
                        <div className="flex flex-col items-center bg-secondary/5 rounded-md shadow-md p-6 border-b-4 border-primary/40 hover:-translate-y-2 transition-transform">
                            <div className="relative mb-3">
                                <img src="https://i.pravatar.cc/100?img=13" alt="Ava Lee" className="h-20 w-20 rounded-full border-4 border-primary/30 shadow-md object-cover" />
                                <span className="absolute bottom-0 right-0 bg-primary text-white text-xs px-2 py-1 rounded-full shadow">CEO</span>
                            </div>
                            <span className="font-bold text-lg text-primary">Ava Lee</span>
                            <span className="text-accent text-sm mb-2">Co-Founder & CEO</span>
                            <p className="text-xs text-center text-accent">Visionary leader passionate about building communities and empowering people to find their place.</p>
                        </div>
                        {/* Team Member 2 */}
                        <div className="flex flex-col items-center bg-secondary/5 rounded-md shadow-md p-6 border-b-4 border-secondary/40 hover:-translate-y-2 transition-transform">
                            <div className="relative mb-3">
                                <img src="https://i.pravatar.cc/100?img=14" alt="Ravi Patel" className="h-20 w-20 rounded-full border-4 border-secondary/30 shadow-md object-cover" />
                                <span className="absolute bottom-0 right-0 bg-secondary text-white text-xs px-2 py-1 rounded-full shadow">Product</span>
                            </div>
                            <span className="font-bold text-lg text-primary">Ravi Patel</span>
                            <span className="text-accent text-sm mb-2">Head of Product</span>
                            <p className="text-xs text-center text-accent">Designs seamless experiences and ensures Roomly is always user-focused and innovative.</p>
                        </div>
                        {/* Team Member 3 */}
                        <div className="flex flex-col items-center bg-secondary/5 rounded-md shadow-md p-6 border-b-4 border-accent/40 hover:-translate-y-2 transition-transform">
                            <div className="relative mb-3">
                                <img src="https://i.pravatar.cc/100?img=15" alt="Emily Chen" className="h-20 w-20 rounded-full border-4 border-accent/30 shadow-md object-cover" />
                                <span className="absolute bottom-0 right-0 bg-accent text-white text-xs px-2 py-1 rounded-full shadow">Community</span>
                            </div>
                            <span className="font-bold text-lg text-primary">Emily Chen</span>
                            <span className="text-accent text-sm mb-2">Community Manager</span>
                            <p className="text-xs text-center text-accent">Fosters inclusivity, supports users, and brings the Roomly community together every day.</p>
                        </div>
                    </div>
                </div>

                {/* Social Impact Section */}
                <div className="mt-20 max-w-3xl mx-auto text-center">
                    <h2 className="text-2xl font-bold text-primary mb-4">Our Commitment</h2>
                    <p className="text-accent mb-4">Roomly is dedicated to making a positive impact. We partner with local organizations to support affordable housing, promote inclusivity, and foster safe, welcoming communities for all.</p>
                    <div className="flex flex-wrap gap-4 justify-center mt-4">
                        <span className="bg-secondary/10 text-secondary px-4 py-2 rounded-full text-xs font-semibold">Affordable Housing</span>
                        <span className="bg-primary/10 text-primary px-4 py-2 rounded-full text-xs font-semibold">Diversity & Inclusion</span>
                        <span className="bg-accent/10 text-accent px-4 py-2 rounded-full text-xs font-semibold">Community Support</span>
                    </div>
                </div>

                {/* Contact & Socials Section */}
                <div className="mt-20 max-w-2xl mx-auto text-center">
                    <h2 className="text-2xl font-bold text-secondary mb-4">Connect With Us</h2>
                    <p className="text-accent mb-4">Questions, feedback, or partnership ideas? We’d love to hear from you!</p>
                    <div className="flex flex-wrap gap-4 justify-center mb-4">
                        <a href="mailto:hello@roomly.com" className="text-primary font-semibold underline">hello@roomly.com</a>
                        <a href="https://twitter.com/roomly" target="_blank" rel="noopener noreferrer" className="text-accent font-semibold underline">Twitter</a>
                        <a href="https://facebook.com/roomly" target="_blank" rel="noopener noreferrer" className="text-accent font-semibold underline">Facebook</a>
                        <a href="https://instagram.com/roomly" target="_blank" rel="noopener noreferrer" className="text-accent font-semibold underline">Instagram</a>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default AboutUs;