import { useState } from "react";
import axios from 'axios'
import {useJobsContext} from "./hooks/useJobsContext"
import SideBar from './Sidebar';
const AddJob = () => {
        const {dispatch} = useJobsContext();
        const [title, setTitle] = useState('');
        const [location, setLocation] = useState('');
        const [department, setDepartment] = useState('');
        const [date, setDate] = useState("");
        const [status, setStatus] = useState('active')
        const [link, setLink] = useState("nice");
        const [isPending, setPending] = useState(false)
        //let navigate = useNavigate();
        const handleSubmit = (e) => {
            e.preventDefault();
            const job = {title, location, department, date, status, link}
            //console.log(blog)
            setPending(true);
            const config = {
                headers: { 'x-auth-token': localStorage.getItem('token') },
              };
            axios.post("http://localhost:5000/jobs/create", job, config)
                .then(() => {
                    console.log("success");
                    setPending(false);
                    dispatch({type: "CREATE_JOB", payload: job})
                })
                .catch((err) => {
                    console.log(err);
                })
            
        }
  
    return (
        <div className="wrapper">
            
            <div className="title">Add Job</div>
            <div className="form">
                <form onSubmit={handleSubmit}>
                    <div className="inputfield">
                        <label>Job title</label>
                        <input type="text" className="input" name="title" required value={title} onChange= {(e) => setTitle(e.target.value)}/>
                    </div>  
                        <div className="inputfield">
                        <label>Location</label>
                        <input type="text" className="input" name="location" required value={location} onChange= {(e) => setLocation(e.target.value)}></input>
                    </div>  
                    <div className="inputfield">
                        <label>Department</label>
                        <input type="text" className="input" name="department" required value={department} onChange= {(e) => setDepartment(e.target.value)}></input>
                    </div>  
                    <div className="inputfield">
                        <label>date</label>
                        <input type="date" name="date" id="date" className="input" required value={date} onChange= {(e) => setDate(e.target.value)} />
                    </div> 
                    <div className="inputfield">
                            <label>Status</label>
                    
                        <div className="custom_select">
                            <select name="status" required value={status} onChange= {(e) => setStatus(e.target.value)}>
                                <option value="active">active</option>
                                <option value="closed">closed</option>
                            </select>
                        </div>
                    </div>
                    <input type="hidden" name="link" value = {link} />
                    <div className="inputfield">
                        <button className="btn">register</button>
                    </div>
                    
                </form>
                
            </div>
        </div>
    )
}
 
export default AddJob;