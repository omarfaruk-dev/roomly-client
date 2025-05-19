import { createBrowserRouter } from "react-router";
import MainLayout from "../layouts/MainLayout";
import ErrorPage from "../pages/ErrorPage";
import Home from "../pages/Home";


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
                path: '*',
                Component: ErrorPage
            }
        ]
    }
])


export default router;