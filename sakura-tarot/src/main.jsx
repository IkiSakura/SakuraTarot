import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { BrowserRouter, createBrowserRouter, RouterProvider } from 'react-router-dom'

// import Home from './pages/home/Home.jsx'
// import Journal from './pages/journal/Journal.jsx'
// import Reading from './pages/reading/Reading.jsx'

// const router = ([
//   {
//     path: "/",
//     element: <App />
//   },
//   {
//     path: "/journal",
//     element: <Journal/>
//   },
//   {
//     path: "/reading",
//     element: <Reading />
//   },
//   {
//     path: "/home",
//     element: <Home />
//   }
// ])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
    <App/>
    </BrowserRouter>
    {/* <RouterProvider router={router} />   */}
  </React.StrictMode>,
)
