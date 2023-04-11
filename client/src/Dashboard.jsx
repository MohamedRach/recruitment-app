import useFetch from './fetch'
import BarChart from "./BarChart";
import SideBar from './Sidebar';
import { useNavigate } from 'react-router-dom';
const Dashboard = () => {
    
    
    
        const {data, isPending, error} = useFetch("http://localhost:5000/candidates");
        console.log(localStorage.getItem('user'))
        var total = 0;
        var newApp = 0;
        var rejectedApp = 0;
        var interviewApp =0;
        if(data){
            data.forEach((candidates) => {
                total += candidates.candidates.length
                console.log(candidates.candidates)
                candidates.candidates.forEach((cand) => {
                    if(cand.status == "new application"){
                        newApp += 1;
                    }else if(cand.status == "rejected"){
                        rejectedApp += 1;
                    }else {
                        interviewApp +=1;
                    }
                })
            })
        }
        
        return (
            <div>
                <SideBar />
                {isPending && <div class="loader"></div>}
                {data && <div><div className="stats">
                    <div className="details">
                        <h2>Total Applications</h2>
                        <h3>{total}</h3>
                    </div>
                    <div className="details">
                        <h2>New Applications</h2>
                        <h3>{newApp}</h3>
                    </div>
                    <div className="details">
                        <h2>onGoing Applications</h2>
                        <h3>{interviewApp}</h3>
                    </div>
                    <div className="details">
                        <h2>Rejected Applications</h2>
                        <h3>{rejectedApp}</h3>
                    </div> 
                </div>
                <BarChart total={total} newApp={newApp} rejectedApp={rejectedApp} interviewApp={interviewApp}></BarChart></div>}
                
            </div>
            
            
        );

    }
    

 
export default Dashboard;