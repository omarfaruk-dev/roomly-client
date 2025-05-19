import { createBrowserRouter } from "react-router";
import MainLayout from "../layouts/MainLayout";
import ErrorPage from "../pages/ErrorPage";


const router = createBrowserRouter([
    {
        path: '/',
        Component: MainLayout,
        children: [
            
            {
                path: '*',
                Component: ErrorPage
            }
        ]
    }
])


export default router;