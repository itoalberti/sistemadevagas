import { Button, Container, Nav, Navbar } from 'react-bootstrap';

export default function Menu() {
  return (
    <Navbar className='m-2' bg='light' expand='lg'>
      <Container className='m-0'>
        <Navbar.Brand href='/'>HOME</Navbar.Brand>
        <Navbar.Toggle aria-controls='basic-navbar-nav' />
        <Navbar.Collapse id='basic-navbar-nav' className='justify-content-left'>
          <Nav>
            {/* -----------EXIBIR CANDIDATOS----------- */}
            <Button className='m-2' variant='primary' href='/exibircandidatos'>
              EXIBIR CANDIDATOS
            </Button>
            {/* -----------EXIBIR VAGAS----------- */}
            <Button className='m-2' variant='primary' href='/exibirvagas'>
              EXIBIR VAGAS
            </Button>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}
