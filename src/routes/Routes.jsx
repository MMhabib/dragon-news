import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../componets/layout/MainLayout";
import Home from "../componets/Home";


const routes=createBrowserRouter([
    {
        path:'/',
        element:<MainLayout></MainLayout>,
        children:[
            {
                path:'/',
                element:<Home></Home>
    
            }
        ]
    }
]);

export default routes;