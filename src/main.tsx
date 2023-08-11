import { QueryClientProvider } from '@tanstack/react-query'
import React from 'react'
import ReactDOM from 'react-dom/client'

import App from './App'
import queryClient from './config/reactQuery'

import './index.css'

const root = ReactDOM.createRoot(document.getElementById('root')!)

// Setup MSW mock server in development
if (process.env.NODE_ENV === 'development') {
  // Certify MSW's Service Worker is available before start React app.
  import('../mocks/browser')
    .then(({ worker }) => {
      worker.start({
        onUnhandledRequest: 'bypass',
      })
    }) // Run <App /> when Service Worker is ready to intercept requests.
    .then(() => {
      root.render(
        <React.StrictMode>
          <QueryClientProvider client={queryClient}>
            <App />
          </QueryClientProvider>
        </React.StrictMode>,
      )
    })
  // Never setup MSW mock server in production
} else if (process.env.NODE_ENV === 'production') {
  root.render(
    <React.StrictMode>
      <QueryClientProvider client={queryClient}>
        <App />
      </QueryClientProvider>
    </React.StrictMode>,
  )
}
