import * as React from "react";
import * as ReactDOM from "react-dom/client";
import { createHashRouter, RouterProvider } from "react-router-dom";
import App from "./app";
import About from "./components/Resume/About";
import Contact from "./components/Resume/Contact";
import Home from "./components/Resume/Home";
import Portfolio from "./components/Resume/Portfolio";
import "./index.css";
import ErrorPage from "./utils/Error";

const router = createHashRouter([
    {
        path: "/",
        element: <App />,
        errorElement: <ErrorPage />,
        children: [
            { path: "/", element: <Home />, errorElement: <ErrorPage /> },
            {
                path: "/about",
                element: <About />,
                errorElement: <ErrorPage />,
            },
            {
                path: "/portfolio",
                element: <Portfolio />,
                errorElement: <ErrorPage />,
            },
            {
                path: "/contact",
                element: <Contact />,
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
