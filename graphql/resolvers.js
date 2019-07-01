import { getMovie, getMovies, getSuggestions} from "./db";

const resolvers = {
    Query:{
        movies: (_, { limit, rating }) => getMovies(limit, rating), 
        movie: (_, { id }) => getMovie(id),
        suggestions: (_, { id }) => getSuggestions(id)
    } 
    // Mutation:{
    //     addMovie: (_, { name, score, desc }) =>  addMovie(name, score, desc),
    //     deleteMovie: (_, {id}) => deleteMovie(id)
    // }
}; 

export default resolvers;     