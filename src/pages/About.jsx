import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

export default function About() {
  return (
    <div style={{ minHeight: '100vh', backgroundColor: 'var(--color-dark-bg)', color: 'var(--color-beige)', display: 'flex', flexDirection: 'column', fontFamily: 'Poppins, sans-serif' }}>
      <Navbar />
      <main className="flex-grow-1 d-flex flex-column justify-content-center align-items-center py-5">
        <h1 style={{ fontWeight: 700, fontSize: '2.2rem', marginBottom: '1rem' }}>About Us</h1>
        <p style={{ maxWidth: 600, textAlign: 'center', fontSize: '1.1rem', fontWeight: 400 }}>
          KinCare is dedicated to providing accessible, AI-powered healthcare summaries and support. Our mission is to empower users with clear, concise, and actionable health information.
        </p>
      </main>
      <Footer />
    </div>
  );
}