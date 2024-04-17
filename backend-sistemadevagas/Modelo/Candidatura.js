import conectar from '../Persistencia/Conexao.js';

export default class Candidatura {
  #data_inscricao;
  #horario_inscricao;
  #cand_cpf;
  #vaga_codigo;

  constructor(data_inscricao, horario_inscricao, cand_cpf, vaga_codigo) {
    this.#data_inscricao = data_inscricao;
    this.#horario_inscricao = horario_inscricao;
    this.#cand_cpf = cand_cpf;
    this.#vaga_codigo = vaga_codigo;
  }

  // MÉTODOS PÚBLICOS

  // ---------DATA DA CANDIDATURA---------
  get data_inscricao() {
    return this.#data_inscricao;
  }
  set data_inscricao(novaData) {
    this.#data_inscricao = novaData;
  }

  // ---------HORÁRIO DA CANDIDATURA---------
  get horario_inscricao() {
    return this.#horario_inscricao;
  }
  set horario_inscricao(novoHorario) {
    this.#horario_inscricao = novoHorario;
  }

  // ---------CPF DO CANDIDATO---------
  get cand_cpf() {
    return this.#cand_cpf;
  }
  set cand_cpf(novoCpf) {
    this.#cand_cpf = novoCpf;
  }

  // ---------CÓDIGO DA VAGA---------
  get vaga_codigo() {
    return this.#vaga_codigo;
  }
  set vaga_codigo(novoCodigo) {
    this.#vaga_codigo = novoCodigo;
  }

  toJSON() {
    return {
      data_inscricao: this.data_inscricao,
      horario_inscricao: this.horario_inscricao,
      cand_cpf: this.cand_cpf,
      vaga_codigo: this.vaga_codigo,
    };
  }

  // ------------------------------------LISTAR CANDIDATURAS------------------------------------
  async listarVagasDoCandidato(cand_nome) {
    if (cand_nome == undefined) {
      const conexao = await conectar();
      const sql = `SELECT * FROM Candidato_Vaga;`;
      const parametros = [`%`];
      const [rows] = await conexao.query(sql, parametros);
      const listaCandidaturas = [];
      for (const row of rows) {
        const candidatura = new Candidatura(row['data_inscricao'], row['horario_inscricao'], row['cand_cpf'], row['vaga_codigo']);
        listaCandidaturas.push(candidatura);
      }
      return listaCandidaturas;
    } else {
      const conexao = await conectar();
      const sql = `
            SELECT * FROM Candidato_Vaga
            INNER JOIN Candidato
            ON Candidato_Vaga.cand_cpf = Candidato.cand_cpf
            INNER JOIN Vaga
            ON Candidato_Vaga.vaga_codigo = Vaga.vaga_codigo
            WHERE cand_nome LIKE '?';`;
      const parametros = ['%' + cand_nome + '%'];
      const [rows] = await conexao.query(sql, parametros);
      const listaCandidaturas = [];
      for (const row of rows) {
        const candidatura = new Candidatura(row['data_inscricao'], row['horario_inscricao'], row['cand_cpf'], row['vaga_codigo']);
        listaCandidaturas.push(candidatura);
      }
      return listaCandidaturas[0];
    }
  }
}
