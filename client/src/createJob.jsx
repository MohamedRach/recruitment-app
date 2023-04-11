import { useState } from "react";
import axios from 'axios'
import SideBar from './Sidebar';
const CreateJob = () => {
    const [overview, setOverview] = useState('');
    const [AboutTheRole, setAboutTheRoled] = useState('');
    const [WhatYouWillDo, setWhatYouWillDo] = useState('');
    const [WhoYouAre, setWhoYouAre] = useState("");
    const [isPending, setPending] = useState(false)
    const id = window.location.pathname.slice(8,);
        //let navigate = useNavigate();
    const handleSubmit = (e) => {
        e.preventDefault();
        const details = {overview,AboutTheRole , WhatYouWillDo, WhoYouAre}
            //console.log(blog)
        setPending(true);
        const config = {
            headers: { 'x-auth-token': localStorage.getItem('token') },
          };
        axios.post(`http://localhost:5000/create/${id}`, details, config)
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
            <SideBar />
            <div className="title">Create A job Page</div>
            <div className="form">
                <form onSubmit={handleSubmit}>
                    <div className="inputfield">
                        <label>OverView</label>
                        <textarea  className="input" name="overview" required value={overview} onChange= {(e) => setOverview(e.target.value)}/>
                    </div>  
                        <div className="inputfield">
                        <label>About The role </label>
                        <textarea  className="input" name="AboutTheRole" required value={AboutTheRole} onChange= {(e) => setAboutTheRoled(e.target.value)}/>
                    </div>  
                    <div className="inputfield">
                        <label>What Will you do</label>
                        <textarea className="input" name="WhatYouWillDo" required value={WhatYouWillDo} onChange= {(e) => setWhatYouWillDo(e.target.value)}/>
                    </div>   
                    <div className="inputfield">
                        <label>Who you are ?</label>
                        <textarea  className="input" name="WhoYouAre" required value={WhoYouAre} onChange= {(e) => setWhoYouAre(e.target.value)}/>  
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