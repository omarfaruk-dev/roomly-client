import { Link, useLocation, useNavigate } from "react-router";
// import signInImg from '../assets/signin.svg'
import { FcGoogle } from "react-icons/fc";
import { DotLottieReact } from "@lottiefiles/dotlottie-react";
import { use, useState } from "react";
import { AuthContext } from "../context/AuthContext";
import { FaEye, FaEyeSlash } from "react-icons/fa";
// import Spinner from "../components/ui/Spinner";
import toast from "react-hot-toast";
import Swal from "sweetalert2";

const SignIn = () => {

    // const { user, signInUser, googleSignIn, setUser } = use
    const { signInUser, setUser } = use(AuthContext);


    //use location for path
    const location = useLocation();
    //navigate / redirect to another page
    const navigate = useNavigate()
    //handle error
    const [error, setError] = useState('');
    const errorMessages = {
        "auth/invalid-credential": "Invalid email or password.",
        "auth/user-not-found": "No account found with this email.",
        "auth/wrong-password": "Incorrect password. Try again.",
        "auth/invalid-email": "Please enter a valid email address.",
        "auth/missing-password": "Please enter your password.",
        "auth/too-many-requests": "Too many attempts. Please try again later.",
        "auth/network-request-failed": "Network error. Check your internet connection.",
    };


    const [showPassword, setShowPassword] = useState(false);
    const togglePasswordVisibility = () => {
        setShowPassword(!showPassword)
    };

    //if user already logged in
    // if (user) {
    //     return <>
    //         <Spinner/>
    //         {navigate(`${location.state ? location.state : '/'}`)}
    //     </>
    // }

    const handleSignin = (e) => {
        e.preventDefault();

        const email = e.target.email.value;
        const password = e.target.password.value;

        //signin user
        signInUser(email, password)
            .then(result => {
                const currentUser = result.user;
                console.log(currentUser);
                setUser(currentUser)
                setError('');
                // alert('success')
                Swal.fire({
                    position: "center",
                    icon: "success",
                    title: "Sign In Success!",
                    showConfirmButton: false,
                    timer: 1500
                });
                navigate(`${location.state ? location.state : '/'}`)

            })
            .catch(error => {
                const message = errorMessages[error.code] || "An unexpected error occurred.";
                setError(message)
                toast.error(errorMessages)
            })

    }

    return (
        <div className="mt-20 min-h-[calc(100vh-149px)] max-w-5xl mx-auto flex flex-col lg:flex-row">
            {/* Left Column Image */}
            <div className="flex-1 flex items-center justify-center p-4">
                <DotLottieReact
                    src="https://lottie.host/adbe480f-f24b-4292-838b-a4f74294f37e/FrK9Ai3HLB.lottie"
                    loop
                    autoplay
                    style={{ width: '100%', maxWidth: '550px' }}
                />
            </div>

            {/* Right Column (Form) */}
            <div className="flex-1 w-full flex items-center justify-center p-8">
                <div className="w-full max-w-md border-2  p-10 rounded-lg border-secondary/30 shadow-md">
                    <h2 className="text-3xl font-bold mb-6 text-center">Sign In</h2>

                    <form
                        onSubmit={handleSignin}
                        className="space-y-4">
                        {/* Email */}
                        <div>
                            <label className="label">
                                <span className="label-text text-primary font-medium">Email</span>
                            </label>
                            <input
                                type="email"
                                name="email"
                                placeholder="you@example.com"
                                className="input input-bordered w-full rounded focus:outline-none focus:ring-1 focus:ring-secondary"
                            />
                        </div>

                        {/* Password */}
                        <div>
                            <label className="label">
                                <span className="label-text text-primary font-medium">Password</span>
                            </label>
                            <div className="relative">
                                <input
                                    type={showPassword ? 'text' : 'password'}
                                    name="password"
                                    placeholder="Ype Your Password"
                                    className="input input-bordered w-full rounded focus:outline-none focus:ring-1 focus:ring-secondary"
                                />
                                <button
                                    type="button"
                                    onClick={togglePasswordVisibility}
                                    className="absolute inset-y-0 right-3 flex items-center text-secondary focus:outline-none"
                                >
                                    {showPassword ? <FaEyeSlash /> : <FaEye />}
                                </button>
                            </div>
                        </div>
                        {/* show error message */}
                        {error && <p className='text-red-500'>✗ {error}</p>}

                        {/* Sign In Button */}
                        <button className="btn btn-secondary text-white w-full rounded mt-4">
                            Sign In
                        </button>
                    </form>

                    {/* Divider */}
                    <div className="divider">OR</div>

                    {/* Sign in with Google */}
                    <button className="btn btn-outline hover:bg-secondary/15 border-secondary w-full rounded">
                        <FcGoogle />
                        Sign in with Google
                    </button>

                    {/* Sign Up Link */}
                    <p className="mt-4 text-center text-sm text-gray-500">
                        Don’t have an account?{" "}
                        <Link to="/signup" className="text-secondary hover:underline font-medium">
                            Sign up
                        </Link>
                    </p>
                </div>
            </div>
        </div>
    );
};

export default SignIn;