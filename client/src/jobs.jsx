const Jobs = () => {
    return(
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
                <tr>
                    <td>Ui/Ux Designer</td>
                    <td>Casablanca, Morocco</td>
                    <td>Design</td>
                    <td>Active</td>
                    <td>6th, April</td>
                    <td><a className="link" href="https://www.google.com/">google.com</a></td>
                </tr>
                <tr className="active-row">
                    <td>Ui/Ux Designer</td>
                    <td>Casablanca, Morocco</td>
                    <td>Design</td>
                    <td>Active</td>
                    <td>6th, April</td>
                    <td className="Link"><a>google.com</a></td>
                </tr>
            </tbody>
            
        </table>
    );
}
 
export default Jobs;