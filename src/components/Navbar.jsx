import { Navbar, Nav, Container, Button } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';

export default function AppNavbar() {
  const navigate = useNavigate();
  return (
    <Navbar bg="dark" variant="dark" expand="sm" className="shadow" style={{ backgroundColor: 'var(--color-dark-bg)', fontFamily: 'Poppins, sans-serif' }}>
      <Container>
        <Navbar.Brand href="/" className="fw-bold" style={{ color: 'var(--color-beige)', fontFamily: 'Poppins, sans-serif', letterSpacing: '1px', fontSize: '2rem', transition: 'color 0.3s' }}>KinCare</Navbar.Brand>
        <Nav className="me-auto">
          <Nav.Link href="/" style={{ color: 'var(--color-beige)', fontFamily: 'Poppins, sans-serif', transition: 'color 0.3s' }}>Home</Nav.Link>
          <Nav.Link href="/about" style={{ color: 'var(--color-beige)', fontFamily: 'Poppins, sans-serif', transition: 'color 0.3s' }}>About Us</Nav.Link>
        </Nav>
        <Button
          style={{ backgroundColor: 'var(--color-purple)', borderColor: 'var(--color-purple)', color: 'var(--color-beige)', boxShadow: '0 4px 24px 0 rgba(124,58,237,0.15)', fontFamily: 'Poppins, sans-serif', transition: 'background 0.3s, color 0.3s, box-shadow 0.3s' }}
          className="ms-2 px-4 fw-medium"
          onClick={() => navigate('/analyze')}
        >
          Try Now
        </Button>
      </Container>
    </Navbar>
  );
}