import conectar from '../Persistencia/Conexao.js';
import CandidatoBD from '../Persistencia/CandidatoBD.js';

export default class Candidato {
  #cand_cpf;
  #cand_nome;
  #cand_endereco;
  #cand_telefone;

  constructor(cand_cpf, cand_nome, cand_endereco, cand_telefone) {
    this.#cand_cpf = cand_cpf;
    this.#cand_nome = cand_nome;
    this.#cand_endereco = cand_endereco;
    this.#cand_telefone = cand_telefone;
  }

  // MÉTODOS PÚBLICOS

  // ---------CPF DO CANDIDATO---------
  get cand_cpf() {
    return this.#cand_cpf;
  }
  set cand_cpf(novoCpf) {
    this.#cand_cpf = novoCpf;
  }

  // ---------NOME DO CANDIDATO---------
  get cand_nome() {
    return this.#cand_nome;
  }
  set cand_nome(novoNome) {
    this.#cand_nome = novoNome;
  }

  // ---------ENDEREÇO DO CANDIDATO---------
  get cand_endereco() {
    return this.#cand_endereco;
  }
  set cand_endereco(novoEndereco) {
    this.#cand_endereco = novoEndereco;
  }

  // ---------TELEFONE DO CANDIDATO---------
  get cand_telefone() {
    return this.#cand_telefone;
  }
  set cand_telefone(novoTelefone) {
    this.#cand_telefone = novoTelefone;
  }

  toJSON() {
    return {
      cand_cpf: this.cand_cpf,
      cand_nome: this.cand_nome,
      cand_endereco: this.cand_endereco,
      cand_telefone: this.cand_telefone,
    };
  }

  // ------------------------------------LISTAR CANDIDATOS------------------------------------
  async listarcandidatosBD(cand_nome) {
    if (cand_nome == undefined) {
      const conexao = await conectar();
      const sql = 'SELECT * FROM Candidato';
      const parametros = ['%'];
      const [rows] = await conexao.query(sql, parametros);
      const listaCandidatos = [];
      for (const row of rows) {
        const candidato = new Candidato(row['cand_cpf'], row['cand_nome'], row['cand_endereco'], row['cand_telefone']);
        listaCandidatos.push(candidato);
      }
      return listaCandidatos;
    } else {
      const conexao = await conectar();
      const sql = 'SELECT * FROM Candidato WHERE cand_nome LIKE ?';
      const parametros = ['%' + cand_nome + '%'];
      const [rows] = await conexao.query(sql, parametros);
      const listaCandidatos = [];
      for (const row of rows) {
        const candidato = new Candidato(row['cand_cpf'], row['cand_nome'], row['cand_endereco'], row['cand_telefone']);
        listaCandidatos.push(candidato);
      }
      return listaCandidatos[0];
    }
  }
}
