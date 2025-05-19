import { Link, useRouteError } from 'react-router';
import Button from '../components/ui/Button';

const ErrorPage = () => {

    const error = useRouteError();
    return (
        <div>
            <title>404 Not Found</title>
            <div className="min-h-[calc(100vh-85px)] flex flex-col items-center justify-center bg-white px-4 py-12">
                <img
                    src="https://i.ibb.co.com/pB3FY9n6/404-error.jpg"
                    alt="Not Found"
                    className="w-100 rounded-xl mb-5 shadow hover:shadow-lg duration-700 transform hover:-translate-y-1"
                />
                <h2 className="text-2xl font-semibold text-gray-800 mb-2">Oops! {error?.error?.message || 'Something went wrong!'}</h2>
                <p className="text-gray-600 text-center max-w-md mb-6">
                    The page you're looking for doesn't exist or has been moved. Let's get you back to something tasty.
                </p>
                <Link to='/'><Button label={'Back to Home'} /></Link>
            </div>
        </div>
    );

};

export default ErrorPage;