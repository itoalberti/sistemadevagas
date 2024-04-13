import { Router } from 'express';
// import CandidatoCtrl from '../Controle/candidatoCtrl.js';
import VagaCtrl from '../Controle/vagaCtrl.js';

const rotaVaga = new Router();
const vagaCtrl = new VagaCtrl();

rotaVaga.get('/', vagaCtrl.listarvagas);
/* .post('/', vagaCtrl.candidatar) */
// rotaCliente.post('/associarProdutoCliente', agenciaCtrl.associarProduto);

export default rotaVaga;
