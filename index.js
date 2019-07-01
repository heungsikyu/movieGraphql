import { GraphQLServer } from "graphql-yoga";
import resolvers from "./graphql/resolvers";
import { resolve } from "dns";

const server = new GraphQLServer({
    typeDefs: "graphql/schema.graphql" ,   
    resolvers  
});
 
server.start(() => console.log("Graphql Server Running"));  