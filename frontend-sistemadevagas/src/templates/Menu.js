import { Container, Nav, NavDropdown, Navbar } from 'react-bootstrap';

export default function Menu() {
  return (
    <Navbar className='m-2' bg='light' expand='lg'>
      <Container className='m-0'>
        <Navbar.Brand href='/'>HOME</Navbar.Brand>
        <Navbar.Toggle aria-controls='basic-navbar-nav' />
        <Navbar.Collapse id='basic-navbar-nav'>
          <Nav className='me-auto'>
            {/* -----------EXIBIR CANDIDATOS----------- */}
            <NavDropdown title='EXIBIR CANDIDATOS' id='basic-nav-dropdown'>
              <NavDropdown.Item href='/exibircandidatos'>Exibir agências</NavDropdown.Item>
            </NavDropdown>
            {/* -----------EXIBIR VAGAS----------- */}
            <NavDropdown title='EXIBIR VAGAS' id='basic-nav-dropdown'>
              <NavDropdown.Item href='/exibirvagas'>Exibir clientes</NavDropdown.Item>
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}
