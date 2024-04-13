import Candidato from '../Modelo/Cliente.js';

export default class VagaCtrl {
  // ------------------------GRAVAR VAGA NO BANCO DE DADOS------------------------
  // cadastrar(req, resp) {
  //   resp.type('application/json');
  //   if (req.method === 'POST' && req.is('application/json')) {
  //     const dados = req.body;
  //     const vaga_codigo = dados.vaga_codigo;
  //     const vaga_cargo = dados.vaga_cargo;
  //     const vaga_salario = dados.vaga_salario;
  //     const vaga_cidade = dados.vaga_cidade;
  //     const vaga_qtd = dados.vaga_qtd;
  //   }

  //     if (cand_cpf && cand_nome && cand_telefone && cand_endereco) {
  //       const candidato = new Candidato(cand_cpf, cand_nome, cand_endereco, cand_telefone);
  //       candidato
  //         .cadastrarBD()
  //         .then(() => {
  //           resp.status(200).json({
  //             status: true,
  //             // cod_cli: candidato.cod_cli,
  //             msg: 'Candidato criado com sucesso!',
  //           });
  //         })
  //         .catch((erro) => {
  //           resp.status(500).json({
  //             status: false,
  //             msg: erro.message,
  //           });
  //         });
      // } else {
      //   resp.status(400).json({
      //     status: false,
      //     msg: 'Informe todos os dados do cliente: nome, CPF, data de nascimento, email, telefone, endereço, cidade, UF e código da agência',
      //   });
      // }
    // } else {
    //   // 4xx = 'Client error'
    //   resp.status(400).json({
    //     status: false,
    //     msg: 'O método não é permitido ou cliente no formato JSON não foi fornecido. Consulte a documentação da API!',
    //   });
    // }
  };



  // ------------------------LISTAR TODAS AS VAGAS------------------------
listarvagas(req, resp){
  resp.type('application/json');
    if (req.method === 'GET') {
      const candidato = new Candidato();
      candidato
        .listarvagasBD()
        .then((clientes) => {
          resp.status(200).json(clientes);
        })
        .catch((erro) => {
          resp.status(500).json({
            status: false,
            msg: erro.message,
          });
        });
    } else {
      resp.status(400).json({
        status: false,
        msg: 'O método não é permitido! Consulte a documentação da API!',
      });
    }

  }

//   // ------------------------ASSOCIAR PRODUTO A CLIENTE------------------------
//   // associarProduto(req, resp) {
//   //   resp.type('application/json');
//   //   if (req.method === 'POST' && req.is('application/json')) {
//   //     const dados = req.body;
//   //     const cod_cli= dados.cod_cli;
//   //     const cod_prod = dados.cod_prod;

//   //     if (cod_cli && cod_prod) {
//   //       // const cliente = new Cliente(0, nome, cpf, dataNasc, email, telefone, endereco, cidade, uf, cod_ag);
//   //       // CRIAR MODELO CLIENTE_PRODUTO
//   //       const cliente_produto = new Cliente_Produto(cod_ag, cod_prod);
//   //       // console.log('Cliente cadastrado (endereço) / (cidade):', cliente.endereco, cliente.cidade);

//   //       cliente_produto
//   //         .cadastrarBD()
//   //         .then(() => {
//   //           resp.status(200).json({
//   //             status: true,
//   //             cod_ag: cliente_produto.cod_ag, //nao retirar
//   //             cod_prod: cliente_produto.cod_prod,
//   //             msg: 'Cliente criado com sucesso!',
//   //           });
//   //         })
//   //         .catch((erro) => {
//   //           resp.status(500).json({
//   //             status: false,
//   //             msg: erro.message,
//   //           });
//   //         });
//   //     } else {
//   //       resp.status(400).json({
//   //         status: false,
//   //         msg: 'Informe todos os dados do cliente: nome, CPF, data de nascimento, email, telefone, endereço, cidade, UF e código da agência',
//   //       });
//   //     }
//   //   } else {
//   //     // 4xx = 'Client error'
//   //     resp.status(400).json({
//   //       status: false,
//   //       msg: 'O método não é permitido ou agência no formato JSON não foi fornecida. Consulte a documentação da API!',
//   //     });
//   //   }
//   // }
// }