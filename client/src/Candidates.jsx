import { Link } from 'react-router-dom';
import useFetch from './fetch';
const Candidates = () => {
    const {data, isPending, error} = useFetch("http://localhost:5000/candidates")
    console.log(data)
    if(data){
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
                    {data[0].candidates.map((cand) => (<tr>
                        <td>{cand.firstName +" " + cand.lastName}</td>
                        <td>{cand.adresse}</td>
                        <td>{cand.jobRole}</td>
                        <td>{cand.department}</td>
                        <td>{cand.status}</td>
                        <td><Link to="/candidates/profile" state= {{ candidate: cand }}>See details</Link></td>
                    </tr>))}
                    
                    
                </tbody>
                
            </table>
        )
    } else {
        return(<div>Loading...</div>)
    }
    
    
}
 
export default Candidates;