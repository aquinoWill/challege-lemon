import React from 'react'
import {
  Home,
  SimpleDialog,
  FullDialog,
  BlockOverlay,
  DialogClose,
  ErrorPage
} from 'pages'
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
      },
      {
        path: '/simple',
        element: <SimpleDialog />
      },
      {
        path: '/full',
        element: <FullDialog />
      },
      {
        path: '/block-overlay',
        element: <BlockOverlay />
      },
      {
        path: '/close',
        element: <DialogClose />
      }
    ]
  }
])

export const Router = () => <RouterProvider router={routes} />
