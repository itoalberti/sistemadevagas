import { Col, Image, Row } from 'react-bootstrap';
import Pagina from '../templates/Pagina';
import 'bootstrap/dist/css/bootstrap.min.css';
import job from '../imagens/job.jpg';

export default function TelaInicial(props) {
  return (
    <>
      <Pagina />
      <Row className='justify-content-center' style={{ padding: '20px' }}>
        <Col xs={12} md={8} lg={6}>
          <Image src={job} width={350} className='mx-auto d-block' />
        </Col>
      </Row>
    </>
  );
}
