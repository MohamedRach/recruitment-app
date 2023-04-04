import { useState } from "react";
import axios from 'axios'

const PopUp = () => {
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
            <div className="title">Application Form</div>
            <div className="form">
                <form onSubmit={handleSubmit}>
                    <div className="inputfield">
                        <label>First Name</label>
                        <input type="text" className="input" name="title" required value={title} onChange= {(e) => setTitle(e.target.value)}/>
                    </div>  
                        <div className="inputfield">
                        <label>Last Name</label>
                        <input type="text" className="input" name="location" required value={location} onChange= {(e) => setLocation(e.target.value)}></input>
                    </div>  
                    <div className="inputfield">
                        <label>Job Role</label>
                        <input type="text" className="input" name="department" required value={department} onChange= {(e) => setDepartment(e.target.value)}></input>
                    </div>  
                    <div className="inputfield">
                        <label>Department</label>
                        <input type="date" name="date" id="date" className="input" required value={date} onChange= {(e) => setDate(e.target.value)} />
                    </div> 
                    <div className="inputfield">
                        <label>Adresse</label>
                        <input type="text" name="date" id="date" className="input" required value={date} onChange= {(e) => setDate(e.target.value)} /> 
                    </div>
                    <div className="inputfield">
                        <label>Upload your resume</label>
                        <input type="file" name="date" id="date" className="input" required value={date} onChange= {(e) => setDate(e.target.value)} /> 
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