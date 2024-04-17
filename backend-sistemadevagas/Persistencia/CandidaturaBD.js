import conectar from './Conexao.js';

export default class CandidaturaBD {
  // ------------------------------------CANDIDATAR-SE A UMA VAGA------------------------------------
  async candidatar(cand_cpf, vaga_codigo) {
    const conexao = await conectar();
    const sql = `INSERT INTO Candidato_Vaga(cand_cpf, vaga_codigo, data_inscricao, horario_inscricao) VALUES(?,?, CURDATE(), CURTIME();`;
    const parametros = [cand_cpf, vaga_codigo];
    await conexao.query(sql, parametros);
    pool.releaseConnection(conexao);
  }

  // ------------------------------------OBTER AS VAGAS ESCOLHIDAS------------------------------------
  async listarVagasPorCandidato(cand_cpf) {
    const conexao = await conectar();
    const sql = `
    SELECT * 
    FROM Candidato_Vaga
    JOIN Vaga ON Candidato_Vaga.vaga_codigo = Vaga.vaga_codigo
    WHERE Candidato_Vaga.cand_cpf = ?
  `;
    const parametros = [cand_cpf];
    const [rows] = await conexao.query(sql, parametros);
    conexao.release();
    return rows;
  }
}
