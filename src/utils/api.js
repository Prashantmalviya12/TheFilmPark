import axios from "axios";

const BASE_URL = "https://api.themoviedb.org/3";
//const TMDB_TOKEN = "ee1aeea6a544c52fb067a7537968e67d"

const headers = {
    Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJlZTFhZWVhNmE1NDRjNTJmYjA2N2E3NTM3OTY4ZTY3ZCIsInN1YiI6IjY0ZDY2YWNjYjZjMjY0MTE1NGY4OTc1OSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.UgCtMF87YFJOqDL4qf3GIfqj8LUMXievD2aWGcSATCk',
    accept: 'application/json',
}

export const fetchDataFromApi = async (url,params) => {
    try{
        const {data} = await axios.get(
            BASE_URL+url,{
                headers,
                params
            }
        )
        return data

    }catch (err){
        console.log(err);
        return err;
    }
}