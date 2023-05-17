import {useState, useEffect} from 'react';
import axios from 'axios';


const rapidApiKey = process.env.RAPID_API_KEY;

export default function useFetch (endpoint, query){
    const [data, setData] = useState([]);
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState(null);


const options = {
    method: 'GET',
    url: `https://jsearch.p.rapidapi.com/${endpoint}`,
    params: { ...query},
    headers: {
      'X-RapidAPI-Key': 'e500587385mshb7c7ce5edf66d18p1e9e58jsn7638e179a497',
      'X-RapidAPI-Host': 'jsearch.p.rapidapi.com'
    }
  };
  
const fetchData = async () => {
    setIsLoading(true);
    try {
        const response = await axios.request(options);
        setData(response.data.data);
        setIsLoading(false);
    }
    catch (error) {
        setError(error);
        alert('There was an error')
        
    } finally {
        setIsLoading(false);
    }
}

useEffect(() => {
    fetchData();
}
, [endpoint]);

const refetch = () => {
    setIsLoading(true);
    fetchData();
}

return { data, isLoading, error, refetch }
}

