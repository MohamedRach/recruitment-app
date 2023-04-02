import { useEffect , useState } from "react"

const useFetch = (endPoint) => {
    const [data, setData] = useState(null)
    const [isPending, setPendinng] = useState(true);
    const [error, setError] = useState(null)
    useEffect(() => {
        const abortCont = new AbortController();
        fetch(endPoint, {signal: abortCont.signal})
            .then((res) => {
                if(!res.ok){
                    throw Error("couldn't fetch data for that resource!")
                }
                return res.json()
            })
            .then((data) => {
                setData(data)
                setPendinng(false)
                setError(null)
                //console.log(data)
            })
            .catch((err) => {
                if(err.name === 'AbortError'){
                    console.log('fetch aborted')
                } else{
                    setPendinng(false);
                    setError(err.message)
                }
                
            })
            return () => abortCont.abort();
    }, [endPoint])
    return {data, isPending, error}
}

export default useFetch