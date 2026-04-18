import React from 'react';

export default function Checkout({ cartItems, onBack }) {
  const total = cartItems.reduce((sum, item) => sum + item.price, 0);

  const handlePayPalClick = () => {
    alert("تم محاكاة الدفع عبر PayPal بنجاح! سيتم إرسال الكتب بصيغة PDF لبريدك الإلكتروني.");
  };

  return (
    <div className="container" style={{maxWidth: '600px', display: 'flex', justifyContent: 'center', marginTop: '40px'}}>
      <div className="glass-panel" style={{width: '100%', textAlign: 'center'}}>
        <h2 style={{fontSize: '2rem', marginBottom: '20px'}}>إتمام الشراء</h2>
        
        <div style={{margin: '20px 0', borderBottom: '1px solid var(--glass-border)', paddingBottom: '30px'}}>
          <p style={{color: 'var(--text-muted)', fontSize: '1.2rem', marginBottom: '10px'}}>إجمالي المبلغ المطلوب للدفع</p>
          <h3 style={{fontSize: '3.5rem', color: 'var(--accent)', fontWeight: '800', textShadow: '0 4px 10px rgba(0,0,0,0.3)'}}>{total}$</h3>
          <p style={{color: 'var(--text-main)', marginTop: '10px'}}>لعدد: {cartItems.length} كتب (PDF)</p>
        </div>
        
        <div style={{marginBottom: '30px', textAlign: 'right'}}>
          <label style={{display: 'block', marginBottom: '8px', color: 'var(--text-muted)'}}>الاسم الكامل</label>
          <input required type="text" placeholder="مثال: أحمد محمود" style={{width: '100%', padding: '14px', borderRadius: '12px', border: '1px solid var(--glass-border)', background: 'rgba(255,255,255,0.05)', color: 'white', marginBottom: '20px', fontSize: '1.1rem'}} />
          
          <label style={{display: 'block', marginBottom: '8px', color: 'var(--text-muted)'}}>البريد الإلكتروني (لتسلم الكتب)</label>
          <input required type="email" placeholder="example@email.com" style={{width: '100%', padding: '14px', borderRadius: '12px', border: '1px solid var(--glass-border)', background: 'rgba(255,255,255,0.05)', color: 'white', fontSize: '1.1rem'}} />
        </div>

        {/* PayPal Simulated Button */}
        <button 
          className="btn" 
          style={{
            width: '100%', 
            padding: '16px', 
            borderRadius: '50px', 
            border: 'none', 
            background: '#ffc439', 
            color: '#003087', 
            fontWeight: '900', 
            fontSize: '1.3rem', 
            cursor: 'pointer',
            fontStyle: 'italic',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            gap: '8px',
            boxShadow: '0 4px 15px rgba(255, 196, 57, 0.4)',
            transition: 'transform 0.3s'
          }} 
          onClick={handlePayPalClick}
          onMouseOver={(e) => e.currentTarget.style.transform = 'scale(1.02)'}
          onMouseOut={(e) => e.currentTarget.style.transform = 'scale(1)'}
        >
          <span style={{color: '#003087'}}>Pay</span>
          <span style={{color: '#009cde'}}>Pal</span>
        </button>
        
        <button 
          style={{marginTop: '24px', background: 'transparent', color: 'var(--text-main)', border: 'none', cursor: 'pointer', fontSize: '1rem', textDecoration: 'underline'}} 
          onClick={onBack}
        >
          العودة للتسوق
        </button>
      </div>
    </div>
  );
}
