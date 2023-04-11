import { useState } from "react";
import { useLogin } from "./hooks/useLogin";
const Login = () => {
    const {login , isLoading, error} = useLogin()
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("")
    const handleSubmit = async (e) => {
        e.preventDefault();
        const user = {email, password}
            
        await login(user)
        
    }

    return (
        <div className="wrapper">
            <div className="title">Login Form</div>
            <div className="form">
                <form onSubmit={handleSubmit}>
                    <div className="inputfield">
                        <label>E-mail</label>
                        <input type="text" name="email"className="input" required value={email} onChange= {(e) => setEmail(e.target.value)} /> 
                    </div>
                    <div className="inputfield">
                        <label>Password</label>
                        <input type="password" name="password" id="password" className="input" value={password} onChange = {(e) => setPassword(e.target.value)} /> 
                    </div>
                    <div className="inputfield">
                        <button disabled={isLoading} className="btn">Login</button>
                    </div>
                    {error && <div>{error}</div>}
                </form>
                
            </div>
        </div>
    );
}
 
export default Login;