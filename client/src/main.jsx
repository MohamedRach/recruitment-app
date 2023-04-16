import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'
import {JobsContextProvider} from "./context/JobsContext"
import {AuthContextProvider} from "./context/AuthContext"
import {CandidatesContextProvider} from './context/candidatesContext';
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <AuthContextProvider>
      <JobsContextProvider>
          <CandidatesContextProvider>
              <App />
          </CandidatesContextProvider>
      </JobsContextProvider>
    </AuthContextProvider>
  </React.StrictMode>,
)
