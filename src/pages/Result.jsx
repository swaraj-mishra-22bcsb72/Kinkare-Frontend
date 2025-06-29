import Navbar from '../components/Navbar';
import SummaryPanel from '../components/SummaryPanel';
import { Container, Row, Col } from 'react-bootstrap';
import Footer from '../components/Footer';
import CallWindow from '../components/CallWindow'; // ✅ Used here

export default function Result() {
  const fullSummary = "Mock summary: Your lab report suggests mild Vitamin D deficiency.";

  return (
    <div style={{ minHeight: '100vh', backgroundColor: 'var(--color-background)', color: 'var(--color-text)', display: 'flex', flexDirection: 'column', fontFamily: 'Poppins, sans-serif', alignItems: 'center', justifyContent: 'flex-start' }}>
      <Navbar />
      <div style={{ minHeight: '100vh', background: 'var(--color-background)', color: 'var(--color-text)', fontFamily: 'Poppins, sans-serif', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', paddingTop: '110px', paddingBottom: '90px' }}>
        <Container style={{ width: '100%', maxWidth: '900px', margin: '0 auto', paddingTop: '32px', paddingBottom: '32px', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
          <Row className="w-100 justify-content-center align-items-center" style={{ minHeight: 400 }}>
            <Col xs={12} md={6} className="d-flex align-items-center justify-content-center mb-4 mb-md-0">
              <SummaryPanel fullSummary={fullSummary} />
            </Col>
            <Col xs={12} md={6} className="d-flex align-items-center justify-content-center">
              <CallWindow summary={fullSummary} />
            </Col>
          </Row>
        </Container>
      </div>
      <Footer />
    </div>
  );
}
