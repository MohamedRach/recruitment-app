import useFetch from "./fetch";
import Table from "./table"
const Jobs = () => {
    const {data, isPending, error} = useFetch("http://localhost:5000/dashboard");
    console.log(data)
    return(
        <div>
            {error && <div>{error}</div>}
            {isPending && <div>Loading...</div>}
            {data && <Table data = {data} type = "jobs"></Table>}
        </div>
        
    )

}
 
export default Jobs;