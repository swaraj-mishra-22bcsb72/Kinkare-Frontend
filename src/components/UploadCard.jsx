import { useState } from 'react';
import { Card, Button, Spinner } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';

export default function UploadCard() {
  const [isDragging, setIsDragging] = useState(false);
  const [file, setFile] = useState(null);
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const handleDragOver = (e) => {
    e.preventDefault();
    setIsDragging(true);
  };

  const handleDragLeave = () => {
    setIsDragging(false);
  };

  const handleDrop = (e) => {
    e.preventDefault();
    setIsDragging(false);
    const droppedFile = e.dataTransfer.files[0];
    if (droppedFile) {
      setFile(droppedFile);
    }
  };

  const handleFileSelect = (e) => {
    const selectedFile = e.target.files[0];
    if (selectedFile) {
      setFile(selectedFile);
    }
  };

  const handleAnalyze = () => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      navigate('/result');
    }, 1800);
    // TODO: Integrate backend API call here
  };

  return (
    <div className="p-4" style={{ backgroundColor: 'var(--color-dark-bg)', color: 'var(--color-beige)', minHeight: 300, fontFamily: 'Poppins, sans-serif', animation: 'fadeIn 1s' }}>
      <h2 className="text-center mb-4 fw-bold" style={{ fontFamily: 'Poppins, sans-serif', letterSpacing: '0.5px', fontWeight: 700 }}>Upload Report</h2>
      <Card
        className={`mx-auto mb-4 shadow text-center ${isDragging ? 'border-primary' : ''}`}
        style={{
          maxWidth: 600,
          backgroundColor: 'var(--color-dark-elevate)',
          color: 'var(--color-beige)',
          border: isDragging ? '2px dashed var(--color-purple)' : '2px dashed var(--color-beige)',
          cursor: 'pointer',
          fontFamily: 'Poppins, sans-serif',
          transition: 'border 0.3s, box-shadow 0.3s',
          animation: 'fadeIn 1.2s'
        }}
        onDragOver={handleDragOver}
        onDragLeave={handleDragLeave}
        onDrop={handleDrop}
        onClick={() => document.getElementById('fileInput').click()}
      >
        <Card.Body className="py-5">
          <input
            type="file"
            id="fileInput"
            className="d-none"
            onChange={handleFileSelect}
            accept=".pdf,.doc,.docx,.jpg,.jpeg,.png"
          />
          <div className="mb-3">
            <i className="bi bi-cloud-upload" style={{ fontSize: '2rem', color: 'var(--color-purple)' }}></i>
          </div>
          <p className="mb-0" style={{ fontFamily: 'Poppins, sans-serif', fontWeight: 500 }}>
            {file ? file.name : 'Drag and drop your file here or click to browse'}
          </p>
        </Card.Body>
      </Card>
      <div className="d-flex justify-content-center gap-3">
        <Button
          variant="primary"
          onClick={handleAnalyze}
          disabled={!file || loading}
          style={{
            backgroundColor: 'var(--color-purple)',
            borderColor: 'var(--color-purple)',
            color: 'var(--color-beige)',
            minWidth: 120,
            boxShadow: '0 4px 24px 0 rgba(124,58,237,0.15)',
            fontFamily: 'Poppins, sans-serif',
            fontWeight: 600,
            letterSpacing: '0.5px',
            fontSize: '1.1rem',
            transition: 'background 0.3s, color 0.3s, box-shadow 0.3s',
            animation: 'fadeIn 1.5s'
          }}
        >
          {loading ? (
            <Spinner animation="border" size="sm" style={{ color: 'var(--color-beige)' }} />
          ) : (
            'Analyze'
          )}
        </Button>
      </div>
    </div>
  );
}