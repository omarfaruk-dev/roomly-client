

const HowItWorks = () => (
    <section className="max-w-7xl mx-auto px-4 py-20">
        <h2 className="text-center text-3xl text-primary md:text-4xl font-bold mb-2">
            How <span className="text-secondary">Roomly</span> Works
        </h2>
        <p className="text-center text-accent mb-12 max-w-2xl mx-auto">
            Find your perfect roommate or tenant in just a few simple steps. Roomly makes the process <span className="text-secondary font-semibold">safe</span>, <span className="text-primary font-semibold">easy</span>, and <span className="text-secondary font-semibold">fast</span> for everyone.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 items-center">
            {/* Left: Steps 1 & 2 */}
            <div className="flex flex-col gap-10">
                <div className="flex items-start gap-4 bg-base-100 rounded-xl shadow-md p-6 border-l-4 border-secondary/15 hover:scale-105 hover:shadow-lg transition-transform">
                    <div className="w-12 h-12 flex items-center justify-center rounded-full bg-secondary/15 text-2xl font-bold text-secondary shadow-sm">
                        1
                    </div>
                    <div>
                        <h3 className="font-bold text-lg text-primary mb-1">Create an Account</h3>
                        <p className="text-accent text-sm">Sign up in seconds and set up your profile to get started.</p>
                    </div>
                </div>
                <div className="flex items-start gap-4 bg-base-100 rounded-xl shadow-md p-6 border-l-4 border-secondary/15 hover:scale-105 hover:shadow-lg transition-transform">
                    <div className="w-12 h-12 flex items-center justify-center rounded-full bg-primary/10 text-2xl font-bold text-primary shadow-sm">
                        2
                    </div>
                    <div>
                        <h3 className="font-bold text-lg text-primary mb-1">Browse or List</h3>
                        <p className="text-accent text-sm">Browse available rooms & roommates, or add your own listing for free.</p>
                    </div>
                </div>
            </div>
            {/* Center: Image */}
            <div className="hidden md:flex justify-center items-center">
                <img src="/logo.png" alt="How Roomly Works" className="w-64 h-64 p-2 object-contain rounded-xl shadow-md border-4 border-secondary/15 bg-white" />
            </div>
            {/* Right: Steps 3 & 4 */}
            <div className="flex flex-col gap-10">
                <div className="flex items-start gap-4 bg-base-100 rounded-xl shadow-md p-6 border-l-4 border-secondary/15 hover:scale-105 hover:shadow-lg transition-transform">
                    <div className="w-12 h-12 flex items-center justify-center rounded-full bg-secondary/15 text-2xl font-bold text-secondary shadow-sm">
                        3
                    </div>
                    <div>
                        <h3 className="font-bold text-lg text-primary mb-1">Connect & Chat</h3>
                        <p className="text-accent text-sm">Message safely through Roomly to find your best match.</p>
                    </div>
                </div>
                <div className="flex items-start gap-4 bg-base-100 rounded-xl shadow-md p-6 border-l-4 border-secondary/15 hover:scale-105 hover:shadow-lg transition-transform">
                    <div className="w-12 h-12 flex items-center justify-center rounded-full bg-primary/10 text-2xl font-bold text-primary shadow-sm">
                        4
                    </div>
                    <div>
                        <h3 className="font-bold text-lg text-primary mb-1">Move In!</h3>
                        <p className="text-accent text-sm">Seal the deal and start your new chapter with confidence.</p>
                    </div>
                </div>
            </div>
        </div>
    </section>
);

export default HowItWorks;