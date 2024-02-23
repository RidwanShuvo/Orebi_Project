import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import Shop from './components/layouts/Shop.jsx'
import Contact from './components/layouts/Contact.jsx'
import Signup from './components/layouts/Signup.jsx'
import Login from './components/layouts/Login.jsx'


import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";


const router = createBrowserRouter([
  {
    path: "/",
    element: <App/>,
  },
  {
    path: "/shop",
    element: <Shop/>,
  },
  {
    path: "/contact",
    element: <Contact/>,
  },
  {
    path: "/signup",
    element: <Signup/>,
  },
  {
    path: "/login",
    element: <Login/>,
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
    
  </React.StrictMode>,
  
)
