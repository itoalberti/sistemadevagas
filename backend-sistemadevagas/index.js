import express from 'express';
import cors from 'cors';
import rotaCandidato from './Rotas/rotaCliente.js';
import rotaVaga from './Rotas/rotaProduto.js';

const app = express();
app.use(cors());
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use('/candidato', rotaCandidato);
app.use('/vaga', rotaVaga);

const hostname = '0.0.0.0';
const port = 4000;
// const port = 3306;

app.listen(port, hostname, () => {
  console.log(`Backend ouvindo em http://${hostname}:${port}`);
});
