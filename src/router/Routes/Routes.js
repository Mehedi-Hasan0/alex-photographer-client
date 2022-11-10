import { createBrowserRouter } from "react-router-dom";
import Main from "../../layout/Main";
import Home from "../../pages/Home/Home/Home";
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
                loader: () => fetch('http://localhost:5000/limitedServices')
            },
            {
                path: '/services',
                element: <Services />,
                loader: () => fetch('http://localhost:5000/allServices')
            },
            {
                path: '/serviceDetails/:id',
                element: <ServiceDetails />,
                loader: ({ params }) => fetch(`http://localhost:5000/serviceDetails/${params.id}`)
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