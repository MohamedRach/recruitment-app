import SideBar from "./Sidebar"
import Dashboard from "./Dashboard"
import Jobs from "./jobs"
import Candidates from "./Candidates";
import './App.css'
import {BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Profile from './profile';
function App() {
  /**/
  return (
    <Router>
      <div>
          <SideBar />
          <div className="content">
            <Routes>
              <Route path="/dashboard" element={<Dashboard></Dashboard>}></Route>
              <Route path="/jobs" element={<Jobs></Jobs>}></Route>
              <Route path="/candidates" element={<Candidates></Candidates>}></Route> 
              <Route path="/candidates/profile" element={<Profile></Profile>}></Route>
            </Routes>
              
          </div>
      </div> 
    </Router>
    
    
  )
}

export default App
