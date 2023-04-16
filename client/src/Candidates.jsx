import { Link } from 'react-router-dom';
import useFetch from './fetch';
import SideBar from './Sidebar';
import {useCandidatesContext} from './hooks/useCandidatesContext';
const Candidates = () => {
    const {candidates, dispatch} = useCandidatesContext();
    
    //console.log(data)
    if(!candidates){
        const {data, isPending, error} = useFetch("http://localhost:5000/candidates");
        if(data){
            dispatch({type: "SET_CANDIDATES", payload: data});
        }
        
    }   
        //console.log(data[0]._id)
        return (
            <div>
                <SideBar />
                {candidates && <div><table className="content-table">
                <thead>
                    <tr>
                        <td>Full name</td>
                        <td>Adresse</td>
                        <td>Job role</td>
                        <td>Department</td>
                        <td>E-mail</td>
                        <td>Status</td>
                        <td>Details</td>
                    </tr>
                </thead>
                <tbody>
                    {candidates.map((candidate) => (
                        candidate.candidates.map((cand) => (
                            <tr>
                                <td>{cand.firstName +" " + cand.lastName}</td>
                                <td>{cand.adresse}</td>
                                <td>{cand.jobRole}</td>
                                <td>{cand.department}</td>
                                <td>{cand.email}</td>
                                <td>{cand.status}</td>
                                <td><Link to="/candidates/profile" state= {{ candidate: cand, id: candidates[0]._id }}>See details</Link></td>
                            </tr>
                        ))
                    ))}
                    
                    
                </tbody>
                
            </table></div>}
            </div>
            
        )
   
    
}
 
export default Candidates;