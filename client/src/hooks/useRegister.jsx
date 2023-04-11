import { useState } from "react";
import axios from 'axios'
import {useAuthContext} from './useAuthContext'
import { useNavigate } from 'react-router-dom';
export const useRegister = () => {
    const navigate = useNavigate();
    const [error, setError] = useState(null)
    const [isLoading, setLoading] = useState(null)
    const {dispatch} = useAuthContext()
    const register = async (user) => {
        setLoading(true)
        setError(true)
        const config = {
            headers: { 'Content-Type': 'application/json' },
          };
        axios.post('http://localhost:5000/register', user, config)
            .then((response) => {
                if(response.status !== 200){
                    setLoading(false)
                    setError(json.error)
                }
                if(response.status === 200){
                    console.log("success");
                    setLoading(false);
                    localStorage.setItem('token', response.data.token);
                    dispatch({type: "LOGIN", payload: response.data.token})
                    navigate("/dashboard")
                }
                
            })
            .catch((err) => {
                console.log(err);
            })
    }
    return {register, isLoading, error}
}