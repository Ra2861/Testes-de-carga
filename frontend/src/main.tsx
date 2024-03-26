import React from 'react'
import ReactDOM from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import { Auth0Provider } from '@auth0/auth0-react'

import './style.scss'
import Login from './pages/Login'
import Content from './pages/Content'
import FetchCustomersPage from './pages/User'
import Search from './pages/Search'
import Client from './pages/Client'
import { ReceiveAnswer } from './pages/receiveAnswer'
import UpdateUserForm from './pages/UpdateClientData/UpdateClientData'

const router = createBrowserRouter([
  {
    path: '/',
    element: <Login />,
  },
  {
    path: '/home',
    element: <Content />,
    children: [
      {
        path: 'search',
        element: <Search />,
      },
      {
        path: 'client',
        element: <Client />,
      },
      {
        path: 'answer',
        element: <ReceiveAnswer />,
      },
      {
        path: 'update-user',
        element: <UpdateUserForm />,
      },
      {
        path: 'user',
        element: <FetchCustomersPage />,
      },
    ],
  },
])

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <Auth0Provider
      domain={import.meta.env.VITE_AUTH0_DOMAIN}
      clientId={import.meta.env.VITE_AUTH0_CLIENT_ID}
      authorizationParams={{
        redirect_uri: window.location.origin,
      }}
      useRefreshTokens
      cacheLocation="localstorage"
    >
      <RouterProvider router={router} />
    </Auth0Provider>
  </React.StrictMode>,
)
