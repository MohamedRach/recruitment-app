const Profile = () => {
    return (
        <table className="content-table">
            <tr>
                <td className="name">First Name</td>
                <td>Mohamed Sadek</td>
           </tr>
            <tr>
                <td className="name">Last Name</td>
                <td>Rachidi</td>
            </tr>
            <tr>
                <td className="name">Adresse</td>
                <td>J5 amal1</td>
            </tr>
            <tr>
                <td className="name">E-mail</td>
                <td>rachidisadek@gmail.com</td>
            </tr>
            <tr>
                <td className="name">Resume</td>
                <td>Download</td>
            </tr>
            <tr>
                <td className="name">Motivation Letter</td>
                <td>Download</td>
            </tr>
            <tr>
                <td className="name">Status</td>
                <td>New Application</td>
            </tr>
            <tr>
                <td><button className="update">Update</button></td>
            </tr>
        </table>
        
    );
}
 
export default Profile;