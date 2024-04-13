// import logo from './logo.svg';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import TelaInicial from './telas/TelaInicial';
import Tela404 from './telas/Tela404.jsx';
// import TelaCadastrarAgencia from './telas/TelaCadastrarAgencia';
// import TelaCadastrarCliente from './telas/TelaCadastrarCliente.jsx';
// import TelaCadastrarProduto from './telas/TelaCadastrarProduto.jsx';
// import TelaExibirAgencias from './tabelas/TelaExibirAgencias.jsx';
// import TelaExibirClientes from './tabelas/TelaExibirClientes.jsx';
// import TelaExibirProdutos from './tabelas/TelaExibirProdutos.jsx';

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          {/* HOME */}
          <Route path='/' element={<TelaInicial />} />
          {/* CANDIDATOS */}
          <Route path='/cadastrarcandidato' element={<TelaCadastrarCandidato />} />
          <Route path='/exibircandidatos' element={<TelaExibirCandidatos />} />
          {/* VAGAS */}
          <Route path='/cadastrarvaga' element={<TelaCadastrarVaga />} />
          <Route path='/exibirvagas' element={<TelaExibirVagas />} />
          {/* ERRO 404 */}
          <Route path='*' element={<Tela404 />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
