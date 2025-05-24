import { createBrowserRouter } from "react-router";
import MainLayout from "../layouts/MainLayout";
import ErrorPage from "../pages/ErrorPage";
import Home from "../pages/Home";
import SignIn from "../pages/SignIn";
import SignUp from "../pages/SignUp";
import AddRoommate from "../pages/AddRoommate";
import Spinner from "../components/ui/Spinner";
import RoommateDetails from "../pages/RoommateDetails";
import PrivateRoutes from "./PrivateRoutes";
import BrowseListings from "../pages/browsListing/BrowsListing";
import MyListing from "../pages/myListing/MyListing";
import UpdateRoommateInfo from "../pages/UpdateRoommateInfo";
import MyProfile from "../pages/MyProfile";
import Privacy from "../pages/Privacy";
import TermsCondition from "../pages/TermsCondition";


const router = createBrowserRouter([
    {
        path: '/',
        Component: MainLayout,
        children: [
            {
                path: '/',
                index: true,
                hydrateFallbackElement: <Spinner />,
                loader: () => fetch('https://roomly-server.vercel.app/featured-roommates'),
                Component: Home,
            },
            {
                path: '/signin',
                Component: SignIn
            },
            {
                path: '/signup',
                Component: SignUp,
            },
            {
                path: '/my-profile',
                element: <PrivateRoutes><MyProfile/></PrivateRoutes>
            },
            {
                path: '/add-roommate',
                element: <PrivateRoutes><AddRoommate /></PrivateRoutes>
            },
            {
                path: '/update-roommate/:id',
                hydrateFallbackElement: <Spinner />,
                loader: ({ params }) => fetch(`https://roomly-server.vercel.app/roommates/${params.id}`),
                element: <UpdateRoommateInfo />
            },
            {
                path: '/roommate-details/:id',
                hydrateFallbackElement: <Spinner />,
                loader: ({ params }) => fetch(`https://roomly-server.vercel.app/roommates/${params.id}`),
                element: <PrivateRoutes><RoommateDetails /></PrivateRoutes>
            },
            {
                path: '/browse-listing',
                hydrateFallbackElement: <Spinner />,
                loader: () => fetch('https://roomly-server.vercel.app/roommates'),
                Component: BrowseListings,
            },
            {
                path: '/my-listing',
                hydrateFallbackElement: <Spinner />,
                loader: () => fetch('https://roomly-server.vercel.app/roommates'),
                element: <PrivateRoutes><MyListing /></PrivateRoutes>
            },
            {
                path: '/privacy-policy',
                Component: Privacy,
            },
            {
                path: '/terms-and-conditions',
                Component: TermsCondition,
            },

        ]

    },
    {
        path: '*',
        Component: ErrorPage
    }
])


export default router;