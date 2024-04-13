import Candidato from '../Modelo/Candidato.js';
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

  // ------------------------------------OBTER CANDIDATURAS DE UM CANDIDATO------------------------------------
  async getCandidaturas(cand_cpf) {
    const conexao = await conectar();
    const sql = 'SELECT * FROM Candidato_Vaga WHERE cand_cpf = ?';
    const parametros = [cand_cpf];
    const [rows] = await conexao.query(sql, parametros);
    pool.releaseConnection(conexao);
    return rows;
  }

  // ------------------------------------GET VAGAS FOR A SPECIFIC CANDIDATE------------------------------------
  async getVagasPorCandidato(cand_cpf) {
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

  // ------------------------------------CADASTRAR CANDIDATO NO BANCO DE DADOS------------------------------------
  // async cadastrar(candidato) {
  //   if (candidato instanceof Candidato) {
  //     const conexao = await conectar();
  //     const sql = 'INSERT INTO Candidato(cand_cpf, cand_nome, cand_endereco, cand_telefone) VALUES(?,?,?,?)';
  //     const parametros = [candidato.nome, candidato.cpf, candidato.dataNasc, candidato.email, candidato.telefone, candidato.endereco, candidato.cidade, candidato.uf, candidato.cod_ag];
  //     const resultado = await conexao.query(sql, parametros);
  //     return await resultado[0].insertId;
  //   }
  //   pool.releaseConnection(conexao);
  // }

  // ------------------------------------ALTERAR CANDIDATO NO BANCO DE DADOS------------------------------------
  // async alterarcandidato(cliente) {
  //   if (cliente instanceof Candidato) {
  //     const conexao = await conectar();
  //     const sql = 'UPDATE Candidato SET email=?, telefone=?, endereco=?, cidade=?, uf=?, cod_ag=? WHERE cod_cli=?';
  //     const parametros = [cliente.email, cliente.telefone, cliente.endereco, cliente.cidade, cliente.uf, cliente.cod_ag, cliente.cod_cli];
  //     await conexao.query(sql, parametros);
  //     pool.releaseConnection();
  //   }
  // }

  // ------------------------------------CONSULTAR CLIENTES NO BANCO DE DADOS------------------------------------
  // async listarcandidatos() {
  //   const conexao = await conectar();
  //   const sql = 'SELECT * FROM Candidato';
  //   const parametros = ['%'];
  //   const [rows] = await conexao.query(sql, parametros);
  //   const listaClientes = [];
  //   for (const row of rows) {
  //     const cliente = new Candidato(row['cod_cli'], row['nome'], row['cpf'], row['dataNasc'], row['email'], row['telefone'], row['endereco'], row['cidade'], row['uf'], row['cod_ag']);
  //     listaClientes.push(cliente);
  //   }
  //   pool.releaseConnection(conexao);
  //   return listaClientes;
  // }

  // ------------------------------------ASSOCIAR PRODUTO A CANDIDATO------------------------------------
  // async associarProdutoAgencia(cliente_produto) {
  //   if (cliente_produto instanceof Cliente_Produto) {
  //     const conexao = await conectar();
  //     const sql = 'INSERT INTO Cliente_Produto (cod_cli, cod_prod) VALUES(?,?)';
  //     const parametros = [cliente_produto.cod_cli, cliente_produto.cod_prod];
  //     await conexao.query(sql, parametros);
  //   }
  // }
}
