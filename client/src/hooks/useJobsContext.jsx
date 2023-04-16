import { JobsContext } from "../context/JobsContext";
import { useContext } from "react";

export const useJobsContext = () => {
    const context = useContext(JobsContext)

    if(!context){
        throw Error("check jobs Provider")
    }
    return context
}