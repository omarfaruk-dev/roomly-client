import { Link, useRouteError } from 'react-router';
import { DotLottieReact } from '@lottiefiles/dotlottie-react';

const ErrorPage = () => {

    const error = useRouteError();
    return (
        <div>
            <title>404 Not Found</title>
            <div className="min-h-screen flex flex-col items-center justify-center bg-primary/15 px-4 py-12">
                <DotLottieReact
                      src="https://lottie.host/c4c9d330-1102-4939-8b2e-65fb7d0481f7/a9KnqBnJF2.lottie"

                    loop
                    autoplay
                    style={{ width: '100%', maxWidth: '750px' }}
                />
                <h2 className="text-2xl font-semibold text-primary mb-2 mt-5">Oops! {error?.error?.message || 'Something went wrong!'}</h2>
                <p className="text-white text-center max-w-md mb-6">
                    The page you're looking for doesn't exist or has been moved. Let's get you back to something tasty.
                </p>
                {/* <Link to='/'><Button label={'Back to Home'} /></Link> */}
                <Link to='/' className='btn bg-[#5046E5] outline-none '>Back to home</Link>
            </div>
        </div>
    );

};

export default ErrorPage;