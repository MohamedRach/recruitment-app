import { useState } from "react";
import axios from 'axios'

const CreateJob = () => {
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
        axios.post("http://localhost:5000/jobs/create", job)
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
            <div className="title">Create A job Page</div>
            <div className="form">
                <form onSubmit={handleSubmit}>
                    <div className="inputfield">
                        <label>OverView</label>
                        <textarea  className="input" name="title" required value={title} onChange= {(e) => setTitle(e.target.value)}/>
                    </div>  
                        <div className="inputfield">
                        <label>About The role </label>
                        <textarea  className="input" name="location" required value={location} onChange= {(e) => setLocation(e.target.value)}/>
                    </div>  
                    <div className="inputfield">
                        <label>What Will you do</label>
                        <textarea className="input" name="department" required value={department} onChange= {(e) => setDepartment(e.target.value)}/>
                    </div>  
                    <div className="inputfield">
                        <label>Department</label>
                        <input type="text" className="input" />
                    </div> 
                    <div className="inputfield">
                        <label>Who you are ?</label>
                        <textarea  className="input" />  
                    </div>

                    <input type="hidden" name="status" value = "new application" />
                    <div className="inputfield">
                        <button className="btn">Create</button>
                    </div>
                    
                </form>
                
            </div>
        </div>
        
    );
}

export default CreateJob;