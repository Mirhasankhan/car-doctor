import React from 'react'
import ReactDOM from 'react-dom/client'
import { RouterProvider } from 'react-router-dom'
import './index.css'
import router from './Routes/Routes.jsx'
import AuthProviders from './Providers/AuthProviders'

ReactDOM.createRoot(document.getElementById('root')).render(
  <div className='max-w-7xl mx-auto'>
    <AuthProviders>
      <React.StrictMode>
        <RouterProvider router={router} />
      </React.StrictMode>,
    </AuthProviders>
  </div>
)
