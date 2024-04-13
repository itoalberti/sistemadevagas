import conectar from '../Persistencia/Conexao.js';
import ClienteBD from '../Persistencia/ClienteBD.js';
import VagaBD from '../Persistencia/VagaBD.js';

export default class Vaga {
  #vaga_codigo;
  #vaga_cargo;
  #vaga_salario;
  #vaga_cidade;
  #vaga_qtd;

  constructor(vaga_codigo, vaga_cargo, vaga_salario, vaga_cidade, vaga_qtd) {
    this.#vaga_codigo = vaga_codigo;
    this.#vaga_cargo = vaga_cargo;
    this.#vaga_salario = vaga_salario;
    this.#vaga_cidade = vaga_cidade;
    this.#vaga_qtd = vaga_qtd;
  }

  // MÉTODOS PÚBLICOS

  // ---------CÓDIGO DA VAGA---------
  get vaga_codigo() {
    return this.#vaga_codigo;
  }
  set vaga_codigo(novoCodigo) {
    this.#vaga_codigo = novoCodigo;
  }
  // ---------CARGO DA VAGA---------
  get vaga_cargo() {
    return this.#vaga_cargo;
  }
  set vaga_cargo(novoCargo) {
    this.#vaga_cargo = novoCargo;
  }
  // ---------SALÁRIO DA VAGAO---------
  get vaga_salario() {
    return this.#vaga_salario;
  }
  set vaga_salario(novoSalario) {
    this.#vaga_salario = novoSalario;
  }
  // ---------CIDADE DA VAGA---------
  get vaga_cidade() {
    return this.#vaga_cidade;
  }
  set vaga_cidade(novaCidade) {
    this.#vaga_cidade = novaCidade;
  }
  // ---------QUANTIDADE DE VAGAS---------
  get vaga_qtd() {
    return this.#vaga_qtd;
  }
  set vaga_qtd(novaQtd) {
    this.#vaga_qtd = novaQtd;
  }

  toJSON() {
    return {
      vaga_codigo: this.#vaga_codigo,
      vaga_cargo: this.#vaga_cargo,
      vaga_salario: this.#vaga_salario,
      vaga_cidade: this.#vaga_cidade,
      vaga_qtd: this.#vaga_qtd,
    };
  }

  // ------------------------------------LISTAR VAGAS------------------------------------
  async listarvagasBD(vaga_codigo) {
    if (vaga_codigo == undefined) {
      const conexao = await conectar();
      const sql = 'SELECT * FROM Vaga';
      const parametros = ['%'];
      const [rows] = await conexao.query(sql, parametros);
      const listaVagas = [];
      for (const row of rows) {
        const vaga = new Vaga(row['vaga_codigo'], row['vaga_cargo'], row['vaga_salario'], row['vaga_cidade'], row['vaga_qtd']);
        listaVagas.push(vaga);
      }
      return listaVagas;
    }
    // else {
    //   const conexao = await conectar();
    //   const sql = 'SELECT * FROM Vaga WHERE cod_cli=?';
    //   const parametros = [cod_cli];
    //   const [rows] = await conexao.query(sql, parametros);
    //   const listaClientes = [];
    //   for (const row of rows) {
    //     const cliente = new Vaga(row['cod_cli'], row['nome'], row['cpf'], row['dataNasc'], row['email'], row['telefone'], row['endereco'], row['cidade'], row['uf'], row['cod_ag']);
    //     listaClientes.push(cliente);
    //   }
    //   return listaClientes[0];
    // }
  }
}
