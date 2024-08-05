import * as React from "react";
import * as ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import App from "./app";
import Home from "./components/Resume/Home";
import "./index.css";
import ErrorPage from "./utils/Error";

const router = createBrowserRouter([
    {
        path: "/",
        element: <App />,
        errorElement: <ErrorPage />,
        children: [
            { path: "", element: <Home /> },
            { path: "about", element: <div>Hi there</div> },
            { path: "education", element: <div>Hi there</div> },
            {
                path: "experience",
                element: <div>Hi there</div>,
                errorElement: <ErrorPage />,
            },
        ],
    },
]);

ReactDOM.createRoot(document.getElementById("root")!).render(
    <React.StrictMode>
        <RouterProvider router={router} />
    </React.StrictMode>
);
