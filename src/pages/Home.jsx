import Navbar from '../components/Navbar';
import HeroSection from '../components/HeroSection';
import Footer from '../components/Footer';
import { Button } from 'react-bootstrap';

export default function Home() {
  return (
    <div style={{ minHeight: '100vh', backgroundColor: '#18181b', color: '#f5f5dc', display: 'flex', flexDirection: 'column' }}>
      <Navbar />
      <main className="flex-grow d-flex flex-column align-items-center justify-content-center pt-4" style={{ flex: 1 }}>
        <div className="w-100 mb-4">
          <HeroSection />
        </div>
        <div className="d-flex justify-content-center mb-4">
          <Button
            variant="primary"
            style={{ backgroundColor: '#7c3aed', borderColor: '#7c3aed', color: '#f5f5dc', minWidth: 160, fontWeight: 500, boxShadow: '0 4px 24px 0 rgba(124,58,237,0.15)' }}
            size="lg"
          >
            try out
          </Button>
        </div>
      </main>
      <Footer />
    </div>
  );
}
