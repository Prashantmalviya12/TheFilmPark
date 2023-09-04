import { useEffect,useState } from "react";
import { fetchDataFromApi } from "../utils/api";

const useFetch = (url) =>{

    const[data,setdata] = useState(null);
    const[loading, setLoading] = useState(null);
    const[error, setError] = useState(null);
    
    useEffect(() => {
        setLoading("Loading.....");
        setdata(null);
        setError(null);

        //because if useffect using again and again.

        fetchDataFromApi(url)
        .then((res) =>{
            setLoading(false);
            setdata(res);
        })
        .catch((err) => {
            setLoading(false)
            setError("Something went wrong");
        })
    },[url])
    return {data,error,loading};
}


export default useFetch