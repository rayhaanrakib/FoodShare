import { createBrowserRouter } from "react-router-dom";
import Layout from './../utils/Layout';
import Error from "../pages/Error";
import Home from "../pages/Home";
import Login from './../pages/Login';
import Register from './../pages/Register';


const Router = createBrowserRouter([
    {
        path: "/",
        element: <Layout></Layout>,
        errorElement: <Error></Error>,
        children: [
            {
                path: "/",
                element: <Home></Home>
            },
            {
                path: "login",
                element: <Login></Login>
            },
            {
                path: "register",
                element: <Register></Register>
            },
        ]
    }
])

export default Router;