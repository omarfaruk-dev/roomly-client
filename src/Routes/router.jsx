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


const router = createBrowserRouter([
    {
        path: '/',
        Component: MainLayout,
        children: [
            {
                path: '/',
                index: true,
                hydrateFallbackElement: <Spinner />,
                loader: () => fetch('http://localhost:3000/roommates'),
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
                path: '/add-roommate',
                element: <PrivateRoutes><AddRoommate /></PrivateRoutes>
            },
            {
                path: '/update-roommate/:id',
                hydrateFallbackElement: <Spinner />,
                loader: ({ params }) => fetch(`http://localhost:3000/roommates/${params.id}`),
                element: <UpdateRoommateInfo />
            },
            {
                path: '/roommate-details/:id',
                hydrateFallbackElement: <Spinner />,
                loader: ({ params }) => fetch(`http://localhost:3000/roommates/${params.id}`),
                element: <RoommateDetails />
            },
            {
                path: '/browse-listing',
                hydrateFallbackElement: <Spinner />,
                loader: () => fetch('http://localhost:3000/roommates'),
                Component: BrowseListings,
            },
            {
                path: '/my-listing',
                hydrateFallbackElement: <Spinner />,
                loader: () => fetch('http://localhost:3000/roommates'),
                element: <MyListing />
            },


        ]

    },
    {
        path: '*',
        Component: ErrorPage
    }
])


export default router;