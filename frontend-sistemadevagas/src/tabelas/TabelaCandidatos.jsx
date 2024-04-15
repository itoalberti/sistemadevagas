import { Button, Container, Table } from 'react-bootstrap';
import { LinkContainer } from 'react-router-bootstrap';
import { useEffect, useState } from 'react';

import Pagina from '../templates/Pagina';
import { urlCandidato } from '../dados/dados';

export default function TabelaCandidatos(candidato) {
  // Função para buscar as vagas às quais aquele candidato se candidatou e exibir os seus cargos em um alerta:
  const buscarVagasDoCandidato = async (cand_cpf) => {
    // IMPLEMENTAR ESTA FUNÇÃO
  };

  // Código para recuperar a lista de candidatos (useState e useEffect)
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
    <Pagina>
      <Container>
        <br />
        <h4>CANDIDATOS CADASTRADOS</h4>
        <Table striped bordered hover variant='dark'>
          <thead>
            <tr>
              <th style={{ width: '15%' }}>CPF</th>
              <th style={{ width: '25%' }}>Nome</th>
              <th style={{ width: '25%' }}>Endereço</th>
              <th style={{ width: '15%' }}>Telefone</th>
              {/* Ações: Candidatar-se a vagas e mostrar vagas às quais já se candidatou */}
              <th style={{ width: '20%' }}>Ações</th>
            </tr>
          </thead>
          <tbody>
            {listaCandidatos?.map((candidato) => {
              return (
                //   necessário identificar cada linha da tabela usando "key"
                // key → ajuda o React na rendereização dos componentes no DOM virtual
                <tr key={candidato.cand_cpf}>
                  <td>{candidato.cand_cpf}</td>
                  <td>{candidato.cand_nome}</td>
                  <td>{candidato.cand_endereco}</td>
                  <td>{candidato.cand_telefone}</td>
                  <td>
                    <cell style={{ paddingRight: '10px' }}>
                      {/* EXIBIR VAGAS DO CANDIDATO */}
                      <Button variant='primary' onClick={buscarVagasDoCandidato}>
                        <svg xmlns='http://www.w3.org/2000/svg' width='16' height='16' fill='currentColor' class='bi bi-list-ol' viewBox='0 0 16 16'>
                          <path fill-rule='evenodd' d='M5 11.5a.5.5 0 0 1 .5-.5h9a.5.5 0 0 1 0 1h-9a.5.5 0 0 1-.5-.5m0-4a.5.5 0 0 1 .5-.5h9a.5.5 0 0 1 0 1h-9a.5.5 0 0 1-.5-.5m0-4a.5.5 0 0 1 .5-.5h9a.5.5 0 0 1 0 1h-9a.5.5 0 0 1-.5-.5' />
                          <path d='M1.713 11.865v-.474H2c.217 0 .363-.137.363-.317 0-.185-.158-.31-.361-.31-.223 0-.367.152-.373.31h-.59c.016-.467.373-.787.986-.787.588-.002.954.291.957.703a.595.595 0 0 1-.492.594v.033a.615.615 0 0 1 .569.631c.003.533-.502.8-1.051.8-.656 0-1-.37-1.008-.794h.582c.008.178.186.306.422.309.254 0 .424-.145.422-.35-.002-.195-.155-.348-.414-.348h-.3zm-.004-4.699h-.604v-.035c0-.408.295-.844.958-.844.583 0 .96.326.96.756 0 .389-.257.617-.476.848l-.537.572v.03h1.054V9H1.143v-.395l.957-.99c.138-.142.293-.304.293-.508 0-.18-.147-.32-.342-.32a.33.33 0 0 0-.342.338zM2.564 5h-.635V2.924h-.031l-.598.42v-.567l.629-.443h.635z' />
                        </svg>
                      </Button>
                    </cell>
                    <cell>
                      {/* CANDIDATAR-SE A VAGAS */}
                      <Button
                        variant='secondary'
                        style={{ marginRight: '5px' }}
                        onClick={() => {
                          // IMPLEMENTAR FUNÇÃO DE CADASTRAR CANDIDATO EM VAGA
                        }}
                      >
                        <svg xmlns='http://www.w3.org/2000/svg' width='16' height='16' fill='currentColor' class='bi bi-pencil-square' viewBox='0 0 16 16'>
                          <path d='M15.502 1.94a.5.5 0 0 1 0 .706L14.459 3.69l-2-2L13.502.646a.5.5 0 0 1 .707 0l1.293 1.293zm-1.75 2.456-2-2L4.939 9.21a.5.5 0 0 0-.121.196l-.805 2.414a.25.25 0 0 0 .316.316l2.414-.805a.5.5 0 0 0 .196-.12l6.813-6.814z' />
                          <path fill-rule='evenodd' d='M1 13.5A1.5 1.5 0 0 0 2.5 15h11a1.5 1.5 0 0 0 1.5-1.5v-6a.5.5 0 0 0-1 0v6a.5.5 0 0 1-.5.5h-11a.5.5 0 0 1-.5-.5v-11a.5.5 0 0 1 .5-.5H9a.5.5 0 0 0 0-1H2.5A1.5 1.5 0 0 0 1 2.5z' />
                        </svg>
                      </Button>
                    </cell>
                  </td>
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
  );
}
