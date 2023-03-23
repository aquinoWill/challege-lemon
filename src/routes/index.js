import React from 'react'
import { Home, ErrorPage } from 'pages'
import { Layout } from 'components'
import {
  createBrowserRouter,
  RouterProvider
} from 'react-router-dom'

const routes = createBrowserRouter([
  {
    element: <Layout />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: '/',
        element: <Home />
      }
    ]
  }
])

export const Router = () => <RouterProvider router={routes} />
