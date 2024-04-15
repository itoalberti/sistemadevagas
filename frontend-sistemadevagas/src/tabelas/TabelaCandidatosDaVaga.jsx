import { useState, useEffect } from 'react';
import { Container, Table, Button } from 'react-bootstrap';
import { LinkContainer } from 'react-router-bootstrap';
import { urlCandidato } from '../dados/dados.js';
import Pagina from '../templates/Pagina';

// TABELA QUE EXIBE OS CANDIDATOS À VAGA ESPECÍFICA
export default function TabelaCandidatosDaVaga(vaga) {
  const [listaCandidatos, setListaCandidatos] = useState([]);
  useEffect(() => {
    fetch(urlCandidato)
      .then((resp) => resp.json())
      .then((data) => {
        setListaCandidatos(data);
      })
      .catch((erro) => console.error('Erro ao buscar candidatos', erro));
  }, []);

  return (
    <>
      <Pagina>
        <Container>
          <br />
          <Table striped bordered hover variant='dark'>
            <thead>
              <tr>
                <th style={{ width: '10%' }}>CPF</th>
                <th style={{ width: '25%' }}>Nome</th>
                <th style={{ width: '20%' }}>Endereço</th>
                <th style={{ width: '25%' }}>Telefone</th>
              </tr>
            </thead>
            <tbody>
              {/* ? →  método map só será chamado se listaClientes for um atributo válido */}
              {listaCandidatos?.map((candidato) => {
                return (
                  //   necessário identificar cada linha da tabela usando "key"
                  // key → ajuda o React na rendereização dos componentes no DOM virtual
                  <tr key={candidato.cand_cpf}>
                    <td>{candidato.cand_cpf}</td>
                    <td>{candidato.cand_nome}</td>
                    <td>{candidato.cand_endereco}</td>
                    <td>{candidato.cand_telefone}</td>
                  </tr>
                );
              })}
            </tbody>
          </Table>
        </Container>
        <LinkContainer to='/'>
          <Button variant='dark'>Voltar</Button>
        </LinkContainer>
      </Pagina>
    </>
  );
}
