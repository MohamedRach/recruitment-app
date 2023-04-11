import { FaTrashAlt, FaRegEdit } from 'react-icons/fa';
import axios from 'axios'
const Table = ({data, type}) => {
    const handleDelete = (id) => {
        axios.delete(`http://localhost:5000/jobs/${id}`)
            .then(() => console.log("success"))
            .catch((err) => console.log(err))
    }
    if(type == "jobs"){
        return (
            <div>
                <table className="content-table">
                    <thead>
                        <tr>
                            <td>Name</td>
                            <td>Location</td>
                            <td>Department</td>
                            <td>Status</td>
                            <td>Date</td>
                            <td>Link</td>
                            <td>Actions</td>
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
                                <td><FaTrashAlt className='deleteJob' onClick={() => handleDelete(dt._id)}></FaTrashAlt></td>
                            </tr>    
                        ))
                        }
                    </tbody>
                </table>
            </div>
        );
    }
    
}
 
export default Table;