import { Link } from 'react-router-dom';
const Candidates = () => {
    return (
        <table className="content-table">
            <thead>
                <tr>
                    <td>Full name</td>
                    <td>Adresse</td>
                    <td>Job role</td>
                    <td>Department</td>
                    <td>Status</td>
                    <td>Details</td>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td>Mohamed Sadek Rachidi</td>
                    <td>Casablanca, Morocco</td>
                    <td>ui/ux Designer</td>
                    <td>Design</td>
                    <td>New Application</td>
                    <td><Link to="/candidates/profile">See details</Link></td>
                </tr>
                <tr className="active-row">
                    <td>Mohamed Sadek Rachidi</td>
                    <td>Casablanca, Morocco</td>
                    <td>ui/ux Designer</td>
                    <td>Design</td>
                    <td>New Application</td>
                    <td><Link to="/candidates/profile">See details</Link></td>
                </tr>
            </tbody>
            
        </table>
    );
}
 
export default Candidates;