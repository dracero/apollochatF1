import express from "express";
import mongoose from "mongoose";
import nluRouter from "./routes/NLURoutes.js";
import cors from 'cors';
import typeDefs from "./schema.js";
import resolvers from "./resolvers.js";
import { ApolloServer } from 'apollo-server';
//const app = express();

//app.use(cors());
//app.use(express.json());
//solo poner useNewUrlParser y useUnifiedTopology porque las otras están deprecadas
mongoose.connect(
  "mongodb+srv://euge:1234@cluster0.b2f7j.mongodb.net/myFirstDatabase?retryWrites=true&w=majority",
  {
    useNewUrlParser: true, 
    useUnifiedTopology: true, 
    useFindAndModify: false,
    useCreateIndex: true //hay que agregar esto para que sea único el nombre
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

  /*

  const { url, port } = await server.listen({port: PORT});
  console.log(`
      🚀  Server is running
      🔉  Listening on port ${port}
      📭  Query at ${url}
  `);

  */

  // The `listen` method launches a web server.
  server.listen().then(({ url }) => {
    console.log(`
    🚀  Server is running
    📭  Query at ${url}
    `);
  });



}

startApolloServer(typeDefs, resolvers);
