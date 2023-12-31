import { createBrowserRouter } from "react-router-dom";
import { App } from "../App";
import {
  Register,
  Parques,
  ParqueById,
  NotFound,
  Login,
  Home,
  CheckCode,
  Aves,
  AveById,
  About,
  Dashboard,
  ForgotPassword,
  Profile,
  FormProfile,
  ChangePassword,
  Likes,
} from "../pages";
import { Protected, ProtectedCheckChildren } from "../components";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/register",
        element: <Register />,
      },
      {
        path: "/login",
        element: <Login />,
      },
      {
        path: "/dashboard",
        element: 
        (<Protected>
          <Dashboard />
        </Protected>),
      },
      {
        path: "/forgotPassword",
        element: <ForgotPassword />,
      },
      {
        path: "/checkcode",
        element: 
        (<ProtectedCheckChildren>
          <CheckCode />
        </ProtectedCheckChildren>),
      },
      {
        path: "/profile",
        element: 
        (<Protected>
          <Profile />
        </Protected>),
        children: [
          {
            path: "/profile/changepassword",
            element: (
              <Protected>
                <ChangePassword/>
              </Protected>
            )
          },
          {
            path: "/profile/likes",
            element: (
              <Protected>
                <Likes/>
              </Protected>
            )
          },
          {
            path: "/profile/",
            element: (
              <Protected>
                <FormProfile/>
              </Protected>
            )
          }
        ]
      },
      {
        path: "/parques",
        element: 
        (<Protected>
          <Parques />
        </Protected>),
      },
      {
        path: "/parques/item/:id",
        element: 
        (<Protected>
          <ParqueById />
        </Protected>),
      },
      {
        path: "/aves",
        element: 
        (<Protected>
          <Aves />
        </Protected>),
      },
      {
        path: "/aves/item/:id",
        element:
        (<Protected>
          <AveById />
        </Protected>),
      },
      {
        path: "*",
        element: <NotFound />,
      },
      {
        path: "/about",
        element: 
        (<Protected>
          <About />
        </Protected>),
      },
    ],
  },
]);
