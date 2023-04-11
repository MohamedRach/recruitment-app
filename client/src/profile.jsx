import {useLocation} from 'react-router-dom'
import download from 'downloadjs';
import axios from 'axios'
import { useState } from 'react';
import SideBar from './Sidebar';
import UpdatePopUp from './UpdatePopUp';
const Profile = () => {
    const location = useLocation();
    const candidate = location.state.candidate
    const id = location.state.id;
    console.log("id is: " + id)
    const [trigger, setTrigger] = useState(false)
    //console.log(candidate.resume.slice(28,))
    const handleClick = (decodeString) => {
        download(atob(decodeString.slice(28,)), 'resume.pdf', { type: "application/pdf" });
    }
    const handleDelete = () => {
        const config = {
            headers: { 'x-auth-token': localStorage.getItem('token') },
          };
        axios.delete(`http://localhost:5000/candidates/${id}/${candidate._id}`, candidate, config)
            .then(() => console.log("success"))
            .catch((err) => console.log(err))
    }
    return (
        <div>
            <SideBar />
            <table className="content-table">
                <tr>
                    <td className="name">First Name</td>
                    <td>{candidate.firstName}</td>
            </tr>
                <tr>
                    <td className="name">Last Name</td>
                    <td>{candidate.lastName}</td>
                </tr>
                <tr>
                    <td className="name">Adresse</td>
                    <td>{candidate.adresse}</td>
                </tr>
                <tr>
                    <td className="name">E-mail</td>
                    <td>{candidate.email}</td>
                </tr>
                <tr>
                    <td className="name">Resume</td>
                    <td onClick={() => handleClick(candidate.resume)}>Download</td>
                </tr>
                <tr>
                    <td className="name">Status</td>
                    <td>{candidate.status}</td>
                </tr>
                <tr>
                    <td><button onClick={() => setTrigger(true)} className="update">Update</button></td>
                    <td><button onClick={() => handleDelete()} className="update">Delete</button></td>
                </tr>
            </table>
            {trigger && <UpdatePopUp data = {{ candidate, id }}/>}
        </div>
       
        
    );
}
 
export default Profile;