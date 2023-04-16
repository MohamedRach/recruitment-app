import { useReducer } from "react";
import { createContext } from "react";

export const CandidatesContext = createContext();

export const candidatesReducer = (state, action) => {
    switch (action.type){
        case 'SET_CANDIDATES':
            return {candidates: action.payload};
        case "CREATE_CANDIDATE":
            return {candidates: [action.payload, ...state.candidates]}
        default:
            return state
    }
}

export const CandidatesContextProvider = ({children}) => {
    const [state, dispatch] = useReducer(candidatesReducer, {candidates: null});

    return (
        <CandidatesContext.Provider value={{ ...state, dispatch }}>
            {children}
        </CandidatesContext.Provider>
    )
}