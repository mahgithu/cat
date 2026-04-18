import { useState } from 'react';

function App() {
  return (
    <>
      <nav className="navbar">
        <div className="brand">🐈 CatBook</div>
      </nav>
      
      <main className="container">
        <section className="hero glass-panel" style={{display: 'flex', flexDirection: 'row-reverse', alignItems: 'center', gap: '40px', flexWrap: 'wrap'}}>
          <div style={{flex: '1', minWidth: '300px'}}>
            <img 
              src="/cat.png" 
              alt="Orange Cat Reading" 
              style={{
                width: '100%', 
                borderRadius: '20px', 
                boxShadow: '0 20px 50px rgba(0,0,0,0.5)',
                filter: 'drop-shadow(0 0 20px rgba(249, 115, 22, 0.4))'
              }} 
            />
          </div>
          <div style={{flex: '1.5', minWidth: '300px', textAlign: 'right', direction: 'rtl'}}>
            <h1 style={{fontSize: '3.5rem', marginBottom: '20px', background: 'linear-gradient(to right, #fb923c, #fcd34d)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent'}}>
              دليلك الشامل لتربية القطط البرتقالية 🐾
            </h1>
            <p style={{fontSize: '1.3rem', color: 'var(--text-muted)', marginBottom: '30px', lineHeight: '1.8'}}>
              اكتشف أسرار شخصية القطط البرتقالية، طرق العناية بها، وكيفية بناء رابطة قوية مع صديقك الفروي الجديد. الكتاب بصيغة PDF وسيكون متاحاً للتحميل الفوري بعد الشراء عبر منصة Payhip الآمنة.
            </p>
            <div style={{display: 'flex', alignItems: 'center', gap: '20px', marginBottom: '30px'}}>
              <span style={{fontSize: '3rem', fontWeight: '900', color: '#fb923c'}}>$12</span>
              <span style={{textDecoration: 'line-through', color: 'var(--text-muted)', fontSize: '1.5rem'}}>$25</span>
            </div>
            
            <a 
              href="https://payhip.com/b/rvmZR" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="btn btn-primary" 
              style={{
                display: 'inline-block',
                padding: '20px 40px', 
                fontSize: '1.5rem', 
                borderRadius: '50px', 
                background: 'linear-gradient(45deg, #f97316, #ea580c)', 
                color: 'white',
                textDecoration: 'none',
                textAlign: 'center',
                boxShadow: '0 8px 25px rgba(234, 88, 12, 0.4)',
                transform: 'translateY(0)',
                transition: 'all 0.3s'
              }}
              onMouseOver={(e) => e.currentTarget.style.transform = 'translateY(-3px)'}
              onMouseOut={(e) => e.currentTarget.style.transform = 'translateY(0)'}
            >
              اشترِ الكتاب الآن 🛒
            </a>
            
            {/* Social Media Links */}
            <div style={{display: 'flex', justifyContent: 'flex-start', direction: 'ltr', gap: '25px', marginTop: '50px', marginLeft: '5px'}}>
              <a href="https://www.facebook.com/share/19vYFAZgmP/?mibextid=wwXIfr" target="_blank" rel="noopener noreferrer" style={{color: 'var(--text-muted)', transition: 'all 0.3s'}} onMouseOver={(e)=>{e.currentTarget.style.color='#1877F2'; e.currentTarget.style.transform='scale(1.1)';}} onMouseOut={(e)=>{e.currentTarget.style.color='var(--text-muted)'; e.currentTarget.style.transform='scale(1)';}}>
                <svg width="35" height="35" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path></svg>
              </a>
              <a href="https://www.instagram.com/cat_farfour?igsh=NHczc3MzNXRiYjh6&utm_source=qr" target="_blank" rel="noopener noreferrer" style={{color: 'var(--text-muted)', transition: 'all 0.3s'}} onMouseOver={(e)=>{e.currentTarget.style.color='#E4405F'; e.currentTarget.style.transform='scale(1.1)';}} onMouseOut={(e)=>{e.currentTarget.style.color='var(--text-muted)'; e.currentTarget.style.transform='scale(1)';}}>
                <svg width="35" height="35" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line></svg>
              </a>
              <a href="https://youtube.com/@cat.farfour?si=MKaiM30UNyOzki3P" target="_blank" rel="noopener noreferrer" style={{color: 'var(--text-muted)', transition: 'all 0.3s'}} onMouseOver={(e)=>{e.currentTarget.style.color='#FF0000'; e.currentTarget.style.transform='scale(1.1)';}} onMouseOut={(e)=>{e.currentTarget.style.color='var(--text-muted)'; e.currentTarget.style.transform='scale(1)';}}>
                <svg width="35" height="35" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22.54 6.42a2.78 2.78 0 0 0-1.94-2C18.88 4 12 4 12 4s-6.88 0-8.6.46a2.78 2.78 0 0 0-1.94 2A29 29 0 0 0 1 11.75a29 29 0 0 0 .46 5.33 2.78 2.78 0 0 0 1.94 2c1.72.46 8.6.46 8.6.46s6.88 0 8.6-.46a2.78 2.78 0 0 0 1.94-2 29 29 0 0 0 .46-5.33 29 29 0 0 0-.46-5.33z"></path><polygon points="9.75 15.02 15.5 11.75 9.75 8.48 9.75 15.02"></polygon></svg>
              </a>
            </div>

          </div>
        </section>
      </main>
    </>
  );
}

export default App;
