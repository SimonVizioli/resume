import * as React from "react";
import * as ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import App from "./app";
import Home from "./components/Resume/Home";
import "./index.css";
import ErrorPage from "./utils/Error";
import About from "./components/Resume/About";
import Portfolio from "./components/Resume/Portfolio";
import Contact from "./components/Resume/Contact";

const router = createBrowserRouter([
    {
        path: "/",
        element: <App />,
        errorElement: <ErrorPage />,
        children: [
            { path: "resume", element: <Home />, errorElement: <ErrorPage /> },
            {
                path: "/resume/about",
                element: <About />,
                errorElement: <ErrorPage />,
            },
            {
                path: "/resume/portfolio",
                element: <Portfolio />,
                errorElement: <ErrorPage />,
            },
            {
                path: "/resume/contact",
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
