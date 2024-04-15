import conectar from './Conexao.js';

export default class CandidatoBD {
  // ------------------------------------CANDIDATAR-SE A UMA VAGA------------------------------------
  async candidatar(cand_cpf, vaga_codigo) {
    const conexao = await conectar();
    const sql = 'INSERT INTO Candidato_Vaga(cand_cpf, vaga_codigo) VALUES(?,?)';
    const parametros = [cand_cpf, vaga_codigo];
    await conexao.query(sql, parametros);
    pool.releaseConnection(conexao);
  }

  // ------------------------------------OBTER AS VAGAS ESCOLHIDAS------------------------------------
  async listarVagasPorCandidato(cand_cpf) {
    const conexao = await conectar();
    const sql = `
    SELECT v.* 
    FROM Candidato_Vaga cv
    JOIN Vaga v ON cv.vaga_codigo = v.vaga_codigo
    WHERE cv.cand_cpf = ?
  `;
    const parametros = [cand_cpf];
    const [rows] = await conexao.query(sql, parametros);
    conexao.release();
    return rows;
  }
}
