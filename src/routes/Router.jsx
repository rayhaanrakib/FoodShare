import { createBrowserRouter } from "react-router-dom";
import Layout from './../utils/Layout';
import Error from "../pages/Error";
import Home from "../pages/Home";
import Login from './../pages/Login';
import Register from './../pages/Register';
import Available from "../pages/Available";
import FoodDetails from "../pages/FoodDetails";
import PrivateRoute from "./PrivateRoute";
import AddFood from './../pages/AddFood';
import FoodRequests from '../pages/Management/FoodRequests';
import ManageFoods from '../pages/Management/ManageFoods';
import UpdateFood from './../pages/Management/UpdateFood';
import ManageRequests from './../pages/Management/ManageRequests';


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
                path: "food_details/:id",
                element: <PrivateRoute><FoodDetails></FoodDetails></PrivateRoute>
            },
            {
                path: "add",
                element: <PrivateRoute><AddFood></AddFood></PrivateRoute>
            },
            {
                path: "requests",
                element: <PrivateRoute><FoodRequests></FoodRequests></PrivateRoute>
            },
            {
                path: "manage",
                element: <PrivateRoute><ManageFoods></ManageFoods></PrivateRoute>
            },
            {
                path: "/manage/update/:id",
                element: <PrivateRoute><UpdateFood></UpdateFood></PrivateRoute>
            },
            {
                path: "/manage/requests/:id",
                element: <PrivateRoute><ManageRequests></ManageRequests></PrivateRoute>
            },
        ]
    }
])

export default Router;