export default function Footer() {
  return (
    <footer className="text-center mt-5 p-4 shadow" style={{ backgroundColor: 'var(--color-dark-elevate)', color: 'var(--color-beige)', fontFamily: 'Poppins, sans-serif', letterSpacing: '0.5px', fontWeight: 500, fontSize: '1.1rem', animation: 'fadeIn 1s' }}>
      <p style={{ margin: 0 }}>&copy; 2025 Kincare</p>
    </footer>
  );
}

/* Add this to index.css or a global CSS file:
@keyframes fadeIn {
  from { opacity: 0; }
  to { opacity: 1; }
}
*/
  