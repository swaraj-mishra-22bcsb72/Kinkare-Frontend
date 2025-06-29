import Navbar from '../components/Navbar';
import SummaryPanel from '../components/SummaryPanel';
import { Container, Row, Col } from 'react-bootstrap';
import Footer from '../components/Footer';
import CallWindow from '../components/CallWindow'; // ✅ Used here

export default function Result() {
  const fullSummary = "Mock summary: Your lab report suggests mild Vitamin D deficiency.";

  return (
    <div style={{ minHeight: '100vh', backgroundColor: 'var(--color-background)', color: 'var(--color-text)', display: 'flex', flexDirection: 'column', fontFamily: 'Poppins, sans-serif', alignItems: 'stretch', justifyContent: 'flex-start' }}>
      <Navbar />
      <div style={{ minHeight: '100vh', background: 'var(--color-background)', color: 'var(--color-text)', fontFamily: 'Poppins, sans-serif', display: 'flex', flexDirection: 'column', alignItems: 'stretch', justifyContent: 'center', paddingTop: '110px', paddingBottom: '90px' }}>
        <Container fluid style={{ width: '100%', margin: 0, paddingTop: '32px', paddingBottom: '32px', paddingLeft: '32px', paddingRight: '32px', display: 'flex', flexDirection: 'row', alignItems: 'stretch', justifyContent: 'stretch' }}>
          <Row className="w-100 flex-nowrap gx-5 gy-4" style={{ minHeight: 420, width: '100%' }}>
            <Col xs={12} md={7} className="d-flex align-items-stretch justify-content-center mb-4 mb-md-0" style={{ paddingRight: '0', paddingLeft: '12px', minWidth: 0 }}>
              <SummaryPanel fullSummary={fullSummary} />
            </Col>
            <Col xs={12} md={5} className="d-flex align-items-stretch justify-content-center mb-4 mb-md-0" style={{ paddingLeft: '0', paddingRight: '12px', minWidth: 0 }}>
              <CallWindow summary={fullSummary} />
            </Col>
          </Row>
        </Container>
      </div>
      <Footer />
    </div>
  );
}
