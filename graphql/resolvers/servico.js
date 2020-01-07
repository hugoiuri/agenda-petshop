const Operacoes = require('../../infraestrutura/operations');

const Servicos = new Operacoes('servico')

const resolvers = {
  Mutation: {
    adicionarServico: (_, params) => Servicos.adiciona(params),
    atualizarServico: (_, params) => Servicos.atualiza(params),
    deletarServico: (_, { id }) => Servicos.deleta(id)
  },
  Query: {
    servicos: () => Servicos.lista(),
    servico: (_, { id }) => Servicos.buscaPorId(id)
  }
};

module.exports = resolvers;