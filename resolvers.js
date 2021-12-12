import BaseDeDatos from "./dao/BaseDeDatos.js";
let baseDeDatos = new BaseDeDatos();

const resolvers = {
  Query: {
    nlus: (_, { name }, { dataSources }) => baseDeDatos.get_nlu_structure_name(name),
  },
};

export default resolvers;