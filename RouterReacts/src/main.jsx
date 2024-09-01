import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Layout from './components/Layout.jsx'
import Home from './components/Home.jsx'
import About from './components/About.jsx'

import Contect from './components/Contect.jsx'
import User from './components/User.jsx'

const router = createBrowserRouter([{
  path: '/',
  element: <Layout></Layout>,
  children:[
    {
                path: "",
                element: <Home />
    },
    {
        path: "about",
        element:<About></About>
    },
    {
      path: "contect",
      element: <Contect></Contect>
    }
    ,
    {
      path: "user/:userid",
      element: <User></User>
    }
  ]
}])
createRoot(document.getElementById('root')).render(
  <StrictMode>
   <RouterProvider  router={router} />
  </StrictMode>,
)
