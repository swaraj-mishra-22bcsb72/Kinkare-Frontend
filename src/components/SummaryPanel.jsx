import { useState } from 'react';
import { useSpeechSynthesis } from 'react-speech-kit';
import { Button, Form, InputGroup, Card, Row, Col } from 'react-bootstrap';

export default function SummaryPanel() {
  const { speak } = useSpeechSynthesis();
  const [summary, setSummary] = useState("Mock summary: Your lab report suggests mild Vitamin D deficiency.");
  const [lang, setLang] = useState('en-US');
  const [number, setNumber] = useState('');

  const handleTextToSpeech = () => {
    speak({ text: summary, lang });
  };

  const handleCall = () => {
    // TODO: Call API with Twilio from backend
    alert(`Pretend calling ${number} with summary:\n\n"${summary}"`);
  };

  return (
    <div className="p-4" style={{ backgroundColor: '#18181b', color: '#f5f5dc', minHeight: 300 }}>
      <h2 className="text-center mb-4 fw-bold">Summary</h2>
      <Card className="mx-auto mb-4 shadow" style={{ maxWidth: 600, backgroundColor: '#232336', color: '#f5f5dc', border: 'none' }}>
        <Card.Body>{summary}</Card.Body>
      </Card>
      <Row className="justify-content-center g-3">
        <Col xs="auto">
          <Form.Select
            value={lang}
            onChange={(e) => setLang(e.target.value)}
            style={{ backgroundColor: '#18181b', color: '#f5f5dc', borderColor: '#7c3aed' }}
          >
            <option value="en-US">English</option>
            <option value="hi-IN">Hindi</option>
            <option value="bn-IN">Bengali</option>
          </Form.Select>
        </Col>
        <Col xs="auto">
          <Button
            onClick={handleTextToSpeech}
            style={{ backgroundColor: '#7c3aed', borderColor: '#7c3aed', color: '#f5f5dc', boxShadow: '0 4px 24px 0 rgba(124,58,237,0.15)' }}
          >
            Text to Speech
          </Button>
        </Col>
        <Col xs="auto">
          <InputGroup>
            <Form.Control
              type="text"
              placeholder="Enter number"
              value={number}
              onChange={(e) => setNumber(e.target.value)}
              style={{ backgroundColor: '#18181b', color: '#f5f5dc', borderColor: '#7c3aed' }}
            />
            <Button
              onClick={handleCall}
              style={{ backgroundColor: '#7c3aed', borderColor: '#7c3aed', color: '#f5f5dc', boxShadow: '0 4px 24px 0 rgba(124,58,237,0.15)' }}
            >
              Make Call
            </Button>
          </InputGroup>
        </Col>
      </Row>
    </div>
  );
}
