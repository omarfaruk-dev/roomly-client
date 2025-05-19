import { Link } from "react-router";
import signUpImg from '../assets/signup.svg'
import { FcGoogle } from "react-icons/fc";

const SignUp = () => {
    return (
        <div className="min-h-[calc(100vh-149px)] max-w-5xl mx-auto flex flex-col lg:flex-row">
            {/* Left Column Image */}
            <div className="flex-1 flex items-center justify-center p-8">
                <img
                    src={signUpImg}
                    alt="Animation"
                    className="max-w-full md:w-1/2 lg:w-full object-contain"
                />
            </div>

            {/* Right Column (Form) */}
            <div className="flex-1 w-full flex items-center justify-center p-8">
                <div className="w-full max-w-md border-2 p-10 rounded-lg border-secondary shadow-md">
                    <h2 className="text-3xl font-bold mb-6 text-center">Sign Up</h2>

                    <form 

                    className="space-y-4">
                        {/* name */}
                        <div>
                            <label className="label">
                                <span className="label-text font-medium">Name</span>
                            </label>
                            <input
                                type="text"
                                name="name"
                                placeholder="Your name"
                                className="input input-bordered w-full rounded focus:outline-none focus:ring-2 focus:ring-secondary"
                            />
                        </div>
                        {/* Email */}
                        <div>
                            <label className="label">
                                <span className="label-text font-medium">Email</span>
                            </label>
                            <input
                                type="email"
                                name="email"
                                placeholder="you@example.com"
                                className="input input-bordered w-full rounded focus:outline-none focus:ring-2 focus:ring-secondary"
                            />
                        </div>

                        {/* Password */}
                        <div>
                            <label className="label">
                                <span className="label-text font-medium">Password</span>
                            </label>
                            <input
                                type="password"
                                name="password"
                                placeholder="Ype Your Password"
                                className="input input-bordered w-full rounded focus:outline-none focus:ring-2 focus:ring-secondary"
                            />
                        </div>
                        {/* photo */}
                        <div>
                            <label className="label">
                                <span className="label-text font-medium">Photo Url</span>
                            </label>
                            <input
                                type="password"
                                name="photo"
                                placeholder="Photo Url"
                                className="input input-bordered w-full rounded focus:outline-none focus:ring-2 focus:ring-secondary"
                            />
                        </div>

                        {/* Sign In Button */}
                        <button className="btn btn-secondary text-white w-full rounded mt-4">
                            Sign Up
                        </button>
                    </form>

                    {/* Divider */}
                    <div className="divider">OR</div>

                    {/* Sign in with Google */}
                    <button className="btn btn-outline border-secondary w-full rounded">
                        <FcGoogle />
                        Sign in with Google
                    </button>

                    {/* Sign Up Link */}
                    <p className="mt-4 text-center text-sm text-gray-500">
                        Already have an account?{" "}
                        <Link to="/signin" className="text-secondary font-medium">
                            Sign In
                        </Link>
                    </p>
                </div>
            </div>
        </div>
    );
};

export default SignUp;