import { createBrowserRouter } from "react-router-dom";
import Main from "../../layout/Main";
import Home from "../../pages/Home/Home/Home";
import ClientReviews from "../../pages/Services/ClientReviews";
import ServiceDetails from "../../pages/Services/ServiceDetails";
import Services from "../../pages/Services/Services";
import SignIn from "../../pages/SignIn/SignIn";
import SignUp from "../../pages/SignUp/SignUp";

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
                path: '/signIn',
                element: <SignIn />
            },
            {
                path: '/signup',
                element: <SignUp />
            }
        ]
    }
])

export default router;