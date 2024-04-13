import { Col, Image } from 'react-bootstrap';
import Pagina from '../templates/Pagina';
import 'bootstrap/dist/css/bootstrap.min.css';
import job from '../imagens/job.jpg';

export default function TelaInicial(props) {
  return (
    <>
      <Pagina />
      <Col style={{ padding: '20px' }}>
        <Image src={job} width={200} />
      </Col>
    </>
  );
}
