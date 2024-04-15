import Candidato from '../Modelo/Candidato.js';

export default class CandidatoCtrl {
  // ------------------------LISTAR TODOS OS CANDIDATOS------------------------
  listarcandidatos(req, resp) {
    resp.type('application/json');

    if (req.method === 'GET') {
      const candidato = new Candidato();
      candidato
        .listarcandidatosBD()
        .then((candidatos) => {
          resp.status(200).json(candidatos);
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
