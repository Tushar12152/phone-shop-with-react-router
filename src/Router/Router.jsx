import { createBrowserRouter } from "react-router-dom";
import Route from "../Components/Route/Route";
import Home from "../Components/Pages/Home/Home";
import Favorite from "../Components/Pages/Favorite/Favorite";
import LogIn from "../Components/Pages/login/LogIn";
import ErrorPage from "../Components/Error page/ErrorPage";
import PhoneDetail from "../Components/Phones/phone/phoneDetail/PhoneDetail";

const Router = createBrowserRouter([
    {
        path:'/',
        element:<Route></Route>,
        errorElement:<ErrorPage></ErrorPage>,
        children:[
            {
                 path:'/',
                 element:<Home></Home>,
                 loader:()=>fetch('/public/phones.json')
            },
            
            {
                path:'/favorite',
                element:<Favorite></Favorite>
            },
            {
                path:'/login',
                element:<LogIn></LogIn>
            },
            {
                path:'/phones/:id',
                element:<PhoneDetail></PhoneDetail>,
                loader:()=>fetch('/phones.json')
            }
        ]
    }
])


export default Router;