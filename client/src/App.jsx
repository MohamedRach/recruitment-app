import SideBar from "./Sidebar"
import Dashboard from "./Dashboard"
import Jobs from "./jobs"
import Candidates from "./Candidates";
import './App.css'
import {BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import { useAuthContext } from "./hooks/useAuthContext";
import Profile from './profile';
import AddJob from "./AddJob";
import JobPage from "./jobPage";
import CreateJob from "./createJob";
import Register from "./register";
import Login from "./login";
function App() {
  //console.log(window.location.pathname)
  const { token } = useAuthContext()

  return (
    <Router>
      <div>
          

          <div className="content">
            <Routes>
              <Route path="/dashboard" element={token ? <Dashboard></Dashboard> : <Navigate to="/login" />}></Route>
              <Route path="/jobs" element={token ? <Jobs></Jobs>: <Navigate to="/login" />}></Route>
              <Route path="/candidates" element={token ? <Candidates></Candidates>: <Navigate to="/login" />}></Route> 
              <Route path="/candidates/profile" element={token ? <Profile></Profile> : <Navigate to="/login" />}></Route>
              <Route path="/jobs/create" element={token ? <AddJob /> : <Navigate to="/login" />}></Route>
              <Route path="/jobs/:id" element={token ? <JobPage /> : <Navigate to="/login" />}></Route>
              <Route path="/create/:id" element={token ? <CreateJob /> : <Navigate to="/login" />}></Route>
              <Route path="/login" element={!token ? <Login /> : <Navigate to="/dashboard" />}></Route>
              <Route path="/register" element={!token ? <Register /> : <Navigate to="/dashboard" />}></Route>
            </Routes>
              
          </div>
      </div> 
    </Router>
    
    
  )
}

export default App
