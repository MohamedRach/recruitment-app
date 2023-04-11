import { useState } from "react";
import { useRegister } from './hooks/useRegister';
const Register = () => {
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("")
    const {register, error, isLoading} = useRegister()
    const handleSubmit = async (e) => {
        e.preventDefault();
        
        const user = {firstName, lastName, email, password}
            //console.log(blog)
        await register(user)
        
            
    }
    return (
        <div className="wrapper">
            <div className="title">Registration Form</div>
            <div className="form">
                <form onSubmit={handleSubmit}>
                    <div className="inputfield">
                        <label>First Name</label>
                        <input type="text" className="input" name="firstName" required value={firstName} onChange= {(e) => setFirstName(e.target.value)}/>
                    </div>  
                        <div className="inputfield">
                        <label>Last Name</label>
                        <input type="text" className="input" name="lastName" required value={lastName} onChange= {(e) => setLastName(e.target.value)}></input>
                    </div>  
                    <div className="inputfield">
                        <label>E-mail</label>
                        <input type="text" name="email"className="input" required value={email} onChange= {(e) => setEmail(e.target.value)} /> 
                    </div>
                    <div className="inputfield">
                        <label>Password</label>
                        <input type="password" name="password" id="password" className="input" value={password} onChange = {(e) => setPassword(e.target.value)} /> 
                    </div>
                    <div className="inputfield">
                        <button className="btn">Register</button>
                    </div>
                    {error && <div>{error}</div>}
                </form>
                
            </div>
        </div>
    );
}
 
export default Register;