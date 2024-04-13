import Candidato from '../Modelo/Candidato.js';
import conectar from './Conexao.js';

export default class VagaBD {
  // ------------------------------------CANDIDATAR-SE A UMA VAGA------------------------------------
  async candidatar(cand_cpf, vaga_codigo) {
    const conexao = await conectar();
    const sql = 'INSERT INTO Candidato_Vaga(cand_cpf, vaga_codigo) VALUES(?,?)';
    const parametros = [cand_cpf, vaga_codigo];
    await conexao.query(sql, parametros);
    // pool.releaseConnection(conexao);
    conexao.release();
  }
  const sql = 'INSERT INTO Candidato_Vaga(cand_cpf, vaga_codigo, data_candidatura) VALUES(?,?,NOW())';
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
    // pool.releaseConnection(conexao);
    conexao.release();
    return rows;
  }

  // ------------------------------------CONSULTAR CANDIDATOS NO BANCO DE DADOS------------------------------------
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

  // ------------------------------------ASSOCIAR VAGA A CANDIDATO------------------------------------
  // async associarProdutoAgencia(cliente_produto) {
  //   if (cliente_produto instanceof Cliente_Produto) {
  //     const conexao = await conectar();
  //     const sql = 'INSERT INTO Cliente_Produto (cod_cli, cod_prod) VALUES(?,?)';
  //     const parametros = [cliente_produto.cod_cli, cliente_produto.cod_prod];
  //     await conexao.query(sql, parametros);
  //   }

  async associarVagaACandidato(cand_cpf) {
      if (cliente_produto instanceof Cliente_Produto) {
        const conexao = await conectar();
        const sql = 'INSERT INTO Cliente_Produto (cod_cli, cod_prod) VALUES(?,?)';
        const parametros = [cliente_produto.cod_cli, cliente_produto.cod_prod];
        await conexao.query(sql, parametros);
      }

  // }
}
