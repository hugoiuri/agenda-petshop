const executaQuery = require('../database/queries')

class Atendimento {
  lista() {
    const sql = 'SELECT * FROM Atendimentos'

    return executaQuery(sql)
  }

  buscaPorId(id) {
    const sql = `SELECT * FROM Atendimentos WHERE id=${parseInt(id)}`

    return executaQuery(sql)
  }

  adiciona(item) {
    const { clienteId, petId, servicoId, status, observacoes } = item
    const data = new Date().toLocaleDateString()

    const sql = `INSERT INTO Atendimentos(clienteId, petId, servicoId, data, status, observacoes) VALUES(${clienteId}, ${petId}, ${servicoId}, '${data}', '${status}', '${observacoes}')`

    return executaQuery(sql).then(response => ({
      id: response.insertId,
      clienteId,
      petId,
      servicoId,
      status,
      observacoes
    }))
  }

  atualiza(novoItem, id) {
    const { cliente, pet, servico, status, observacoes } = item
    const data = new Date.toLocaleDateString()
  
    const sql = `UPDATE Atendimentos SET clienteId=${cliente}, petId=${pet}, servicoId=${servico}, data='${data}', status='${status}' observacoes='${observacoes}' WHERE id=${id}`

    return executaQuery(sql)
  }

  deleta(id) {
    const sql = `DELETE FROM Atendimentos WHERE id=${id}`

    return executaQuery(sql)
  }
}

module.exports = new Atendimento
