import {useLocation} from 'react-router-dom'
const Profile = (props) => {
    const location = useLocation();
    const candidate = location.state.candidate
    console.log(candidate)
    return (
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
                <td className="name">Resume</td>
                <td>Download</td>
            </tr>
            <tr>
                <td className="name">Status</td>
                <td>{candidate.status}</td>
            </tr>
            <tr>
                <td><button className="update">Update</button></td>
            </tr>
        </table>
        
    );
}
 
export default Profile;