 export let movies = [
    {
        id: 0,
        name : "Star Wars - The new one",
        score : 0.1,
        desc: ""
    },
    {
        id: 1,
        name : "The Godfather - I",
        score : 5,
        desc: ""
    },
    {
        id: 2,
        name : "Avengers - The new one",
        score : 99,
        desc: ""
    },
    {
        id: 3,
        name : "Logan - The new one",
        score : 2,
        desc: ""
    }

];

export const getMovies = () => movies;

export const getById = id => {
    const filteredMovie = movies.filter(movie => movie.id === id);
    return filteredMovie[0];
}


export const deleteMovie = id => {
    const cleanedMovies = movies.filter(movie => movie.id !== id);
    //console.log(cleanedMovies);
    if(movies.length > cleanedMovies.length){
        movies = cleanedMovies;
        return true;
    }else{ 
        return false;
    }
}

export const addMovie = (name, score, desc) => {
    const newMovie = {
        id: `${movies.length + 1}`,
        name, 
        score,
        desc
    };
    movies.push(newMovie);
    return newMovie;
}



