import { CandidatesContext } from '../context/candidatesContext';
import { useContext } from "react";

export const useCandidatesContext = () => {
    const context = useContext(CandidatesContext)
    console.log(context);
    if(!context){
        throw Error("check candidates Provider")
    }
    return context
}