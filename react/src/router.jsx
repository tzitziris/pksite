import {createBrowserRouter} from "react-router-dom";
import Home from "./views/Home";
import News from "./views/News";
import About from "./views/About";
import NotFound from "./views/NotFound";
import React from "react";
import DefaultLayout from "./components/DefaultLayout.jsx";
// components/DefaultLayout.jsx

const router = createBrowserRouter([
    {
        path: '/',   
        element: <DefaultLayout />,  
        children: [
          {
            path: 'home',
            element: <Home />,
          },
          {
            path: 'about',
            element: <About />,
          },
          {
            path: 'news',
            element: <News />,
          },
          {
            path: '*',
            element: <NotFound />,
          },
        ],
      },
])

export default router;