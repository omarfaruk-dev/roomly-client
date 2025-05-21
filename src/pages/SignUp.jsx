import { Link, Navigate, useNavigate } from "react-router";
import { FcGoogle } from "react-icons/fc";
import { use, useState } from "react";
import { AuthContext } from "../context/AuthContext";
import toast from "react-hot-toast";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import { DotLottieReact } from "@lottiefiles/dotlottie-react";
import Swal from "sweetalert2";
import Spinner from "../components/ui/Spinner";

const SignUp = () => {

    const { user, createUser, googleSignIn, setUser, updateUser } = use(AuthContext);

    const navigate = useNavigate()

    const [showPassword, setShowPassword] = useState(false);
    const togglePasswordVisibility = () => setShowPassword(!showPassword);

    //validation
    const [password, setPassword] = useState('');
    const [email, setEmail] = useState('');
    const [showValidation, setShowValidation] = useState(false);

    const validation = {
        length: password.length >= 6,
        lowerUpper: /(?=.*[a-z])(?=.*[A-Z])/.test(password),
        numberOrSymbol: /(?=.*[0-9])|(?=.*[^A-Za-z0-9])/.test(password),
        emailNotIncluded: !password.includes(email.split('@')[0]),
    };
    // email validation 
    const emailErrorMessages = {
        "auth/invalid-email": "Please enter a valid email address.",
        "auth/email-already-in-use": "This email is already registered. Please use a different one or log in instead.",
        "auth/user-not-found": "No account found with this email.",
        "auth/missing-email": "Please provide your email address.",
    };

    const handleSignUp = (e) => {
        e.preventDefault();

        const form = e.target;
        const name = form.name.value;
        const email = form.email.value;
        const photo = form.photo.value;
        const password = form.password.value;
        const formData = { name, email, password, photo }
        // const formData = new FormData(form);
        // const { email, password, ...restFormData } = Object.fromEntries(formData.entries());
        console.log(formData);

        //validation
        const isValid = {
            length: password.length >= 6,
            lowerUpper: /(?=.*[a-z])(?=.*[A-Z])/.test(password),
            numberOrSymbol: /(?=.*[0-9])|(?=.*[^A-Za-z0-9])/.test(password),
            emailNotIncluded: !password.includes(email.split('@')[0]),
        };

        if (!Object.values(isValid).every(Boolean)) {
            toast.error('Please meet all password requirements.');
            setShowValidation(true); // force the UI to show validation
            return;
        }

        //create user in the firebase
        // Step 1: Create user in Firebase Auth
        createUser(email, password)
            .then((userCredential) => {
                const currentUser = userCredential.user;

                updateUser({ displayName: name, photoURL: photo })
                    .then(() => {
                        const updatedUser = {
                            ...currentUser,
                            displayName: name,
                            photoURL: photo,
                        };

                        setUser(updatedUser);
                        Swal.fire({
                            position: "center",
                            icon: "success",
                            title: "Sign Up Success!",
                            showConfirmButton: false,
                            timer: 1500,
                        });
                        navigate(location.state || '/');
                    })
                    .catch((error) => {
                        console.error("Update user error:", error);
                        toast.error(error.message || "Profile update failed!");
                    });
            })
            .catch(error => {
                console.error("Signup error:", error);
                toast.error(emailErrorMessages[error.code] || 'Signup failed!');
            });

    };

    //google signin
    const handleGoogleSignIn = () => {
        googleSignIn()
            .then(result => {
                setUser(result.user);
                Navigate(`${location.state ? location.state : '/'}`)
                toast.success('successfully login with google')
            })
            .catch(error => {
                const errorMessage = error.message;
                toast.error(errorMessage || 'Something went wrong!');
                console.log(error.message);
            })
    }



    // if (user) {
    //     return <>
    //         <Spinner />
    //         {navigate('/')}
    //     </>
    // }

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
                    <h2 className="text-3xl text-primary font-bold mb-6 text-center">Sign Up</h2>

                    <form
                        onSubmit={handleSignUp}
                        className="space-y-4">
                        {/* name */}
                        <div>
                            <label className="label">
                                <span className="label-text text-primary font-medium">Name</span>
                            </label>
                            <input
                                type="text"
                                name="name"
                                placeholder="Your name"
                                required
                                className="input input-bordered w-full rounded focus:outline-none focus:ring-1 focus:ring-secondary"
                            />
                        </div>
                        {/* Email */}
                        <div>
                            <label className="label">
                                <span className="label-text text-primary font-medium">Email</span>
                            </label>
                            <input
                                type="email"
                                name="email"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                placeholder="you@example.com"
                                className="input input-bordered w-full rounded focus:outline-none focus:ring-1 focus:ring-secondary"
                            />
                        </div>
                        {/* photo */}
                        <div>
                            <label className="label">
                                <span className="text-primary label-text font-medium">Photo Url</span>
                            </label>
                            <input
                                type="text"
                                name="photo"
                                placeholder="Photo Url"
                                className="input input-bordered w-full rounded focus:outline-none focus:ring-1 focus:ring-secondary"
                            />
                        </div>

                        {/* Password */}
                        <div>
                            <label className="label">
                                <span className="text-primary label-text font-medium">Password</span>
                            </label>
                            <div className="relative">
                                <input
                                    name="password"
                                    value={password}
                                    onFocus={() => setShowValidation(true)}
                                    onChange={(e) => setPassword(e.target.value)}
                                    type={showPassword ? 'text' : 'password'}
                                    className="input input-bordered w-full focus:outline-none focus:ring-1 focus:ring-secondary"
                                    placeholder="Enter your password"
                                    required
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
                        {/* Password Validation */}
                        {showValidation && (
                            <ul className="mt-2 text-sm space-y-1">
                                <li className={validation.length ? "text-green-600" : "text-red-600"}>
                                    {validation.length ? "✔" : "✘"} at least 6 characters
                                </li>
                                <li className={validation.lowerUpper ? "text-green-600" : "text-red-600"}>
                                    {validation.lowerUpper ? "✔" : "✘"} both lower & upper case
                                </li>
                                <li className={validation.numberOrSymbol ? "text-green-600" : "text-red-600"}>
                                    {validation.numberOrSymbol ? "✔" : "✘"} a number or symbol
                                </li>
                                <li className={validation.emailNotIncluded ? "text-green-600" : "text-red-600"}>
                                    {validation.emailNotIncluded ? "✔" : "✘"} not your email address
                                </li>
                            </ul>
                        )}


                        {/* Sign In Button */}
                        <button type="submit" className="btn btn-secondary text-white w-full rounded mt-4">
                            Sign Up
                        </button>
                    </form>

                    {/* Divider */}
                    <div className="divider">OR</div>

                    {/* Sign in with Google */}
                    <button
                        onClick={handleGoogleSignIn}
                        className="btn btn-outline hover:bg-secondary/15 border-secondary w-full rounded">
                        <FcGoogle />
                        Continue with Google
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