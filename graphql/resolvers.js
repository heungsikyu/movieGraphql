import { getMovieDetails, getMovies, getSuggestions} from "./db";

const resolvers = {
    Query:{
        movies: (_, { limit, rating, sort_by }) => getMovies(limit, rating, sort_by), 
        movie: (_, { id }) => getMovieDetails(id),
        suggestions: (_, { id }) => getSuggestions(id)
    } 
    // Mutation:{
    //     addMovie: (_, { name, score, desc }) =>  addMovie(name, score, desc),
    //     deleteMovie: (_, {id}) => deleteMovie(id)
    // }
}; 

export default resolvers;     