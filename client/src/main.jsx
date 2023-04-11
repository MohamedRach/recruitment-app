import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'
import {JobsContextProvider} from "./context/JobsContext"
import {AuthContextProvider} from "./context/AuthContext"
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <AuthContextProvider>
      <JobsContextProvider>
          <App />
      </JobsContextProvider>
    </AuthContextProvider>
  </React.StrictMode>,
)
