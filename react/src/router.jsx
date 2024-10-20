import {createBrowserRouter} from "react-router-dom";
import Home from "./views/Home";
import News from "./views/News";
import About from "./views/About";
import NotFound from "./views/NotFound";
import React from "react";

const router = createBrowserRouter([
    {
        path: '/home',
        element: <Home />
    },
    {
        path: '/about',
        element: <About />
    },
    {
        path: '/news',
        element: <News />
    },
    {
        path: '*',
        element: <NotFound />
    }
])

export default router;