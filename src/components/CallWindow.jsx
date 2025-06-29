import React, { useState } from 'react';
import { useSpeechSynthesis } from 'react-speech-kit';
import { Button, Form, InputGroup } from 'react-bootstrap';

export default function CallWindow({ summary }) {
  const { speak } = useSpeechSynthesis();
  const [lang, setLang] = useState('en-US');
  const [number, setNumber] = useState('');

  const handleTextToSpeech = () => {
    speak({ text: summary, lang });
  };

  const handleCall = () => {
    alert(`Pretend calling ${number} with summary:\n\n"${summary}"`);
  };

  return (
    <div className="p-4 rounded shadow-lg text-center" style={{ backgroundColor: 'var(--color-surface)', color: 'var(--color-text)', fontFamily: 'Poppins, sans-serif', animation: 'fadeIn 1s', maxWidth: '500px', width: '100%', minHeight: '300px', display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', borderRadius: '15px', boxShadow: '0 10px 30px rgba(var(--color-primary-rgb), 0.08)' }}>
      <h3 style={{ color: 'var(--color-primary)', marginBottom: '1rem', fontWeight: 700, letterSpacing: '0.5px' }}>Call Window</h3>
      <Form.Group className="mb-3 w-100" style={{ maxWidth: 350, margin: '0 auto' }}>
        <Form.Label style={{ color: 'var(--color-text-secondary)' }}>Select Language</Form.Label>
        <Form.Select
          value={lang}
          onChange={(e) => setLang(e.target.value)}
          style={{ backgroundColor: 'var(--color-card-background)', color: 'var(--color-text)', borderColor: 'var(--color-primary)' }}
        >
          <option value="en-US">English</option>
          <option value="hi-IN">Hindi</option>
          <option value="bn-IN">Bengali</option>
        </Form.Select>
      </Form.Group>
      <Button
        onClick={handleTextToSpeech}
        style={{ background: 'linear-gradient(135deg, #7c3aed 70%, #a78bfa 100%)', borderColor: '#7c3aed', color: 'var(--color-surface)', boxShadow: '0 8px 25px rgba(124,58,237,0.3)', marginBottom: '1rem', fontWeight: 600, letterSpacing: '0.5px', minWidth: 160, fontSize: '1.05rem', transition: 'background 0.3s, color 0.3s, box-shadow 0.3s' }}
      >
        Text to Speech
      </Button>
      <InputGroup className="w-100" style={{ maxWidth: 350, margin: '0 auto' }}>
        <Form.Control
          type="text"
          placeholder="Enter number"
          value={number}
          onChange={(e) => setNumber(e.target.value)}
          style={{ backgroundColor: 'var(--color-card-background)', color: 'var(--color-text)', borderColor: 'var(--color-primary)' }}
        />
        <Button
          onClick={handleCall}
          style={{ background: 'linear-gradient(135deg, #7c3aed 70%, #a78bfa 100%)', borderColor: '#7c3aed', color: 'var(--color-surface)', boxShadow: '0 8px 25px rgba(124,58,237,0.3)', fontWeight: 600, letterSpacing: '0.5px', minWidth: 120, fontSize: '1.05rem', transition: 'background 0.3s, color 0.3s, box-shadow 0.3s' }}
        >
          Make Call
        </Button>
      </InputGroup>
    </div>
  );
}