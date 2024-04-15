import conectar from './Conexao.js';

export default class VagaBD {
  // ------------------------------------CANDIDATAR-SE A UMA VAGA------------------------------------
  async candidatar(cand_cpf, vaga_codigo) {
    const conexao = await conectar();
    const sql = 'INSERT INTO Candidato_Vaga(cand_cpf, vaga_codigo, data_inscricao, horario_inscricao) VALUES(?,?,NOW(), NOW())';
    const parametros = [cand_cpf, vaga_codigo];
    await conexao.query(sql, parametros);
    conexao.release();
  }

  // ------------------------------------OBTER CANDIDATURAS DE UM CANDIDATO------------------------------------
  async getCandidaturas(cand_cpf) {
    const conexao = await conectar();
    const sql = 'SELECT * FROM Candidato_Vaga WHERE cand_cpf = ?';
    const parametros = [cand_cpf];
    const [rows] = await conexao.query(sql, parametros);
    conexao.release();
    return rows;
  }
}
