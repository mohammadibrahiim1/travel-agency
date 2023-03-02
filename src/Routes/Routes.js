import { createBrowserRouter } from "react-router-dom";
import Root from "../Layout/Root";
import ForgetPassword from "../Pages/ForgetPassword/ForgetPassword";
import Home from "../Pages/Home/Home";
import LogIn from "../Pages/LogIn/LogIn";
import SetPassword from "../Pages/SetPassword/SetPassword";
import SignIn from "../Pages/SignIn/SignIn";
import VerifyAccount from "../Pages/VerifyAccount/VerifyAccount";

export const router = createBrowserRouter([
    {
        path:'/',
        element:<Root></Root>,
        children:[
            {
                path:'/',
                element:<Home></Home>
            },
            {
                path:'/signin',
                element:<SignIn></SignIn>
            },
            {
                path:'/login',
                element:<LogIn></LogIn>
            },
            {
                path:'/forgotpassword',
                element:<ForgetPassword></ForgetPassword>
            },
            {
                path:'/verify',
                element:<VerifyAccount></VerifyAccount>
            },
            {
                path:'/setpassword',
                element:<SetPassword></SetPassword>
            },

        ]
    }
])