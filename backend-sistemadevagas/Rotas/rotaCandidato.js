import { Router } from 'express';
import CandidatoCtrl from '../Controle/candidatoCtrl.js';

const rotaCandidato = new Router();
const candidatoCtrl = new CandidatoCtrl();

rotaCandidato.get('/', candidatoCtrl.listarcandidatos);
// .post('/', candidatoCtrl.gravarcandidato);
// rotaCliente.post('/associarProdutoCliente', agenciaCtrl.associarProduto);

export default rotaCandidato;
