// import { StrictMode } from 'react'
// import { createRoot } from 'react-dom/client'
// // import App from './App.jsx'
// import './index.css'
// import router from "./router.jsx"
// import { RouterProvider } from 'react-router-dom'
// import React from 'react'
// import ReactDOM from 'react-dom/client'
// // import { createRoot } from 'react-dom/client';  // Import createRoot from 'react-dom/client'

// ReactDOM.createRoot(document.getElementById('root')).render(
//   <React.StrictMode>
//     <RouterProvider router={router} /> 
//   </React.StrictMode>
// );

import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { RouterProvider } from 'react-router-dom'
import router from './router.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>

    {/* <App />   */}
    <RouterProvider router={router}/>
  </StrictMode>
)
