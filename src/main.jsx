import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { UiContextProvider } from './contexts/UiContext.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
    <UiContextProvider>
      <App />
    </UiContextProvider>
)
