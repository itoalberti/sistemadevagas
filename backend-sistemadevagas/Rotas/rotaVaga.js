import { Router } from 'express';
import VagaCtrl from '../Controle/vagaCtrl.js';

const rotaVaga = new Router();
const vagaCtrl = new VagaCtrl();

rotaVaga.get('/', vagaCtrl.listarvagas);

export default rotaVaga;
