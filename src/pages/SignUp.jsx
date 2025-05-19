import { Link } from "react-router";
import signUpImg from '../assets/signup.svg'
import { FcGoogle } from "react-icons/fc";
import { use, useState } from "react";
import { AuthContext } from "../context/AuthContext";
import toast from "react-hot-toast";
import { FaEye, FaEyeSlash } from "react-icons/fa";

const SignUp = () => {

    const { createUser } = use(AuthContext);

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


    const handleSignUp = (e) => {
        e.preventDefault();

        const form = e.target;
        const formData = new FormData(form);
        const { email, password, ...restFormData } = Object.fromEntries(formData.entries());


        //create user in the firebase
        createUser(email, password)
            .then((userCredential) => {
                const currentUser = userCredential.user;
                console.log(currentUser);
                const userProfile = {
                    email, ...restFormData,
                    uid: currentUser.uid,
                }
                console.log(userProfile);
            })
            .catch((error) => {
                const errorCode = error.code;
                const errorMessage = error.message;
                console.error('Error creating user:', errorCode, errorMessage);
            });





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

    };




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
                        onSubmit={handleSignUp}
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
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                placeholder="you@example.com"
                                className="input input-bordered w-full rounded focus:outline-none focus:ring-2 focus:ring-secondary"
                            />
                        </div>
                        {/* photo */}
                        <div>
                            <label className="label">
                                <span className="label-text font-medium">Photo Url</span>
                            </label>
                            <input
                                type="text"
                                name="photo"
                                placeholder="Photo Url"
                                className="input input-bordered w-full rounded focus:outline-none focus:ring-2 focus:ring-secondary"
                            />
                        </div>

                        {/* Password */}
                        <div>
                            <label className="label">
                                <span className="label-text font-medium">Password</span>
                            </label>
                            <div className="relative">
                                <input
                                    name="password"
                                    value={password}
                                    onFocus={() => setShowValidation(true)}
                                    onChange={(e) => setPassword(e.target.value)}
                                    type={showPassword ? 'text' : 'password'}
                                    className="input input-bordered w-full focus:outline-none focus:ring-2 focus:ring-secondary"
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