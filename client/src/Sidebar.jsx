import { Link, NavLink, useNavigate } from "react-router-dom";
import { useLogout } from "./hooks/useLogout";
const SideBar = () => {
    const navigate = useNavigate()
    const {logout} = useLogout()
    const handleClick = () => {
        logout()
        navigate("/login")
    }
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
                <p onClick={() => handleClick()}>LogOut</p>
            </div>
        </div>
    );
}
 
export default SideBar;