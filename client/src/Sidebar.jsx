import { Link, NavLink } from "react-router-dom";
const SideBar = () => {
    return (
        <div className="SideBar">
            <div className="logo">
                <h4>Recruitement App</h4>
            </div>
            <div className="menu">
                <ul>
                    <li><NavLink exact className="menuItem" to="/dashboard">DashBoard</NavLink></li>
                    <li><Link exact className="menuItem" to="/jobs">Jobs</Link></li>
                    <li><Link exact className="menuItem" to="/candidates">Candidates</Link></li>
                </ul>
            </div>

            <div className="settings">
                <p>Settings</p>
            </div>
        </div>
    );
}
 
export default SideBar;