import { Link } from "react-router-dom";
const SideBar = () => {
    return (
        <div className="SideBar">
            <div className="logo">
                <h4>Recruitement App</h4>
            </div>
            <div className="menu">
                <ul>
                    <li><Link to="/dashboard">DashBoard</Link></li>
                    <li><Link to="/jobs">Jobs</Link></li>
                    <li><Link to="/candidates">Candidates</Link></li>
                </ul>
            </div>

            <div className="settings">
                <p>Settings</p>
            </div>
        </div>
    );
}
 
export default SideBar;