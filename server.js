import mongoose from "mongoose";
import typeDefs from "./schema.js";
import resolvers from "./resolvers.js";
import { ApolloServer } from 'apollo-server';

mongoose.connect(
  "mongodb+srv://euge:1234@cluster0.b2f7j.mongodb.net/myFirstDatabase?retryWrites=true&w=majority",
  {
    useNewUrlParser: true, 
    useUnifiedTopology: true
  }
);
//si la base de datos no existe Mongo la crea
//app.use(nluRouter);

const PORT = process.env.PORT || 8080

async function startApolloServer(typeDefs, resolvers) {
  const server = new ApolloServer({
    typeDefs,
    resolvers,
    cors: {
      origin: '*',			// <- allow request from all domains
      credentials: true}
  });

  
  server.listen({port: PORT}).then(({ url }) => {
    console.log(`
    🚀  Server is running
    📭  Query at ${url}
    `);
  });



}

startApolloServer(typeDefs, resolvers);
