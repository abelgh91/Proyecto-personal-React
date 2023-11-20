import { createBrowserRouter } from "react-router-dom";
import { App } from "../App";
import { Register, Parques, ParqueById, NotFound, Login, Home, CheckCode, Aves, AveById, About } from "../pages";

export const router = createBrowserRouter([{
    path: "/",
    element: <App/>,
    children: [
        {
            path: "/",
            element: <Home/>,
        },
        {
            path: "/register",
            element: <Register/>,
        },
        {
            path: "/login",
            element: <Login/>,
        },
        {
            path: "/checkcode",
            element: <CheckCode/>,
        },
        {
            path: "/parques",
            element: <Parques/>,
        },
        {
            path: "/parques/item/:id",
            element: <ParqueById/>,
        },
        {
            path: "/aves",
            element: <Aves/>,
        },
        {
            path: "/aves/item/:id",
            element: <AveById/>,
        },
        {
            path: "*",
            element: <NotFound/>,
        },
        {
            path: "/about",
            element: <About/>,
        },
    ],
},
]);