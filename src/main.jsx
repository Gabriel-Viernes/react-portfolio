import React from 'react'
import ReactDOM from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'

import App from './App.jsx'
import ErrorPage from './pages/ErrorPage.jsx'
import AboutPage from './pages/AboutPage.jsx'
import RecentPage from './pages/RecentPage.jsx'
import ContactPage from './pages/ContactPage.jsx'

const router = createBrowserRouter([
    {
        path: '/',
        element: <App />,
        errorElement: <ErrorPage />,
        children: [
            {
                index:true,
                element: <AboutPage />
            },
            {
                path:'recent',
                element: <RecentPage />
            },
            {
                path:'contact',
                element: <ContactPage />
            }
        ]
    }
])
        

ReactDOM.createRoot(document.getElementById('root')).render(
    <RouterProvider router={router} />
)
