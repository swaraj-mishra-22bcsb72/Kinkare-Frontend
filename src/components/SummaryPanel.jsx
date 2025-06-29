import { useState, useEffect, useRef } from 'react';
import { Card } from 'react-bootstrap';

export default function SummaryPanel() {

  const fullSummary = `
 Mock Summary: Based on the results of your comprehensive blood panel, several indicators suggest areas that require attention. Your Vitamin D levels are significantly below the optimal range, indicating a deficiency that may impact bone health, immunity, and mood regulation. It is recommended that you increase sun exposure where possible and consider a daily supplement of 2000 IU after consulting with your healthcare provider.

Additionally, your lipid profile shows elevated LDL (bad cholesterol) and reduced HDL (good cholesterol), which may increase your risk for cardiovascular disease if not managed promptly. A diet low in saturated fats and regular aerobic exercise is highly recommended.

Your fasting glucose levels were slightly above the normal range, suggesting the early onset of insulin resistance. This may be an early indicator of pre-diabetes. Immediate dietary changes such as reducing sugar and refined carbohydrates, along with regular physical activity, may help reverse this trend.

Liver enzymes (ALT and AST) were mildly elevated, which could indicate mild hepatic stress or early signs of fatty liver disease. Avoid alcohol, maintain a healthy weight, and consider a follow-up liver function test in 3 months.

Your hemoglobin and red blood cell counts are within normal limits, indicating no signs of anemia. However, your B12 levels are at the lower end of the normal spectrum. Consider incorporating more B12-rich foods such as eggs, dairy, and fortified cereals, or a supplement if needed.

In summary, while your current health status does not reflect immediate danger, proactive lifestyle adjustments and regular monitoring will be crucial to prevent chronic conditions. A follow-up consultation with a physician is advised for tailored guidance based on these findings.
`;
  const [displayedSummary, setDisplayedSummary] = useState('');
  const [showCursor, setShowCursor] = useState(true);

  const scrollRef = useRef(null);

  useEffect(() => {
    let i = 0;
    const typingInterval = setInterval(() => {
      if (i < fullSummary.length) {
        setDisplayedSummary(prev => prev + fullSummary.charAt(i));
        i++;
      } else {
        clearInterval(typingInterval);
      }
    }, 50);

    const cursorInterval = setInterval(() => {
      setShowCursor(prev => !prev);
    }, 500);

    return () => {
      clearInterval(typingInterval);
      clearInterval(cursorInterval);
    };
  }, [fullSummary]);

  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
    }
  }, [displayedSummary]);

  return (
    <div className="p-4 d-flex flex-column align-items-center justify-content-center" style={{ backgroundColor: 'var(--color-surface)', color: 'var(--color-text)', minHeight: 340, fontFamily: 'Poppins, sans-serif', borderRadius: '15px', boxShadow: '0 10px 30px rgba(var(--color-primary-rgb), 0.08)', width: '100%' }}>
      <h2 className="text-center mb-4 fw-bold" style={{ background: 'linear-gradient(135deg, #7c3aed 70%, #a78bfa 100%)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', marginBottom: '18px', marginTop: 0 }}>Summary</h2>
      <Card className="mx-auto mb-4 shadow" style={{ maxWidth: 750, minWidth: 500, width: '90%', backgroundColor: 'var(--color-card-background)', color: 'var(--color-text)', border: 'none', borderRadius: '14px', boxShadow: '0 8px 25px rgba(124,58,237,0.10)' }}>
        <Card.Body style={{ maxHeight: '220px', minHeight: '180px', overflowY: 'auto', whiteSpace: 'pre-wrap', fontSize: '1.08rem', padding: '1.5rem' }} ref={scrollRef}>
          {displayedSummary}
          <span className="typing-cursor" style={{ opacity: showCursor ? 1 : 0 }}>|</span>
        </Card.Body>
      </Card>
    </div>
  );
}
