import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../componets/layout/MainLayout";
import Home from "../componets/Pages/Home";
import Career from "../componets/Pages/Career";
import About from "../componets/Pages/About";
import Login from "../componets/Pages/Login";
import Register from "../componets/Pages/Register";



const routes=createBrowserRouter([
    {
        path:'/',
        element:<MainLayout></MainLayout>,
        children:[
            {
                path:'/',
                element:<Home></Home>
    
            },
            {
                path:'/career',
                element:<Career></Career>,
    
            },
            {
                path:'/about',
                element:<About></About>,
    
            },
            {
                path:'/login',
                element:<Login></Login>,
    
            },
            {
                path:'/register',
                element:<Register></Register>,
    
            },
        ]
    }
]);

export default routes;