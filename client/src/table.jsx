const Table = ({data, type}) => {
    if(type == "jobs"){
        return (
            <table className="content-table">
                <thead>
                    <tr>
                        <td>Name</td>
                        <td>Location</td>
                        <td>Department</td>
                        <td>Status</td>
                        <td>Date</td>
                        <td>Link</td>
                    </tr>
                </thead>
                <tbody>
                    {data.map((dt) => (
                        <tr>
                            <td>{dt.title}</td>
                            <td>{dt.location}</td>
                            <td>{dt.department}</td>
                            <td>{dt.status}</td>
                            <td>{dt.date.slice(0,10)}</td>
                            <td><a href={dt.details ? `/jobs/${dt._id}` : `/create/${dt._id}`}>{dt.details ? "see job's page" : "create job's page"}</a></td>
                            
                        </tr>    
                    ))
                    }
                </tbody>
            </table>
        );
    }
    
}
 
export default Table;