import { useState } from "react";
import axios from 'axios'
import Candidates from "./Candidates";

const PopUp = () => {
    const id = window.location.pathname.slice(6,)
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [department, setDepartment] = useState('');
    const [jobRole, setJobRole] = useState("");
    const [adresse, setAdresse] = useState('')
    const [status, setStatus] = useState("new application");
    const [resume, setResume] = useState(null);
    const [isPending, setPending] = useState(false)
        //let navigate = useNavigate();
    const handleSubmit = (e) => {
        e.preventDefault();
        const candidate = {firstName, lastName, jobRole, department, adresse, status, resume}
            //console.log(blog)
        setPending(true);
        axios.post(`http://localhost:5000/candidates/${id}`, candidate)
            .then(() => {
                console.log("success");
                setPending(false);
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
                        <label>Upload your resume</label>
                        <input type="file" name="resume" className="input" required value={resume} onChange= {(e) => setResume(e.target.value)} /> 
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