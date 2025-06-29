import { useState } from 'react';
import { Card, Button, Spinner, Modal } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import { Document, Page, pdfjs } from 'react-pdf';
pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.js`;

export default function UploadCard() {
  const [isDragging, setIsDragging] = useState(false);
  const [file, setFile] = useState(null);
  const [fileUrl, setFileUrl] = useState(null);
  const [loading, setLoading] = useState(false);
  const [showModal, setShowModal] = useState(false);
  const [numPages, setNumPages] = useState(null);
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
      setFileUrl(URL.createObjectURL(droppedFile));
    }
  };

  const handleFileSelect = (e) => {
    const selectedFile = e.target.files[0];
    if (selectedFile) {
      setFile(selectedFile);
      setFileUrl(URL.createObjectURL(selectedFile));
    }
  };

  const handleAnalyze = () => {
    setLoading(true);
    setShowModal(true);
    setTimeout(() => {
      setLoading(false);
      setShowModal(false);
      navigate('/result');
    }, 3000);
  };

  return (
    <div className="p-4" style={{ backgroundColor: 'var(--color-card-background)', color: 'var(--color-text)', minHeight: 420, height: 520, fontFamily: 'Poppins, sans-serif', animation: 'fadeIn 1s', borderRadius: '15px', boxShadow: '0 10px 30px rgba(var(--color-primary-rgb), 0.08)', width: '100%', maxWidth: 700, display: 'flex', flexDirection: 'column', justifyContent: 'flex-start', alignItems: 'center' }}>
      <h2 className="text-center mb-4 fw-bold" style={{ fontFamily: 'Poppins, sans-serif', letterSpacing: '0.5px', fontWeight: 700, background: 'linear-gradient(135deg, #7c3aed 70%, #a78bfa 100%)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>Upload Report</h2>
      <Card
        className={`mx-auto mb-4 shadow text-center ${isDragging ? 'border-primary' : ''}`}
        style={{ width: '100%', maxWidth: 650, minHeight: 320, height: 320, backgroundColor: 'var(--color-surface)', color: 'var(--color-text)', border: isDragging ? '2px dashed var(--color-primary)' : '2px dashed var(--color-border)', cursor: 'pointer', fontFamily: 'Poppins, sans-serif', transition: 'border 0.3s, box-shadow 0.3s', animation: 'fadeIn 1.2s', borderRadius: '10px', boxShadow: '0 4px 15px rgba(var(--color-primary-rgb), 0.1)', display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', overflow: 'hidden' }}
        onDragOver={handleDragOver}
        onDragLeave={handleDragLeave}
        onDrop={handleDrop}
        onClick={() => document.getElementById('fileInput').click()}
      >
        <Card.Body className="py-5" style={{ width: '100%', height: '100%', display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', padding: 0 }}>
          <input
            type="file"
            id="fileInput"
            className="d-none"
            onChange={handleFileSelect}
            accept=".pdf,.doc,.docx,.jpg,.jpeg,.png"
          />
          <div className="mb-3">
            <i className="bi bi-cloud-upload" style={{ fontSize: '2rem', background: 'linear-gradient(135deg, #7c3aed 70%, #a78bfa 100%)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}></i>
          </div>
          <p className="mb-0" style={{ fontFamily: 'Poppins, sans-serif', fontWeight: 500, color: 'var(--color-text)' }}>
            {file ? file.name : 'Drag and drop your file here or click to browse'}
          </p>
          {file && fileUrl && (
            <div style={{ margin: '12px 0 0 0', width: 320, height: 180, display: 'flex', justifyContent: 'center', alignItems: 'center', background: '#f8f8fa', borderRadius: 8, boxShadow: '0 2px 8px rgba(0,0,0,0.04)', overflow: 'hidden' }}>
              {file.type.startsWith('image/') ? (
                <img src={fileUrl} alt="Preview" style={{ maxWidth: '100%', maxHeight: '100%', objectFit: 'contain', display: 'block' }} />
              ) : file.type === 'application/pdf' ? (
                <Document file={fileUrl} onLoadSuccess={({ numPages }) => setNumPages(numPages)} loading={<span>Loading PDF...</span>}>
                  <Page pageNumber={1} width={300} height={170} renderTextLayer={false} renderAnnotationLayer={false} />
                </Document>
              ) : null}
            </div>
          )}
        </Card.Body>
      </Card>
      <div className="d-flex justify-content-center gap-3">
        <Button
          variant="primary"
          onClick={handleAnalyze}
          disabled={!file || loading}
          style={{ background: 'linear-gradient(135deg, #7c3aed 70%, #a78bfa 100%)', borderColor: '#7c3aed', color: 'var(--color-surface)', minWidth: 120, boxShadow: '0 8px 25px rgba(124,58,237,0.4)', fontFamily: 'Poppins, sans-serif', fontWeight: 600, letterSpacing: '0.5px', fontSize: '1.1rem', transition: 'background 0.3s, color 0.3s, box-shadow 0.3s', animation: 'fadeIn 1.5s' }}
        >
          Analyze
        </Button>
      </div>
      <Modal show={showModal} centered backdrop="static" keyboard={false} dialogClassName="custom-modal">
        <Modal.Body className="text-center" style={{ backgroundColor: 'var(--color-card-background)', color: 'var(--color-text)', borderRadius: '8px', padding: '30px', boxShadow: '0 10px 30px rgba(var(--color-primary-rgb), 0.08)' }}>
          <Spinner animation="border" style={{ color: 'var(--color-primary)', width: '3rem', height: '3rem' }} />
          <p className="mt-3 mb-0" style={{ fontFamily: 'Poppins, sans-serif', fontSize: '1.2rem', fontWeight: 500 }}>Analyzing your file, please wait...</p>
        </Modal.Body>
      </Modal>
    </div>
  );
}