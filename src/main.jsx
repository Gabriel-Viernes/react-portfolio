import React from 'react'
import ReactDOM from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'

import App from './App.jsx'
import ErrorPage from './pages/ErrorPage.jsx'

import './assets/style.css'

const router = createBrowserRouter([
    {
        path: '/',
        element: <App />,
        errorElement: <ErrorPage />
    }
])
        

ReactDOM.createRoot(document.getElementById('root')).render(
    <RouterProvider router={router} />
)
