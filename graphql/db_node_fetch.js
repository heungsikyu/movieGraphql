import fetch from "node-fetch";


const API_URL = "https://yts.lt/api/v2/list_movies.json?sort_by=like_count&";

export const getMovies = (limit, rating, sort_by) => {
    let REQUEST_URL = API_URL;
    if(limit > 0 ){
        REQUEST_URL += `limit=${limit}`;
    }
    if(rating > 0 ){
        REQUEST_URL += `&minimum_rating=${rating}`;
    }
    if(sort_by !== null){
        REQUEST_URL += `&sort_by=${sort_by}`;
    }
    console.log(REQUEST_URL);
    return fetch(REQUEST_URL)
    .then(res => res.json())
    .then(json => json.data.movies);

}

