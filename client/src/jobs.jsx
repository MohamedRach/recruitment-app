import useFetch from "./fetch";
import Table from "./table"
import SideBar from './Sidebar';
import {Link} from "react-router-dom"
import {useJobsContext} from "./hooks/useJobsContext"
const Jobs = () => {
    
    const {jobs, dispatch} = useJobsContext()
    var isPending;
    console.log(data)
    if(!jobs){
        var {data, isPending, error} = useFetch("http://localhost:5000/dashboard");
        if(data){
            dispatch({type: "SET_JOBS", payload: data})
        }
        
    }
    return(
        <div>
            <SideBar />
            <button className="btn-add"><Link className="create" to="/jobs/create">Add Job</Link></button>
            {error && <div>{error}</div>}
            {isPending && <div class="loader"></div>}
            {jobs && <Table data = {jobs} type = "jobs"></Table>}
        </div>
        
    )

}
 
export default Jobs;