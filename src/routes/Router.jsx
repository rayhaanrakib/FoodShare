import { createBrowserRouter } from "react-router-dom";
import Layout from './../utils/Layout';
import Error from "../pages/Error";
import Home from "../pages/Home";
import Login from './../pages/Login';
import Register from './../pages/Register';
import Available from "../pages/Available";
import FoodDetails from "../pages/FoodDetails";
import PrivateRoute from "./PrivateRoute";


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
            {
                path: "available",
                element: <Available></Available>
            },
            {
                path: "/food_details/:id",
                element: <PrivateRoute><FoodDetails></FoodDetails></PrivateRoute>
            },
        ]
    }
])

export default Router;