import {useEffect, useState} from "react";

export const useFetch = (api,queryTerm="") => {
    const [data,SetData]=useState([]);
    const apipath=`https://api.themoviedb.org/3/${api}?language=en-US&page=1&api_key=${process.env.REACT_APP_API_KEY}&query=${queryTerm}`
    useEffect(()=>{
        async function fetchMovies() {
          const response= await fetch(apipath)
          const json = await response.json();
          SetData(json.results)
          
        }
        fetchMovies();
        },[apipath])
  return ({data});
}
