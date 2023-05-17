import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../Layout/MainLayout";
import Home from "../Pages/Home/Home/Home";
import Login from "../Pages/Login/Login";
import Signup from "../Pages/Signup/Signup";
import Book from "../Pages/Book/Book";
import Bookings from "../Pages/Bookings/Bookings";
import PrivateRoutes from "./PrivateRoutes";


const router = createBrowserRouter([
    {
        path: '/',
        element: <MainLayout/>,
        children : [
            {
                path: '/',
                element: <Home/>
            },
            {
                path: '/login',
                element: <Login></Login>
            },
            {
                path: '/signup',
                element: <Signup/>
            },
            {
                path: '/book/:id',
                element: <PrivateRoutes><Book/></PrivateRoutes>,
                loader: ({params})=> fetch(`http://localhost:5000/services/${params.id}`)
            },
            {
                path: '/bookings',
                element: <PrivateRoutes><Bookings/></PrivateRoutes>
            }
        ]
    }
])

export default router;