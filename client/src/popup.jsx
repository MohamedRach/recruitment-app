import { useState } from "react";
import axios from 'axios'
import FileBase64 from 'react-file-base64';
import Candidates from "./Candidates";
import {useCandidatesContext} from './hooks/useCandidatesContext';

const PopUp = () => {
    const id = window.location.pathname.slice(6,)
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [department, setDepartment] = useState('');
    const [jobRole, setJobRole] = useState("");
    const [adresse, setAdresse] = useState('')
    const [email, setEmail] = useState("");
    const [status, setStatus] = useState("new application");
    const [resume, setResume] = useState(null);
    const [isPending, setPending] = useState(false);
    const {dispatch} = useCandidatesContext();
        //let navigate = useNavigate();
    const handleSubmit = (e) => {
        e.preventDefault();
        const candidate = {firstName, lastName, jobRole, department, adresse, status,email, resume}
            //console.log(blog)
            
        const config = {
            headers: { 'x-auth-token': localStorage.getItem('token') },
        };
        setPending(true);
        axios.post(`http://localhost:5000/candidates/${id}`, candidate, config)
            .then(() => {
                console.log("success");
                setPending(false);
                dispatch({type: "CREATE_CANDIDATE", payload:candidate});
            })
            .catch((err) => {
                console.log(err);
            })
            
    }
    return (
        <div className="wrapper">
            <div className="title">Application Form</div>
            <div className="form">
                <form onSubmit={handleSubmit}>
                    <div className="inputfield">
                        <label>First Name</label>
                        <input type="text" className="input" name="firstName" required value={firstName} onChange= {(e) => setFirstName(e.target.value)}/>
                    </div>  
                        <div className="inputfield">
                        <label>Last Name</label>
                        <input type="text" className="input" name="lastName" required value={lastName} onChange= {(e) => setLastName(e.target.value)}></input>
                    </div>  
                    <div className="inputfield">
                        <label>Job Role</label>
                        <input type="text" className="input" name="jobRole" required value={jobRole} onChange= {(e) => setJobRole(e.target.value)}></input>
                    </div>  
                    <div className="inputfield">
                        <label>Department</label>
                        <input type="text" name="department" className="input" required value={department} onChange= {(e) => setDepartment(e.target.value)} />
                    </div> 
                    <div className="inputfield">
                        <label>Adresse</label>
                        <input type="text" name="adresse"className="input" required value={adresse} onChange= {(e) => setAdresse(e.target.value)} /> 
                    </div>
                    <div className="inputfield">
                        <label>E-mail</label>
                        <input type="text" name="email"className="input" required value={email} onChange= {(e) => setEmail(e.target.value)} /> 
                    </div>
                    <div className="inputfield">
                        <label>Upload your resume</label>
                        <FileBase64 multiple={ false } onDone={ ({base64}) => setResume(base64) } /> 
                    </div>
                    <div className="inputfield">
                        <button className="btn">Apply</button>
                    </div>
                    
                </form>
                
            </div>
        </div>
    )
}

export default PopUp;