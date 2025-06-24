import Navbar from '../components/Navbar';
import SummaryPanel from '../components/SummaryPanel';
import Footer from '../components/Footer';
import { Container, Row, Col } from 'react-bootstrap';

export default function Result() {
  return (
    <div style={{ minHeight: '100vh', backgroundColor: '#18181b', color: '#f5f5dc', display: 'flex', flexDirection: 'column' }}>
      <Navbar />
      <Container fluid className="flex-grow-1 d-flex flex-column justify-content-center align-items-center py-4">
        <Row className="w-100 justify-content-center align-items-center" style={{ minHeight: 400 }}>
          <Col xs={12} md={8} className="d-flex align-items-center justify-content-center">
            <SummaryPanel />
          </Col>
        </Row>
      </Container>
      <Footer />
    </div>
  );
}
