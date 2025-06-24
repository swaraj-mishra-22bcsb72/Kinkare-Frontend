import Navbar from '../components/Navbar';
import UploadCard from '../components/UploadCard';
import Footer from '../components/Footer';
import { Container, Row, Col } from 'react-bootstrap';

export default function Analyze() {
  return (
    <div style={{ minHeight: '100vh', backgroundColor: 'var(--color-dark-bg)', color: 'var(--color-beige)', display: 'flex', flexDirection: 'column', fontFamily: 'Poppins, sans-serif' }}>
      <Navbar />
      <Container fluid className="flex-grow-1 d-flex flex-column justify-content-center align-items-center py-4">
        <Row className="w-100 justify-content-center align-items-center" style={{ minHeight: 400 }}>
          <Col xs={12} md={6} className="d-flex align-items-center justify-content-center">
            <UploadCard />
          </Col>
        </Row>
      </Container>
      <Footer />
    </div>
  );
}
