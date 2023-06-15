import {useState, useEffect} from "react";

import axios from "axios";

const useFetch = (endpoint, query) => {
    const [data, setData] = useState([]);
    const [isLoading, setIsLoading] = useState(false);
    const [isError, setIsError] = useState(null);

    const options = {
        method: 'GET',
        url: `https://jsearch.p.rapidapi.com/${endpoint}`,
        headers: {
            'X-RapidAPI-Key': 'a353d767a3mshb23f269f5d28a59p174fc6jsna04fc8037564', 
            'X-RapidAPI-Host': 'jsearch.p.rapidapi.com'
        },
        params: {
          ...query
        },
        
    };

    const fetchData = async() => {
        setIsLoading(true);

        try{
            const res = await axios.request(options);
            setData(res.data.data);
            setIsLoading(false);
        }
        catch(error){
            setIsError(error);
            alert("There is an error!")
        }
        finally{
            setIsLoading(false);
        }
                
    }

    useEffect(() => {
            fetchData();
        }, []);
    
    const refetch = () => {
        setIsLoading(true);
        fetchData();
    }

    return {data, isLoading, isError, refetch};
}

export default useFetch;