import BaseDeDatos from "./dao/BaseDeDatos.js";
let baseDeDatos = new BaseDeDatos();

const resolvers = {
  Query: {
    nlus: (_, { intent, entity, role, trait }, { dataSources }) => {
      intent = baseDeDatos.get_nlu_structure_name(intent)
      entity = baseDeDatos.get_nlu_structure_name(entity)
      trait = baseDeDatos.get_nlu_structure_name(trait)
      if (role) {
        role = baseDeDatos.get_nlu_structure_name(role)
      }
      return {intent: intent, entity: entity, role: role, trait: trait}
    },
  },
};

export default resolvers;