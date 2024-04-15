import Vaga from '../Modelo/Vaga.js';

export default class VagaCtrl {
  // ------------------------LISTAR TODAS AS VAGAS------------------------
  listarvagas(req, resp) {
    resp.type('application/json');
    if (req.method === 'GET') {
      const vaga = new Vaga();
      vaga
        .listarvagasBD()
        .then((vagas) => {
          resp.status(200).json(vagas);
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
}
