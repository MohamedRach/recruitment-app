import { useState } from "react";
import axios from 'axios'
const UpdatePopUp = ({data}) => {
    const jobId = data.id;
    console.log(jobId)
    const [firstName, setFirstName] = useState(data.candidate.firstName);
    const [lastName, setLastName] = useState(data.candidate.lastName);
    const [department, setDepartment] = useState(data.candidate.department);
    const [jobRole, setJobRole] = useState(data.candidate.jobRole);
    const [adresse, setAdresse] = useState(data.candidate.adresse)
    const [email, setEmail] = useState(data.candidate.email);
    const [status, setStatus] = useState(data.candidate.status);
    const resume = data.candidate.resume;
    const [isPending, setPending] = useState(false)
        //let navigate = useNavigate();
    const handleSubmit = (e) => {
        e.preventDefault();
        const candidate = {firstName, lastName, jobRole, department, adresse, email, status, resume}
            //console.log(blog)
        setPending(true);
        const config = {
            headers: { 'x-auth-token': localStorage.getItem('token') },
          };
        axios.put(`http://localhost:5000/candidates/${jobId}/${data.candidate._id}`, candidate, config)
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
                        <label>E-mail</label>
                        <input type="text" name="email"className="input" required value={email} onChange= {(e) => setEmail(e.target.value)} /> 
                    </div>
                    <div className="inputfield">
                        <label>Status</label>
                        <input type="text" name="email"className="input" required value={status} onChange= {(e) => setStatus(e.target.value)} /> 
                    </div>
                    <div className="inputfield">
                        <button className="btn">Update</button>
                    </div>
                    
                </form>
                
            </div>
        </div>
    )
}

export default UpdatePopUp;