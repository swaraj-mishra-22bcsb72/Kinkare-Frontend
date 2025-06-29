import { useState, useEffect } from 'react';
import { useSpeechSynthesis } from 'react-speech-kit';
import { Card } from 'react-bootstrap';

export default function SummaryPanel() {

  const fullSummary = "Mock summary: Your lab report suggests mild Vitamin D deficiency.";
  const [displayedSummary, setDisplayedSummary] = useState('');
  const [showCursor, setShowCursor] = useState(true);




  useEffect(() => {
    let i = 0;
    const typingInterval = setInterval(() => {
      if (i < fullSummary.length) {
        setDisplayedSummary(prev => prev + fullSummary.charAt(i));
        i++;
      } else {
        clearInterval(typingInterval);
      }
    }, 50); // Adjust typing speed here

    const cursorInterval = setInterval(() => {
      setShowCursor(prev => !prev);
    }, 500); // Adjust cursor blink speed here

    return () => {
      clearInterval(typingInterval);
      clearInterval(cursorInterval);
    };
  }, [fullSummary]);

  return (
    <div className="p-4" style={{ backgroundColor: 'var(--color-surface)', color: 'var(--color-text)', minHeight: 300, fontFamily: 'Poppins, sans-serif', borderRadius: '15px', boxShadow: '0 10px 30px rgba(var(--color-primary-rgb), 0.08)' }}>
      <h2 className="text-center mb-4 fw-bold" style={{ background: 'linear-gradient(135deg, #7c3aed 70%, #a78bfa 100%)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>Summary</h2>
      <Card className="mx-auto mb-4 shadow" style={{ maxWidth: 600, backgroundColor: 'var(--color-card-background)', color: 'var(--color-text)', border: 'none', borderRadius: '10px' }}>
        <Card.Body>
          {displayedSummary}
          <span className="typing-cursor" style={{ opacity: showCursor ? 1 : 0 }}>|</span>
        </Card.Body>
      </Card>

    </div>
  );
}
