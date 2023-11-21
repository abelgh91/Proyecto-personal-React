import ReactDOM from "react-dom/client";
import "./index.css";
import { RouterProvider } from "react-router-dom";
import { router } from "./routes/routes.jsx";
import React from "react";
import { AuthContextProvide } from "./contexts/authContext.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <AuthContextProvide>
    <RouterProvider router={router} />
    </AuthContextProvide>
  </React.StrictMode>,
);
