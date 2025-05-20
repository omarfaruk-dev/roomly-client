import { createBrowserRouter } from "react-router";
import MainLayout from "../layouts/MainLayout";
import ErrorPage from "../pages/ErrorPage";
import Home from "../pages/Home";
import SignIn from "../pages/SignIn";
import SignUp from "../pages/SignUp";
import AddRoommate from "../pages/AddRoommate";


const router = createBrowserRouter([
    {
        path: '/',
        Component: MainLayout,
        children: [
            {
                path: '/',
                index: true,
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
                element: <AddRoommate/>
            },
            
            {
                path: '*',
                Component: ErrorPage
            }
        ]
    }
])


export default router;