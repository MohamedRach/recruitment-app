import PopUp from "./popup";
import useFetch from "./fetch"
import {useState} from 'react'
const JobPage = () => {
    const id = window.location.pathname.slice(6,)
    //console.log(id)
    const [trigger, setTrigger] = useState(false);
    const {data, isPending, error} = useFetch(`http://localhost:5000/jobs/${id}`)
    if(data){
        return (
            <div>
                <div className="page">
                    <h1>{data.title}</h1>
                    <p>{data.location}</p>
                    <div className="overview">
                        <h2>Overview</h2>
                        <p>{data.details.overview}</p>
                    </div>
                    <div className="aboutTheRole">
                        <h2>About The Role</h2>
                        <p>{data.details.AboutTheRole}</p>
                    </div>
                    <div className="whatYoudo">
                        <h2>What will you do ?</h2>
                        <p>{data.details.WhatYouWillDo}</p>
                    </div>
                    <div className="whoYouAre">
                        <h2>Who you are ?</h2>
                        <p>{data.details.WhoYouAre}</p>
                    </div>
                    <div>
                        <button onClick={() => setTrigger(true)} className="apply">Apply</button>
                    </div>
    
                </div>
                {trigger && <div className="popup"><PopUp /></div>}
            
            </div>
            
            
        );
    } else {
        return (<div class="loader"></div>)
    }
    
}
 
export default JobPage;