// import logo from './logo.svg';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import TelaInicial from './telas/TelaInicial';
import Tela404 from './telas/Tela404.jsx';
import TabelaCandidatos from './tabelas/TabelaCandidatos.jsx';
import TabelaVagas from './tabelas/TabelaVagas.jsx';
import TabelaCandidatosDaVaga from './tabelas/TabelaCandidatosDaVaga.jsx';

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          {/* HOME */}
          <Route path='/' element={<TelaInicial />} />
          {/* CANDIDATOS */}
          <Route path='/exibircandidatos' element={<TabelaCandidatos />} />
          <Route path='/tabelaCandidatosDaVaga/:vaga_codigo' element={<TabelaCandidatosDaVaga />} />
          {/* VAGAS */}
          <Route path='/exibirvagas' element={<TabelaVagas />} />
          <Route path='/tabelaVagasDoCandidato/:candidato_codigo' element={<TabelaVagas />} />
          {/* ERRO 404 */}
          <Route path='*' element={<Tela404 />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
