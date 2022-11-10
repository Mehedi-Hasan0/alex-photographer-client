import { createBrowserRouter } from "react-router-dom";
import Main from "../../layout/Main";
import AddServices from "../../pages/AddServices/AddServices";
import Blogs from "../../pages/Blogs/Blogs";
import Home from "../../pages/Home/Home/Home";
import MyReviews from "../../pages/MyReviews/MyReviews";
import ServiceDetails from "../../pages/Services/ServiceDetails";
import Services from "../../pages/Services/Services";
import SignIn from "../../pages/SignIn/SignIn";
import SignUp from "../../pages/SignUp/SignUp";
import PrivateRoute from "../PrivateRoute/PrivateRoute";
import error from '../../assets/error/error.svg';

const router = createBrowserRouter([
    {
        path: '/',
        element: <Main />,
        children: [
            {
                path: '/',
                element: <Home />,
                loader: () => fetch('https://alex-photographer-server.vercel.app/limitedServices')
            },
            {
                path: '/services',
                element: <Services />,
                loader: () => fetch('https://alex-photographer-server.vercel.app/allServices')
            },
            {
                path: '/serviceDetails/:id',
                element: <ServiceDetails />,
                loader: ({ params }) => fetch(`https://alex-photographer-server.vercel.app/serviceDetails/${params.id}`)
            },
            {
                path: '/addServices',
                element: <PrivateRoute><AddServices /></PrivateRoute>
            },
            {
                path: '/myReviews',
                element: <PrivateRoute><MyReviews /></PrivateRoute>
            },
            {
                path: '/blogs',
                element: <Blogs />
            },
            {
                path: '/signIn',
                element: <SignIn />
            },
            {
                path: '/signup',
                element: <SignUp />
            }
        ]
    },
    {
        path: '*',
        element: <div>
            <h1 className='font-poppins font-medium text-4xl sm:text-5xl mx-auto mt-5'>Page not found <span className=' text-blue-400'> :(</span></h1>
            <img className='w-[400px] h-[400px] sm:w-[500px] sm:h-[500px] mx-auto' src={error} alt="error" /></div>
    }
])

export default router;