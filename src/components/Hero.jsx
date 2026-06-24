import { useEffect, useRef } from 'react'

export default function Hero() {
  const heroRef = useRef(null)

  // Confetes animados
  useEffect(() => {
    const hero = heroRef.current
    const colors = ['#c9a227', '#e8c96a', '#fff', '#0d2340']

    for (let i = 0; i < 28; i++) {
      const dot = document.createElement('div')
      const size = Math.random() * 8 + 4
      dot.style.cssText = `
        position: absolute;
        border-radius: 2px;
        width: ${size}px;
        height: ${size * (Math.random() > 0.5 ? 2.5 : 1)}px;
        left: ${Math.random() * 100}%;
        top: ${Math.random() * 100}%;
        background: ${colors[Math.floor(Math.random() * colors.length)]};
        opacity: 0.55;
        animation: fall ${Math.random() * 8 + 6}s linear ${Math.random() * 6}s infinite;
      `
      hero.appendChild(dot)
    }
  }, [])

  return (
    <section ref={heroRef} style={{
      position: 'relative',
      minHeight: '100vh',
      background: 'linear-gradient(160deg, #0d2340 0%, #15355e 55%, #1a3d6e 100%)',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      textAlign: 'center',
      padding: '60px 24px 80px',
      overflow: 'hidden',
    }}>

      {/* Estilo da animação */}
      <style>{`
        @keyframes fall {
          0%   { transform: translateY(-40px) rotate(0deg); opacity: 0.6; }
          100% { transform: translateY(110vh) rotate(360deg); opacity: 0; }
        }
        .hero-corner-tl {
          position: absolute; top: 24px; left: 24px;
          width: 180px; height: 180px;
          border: 2px solid #c9a227; opacity: 0.35;
          border-right: none; border-bottom: none;
        }
        .hero-corner-br {
          position: absolute; bottom: 24px; right: 24px;
          width: 180px; height: 180px;
          border: 2px solid #c9a227; opacity: 0.35;
          border-left: none; border-top: none;
        }
      `}</style>

      {/* Cantos decorativos */}
      <div className="hero-corner-tl" />
      <div className="hero-corner-br" />

      {/* Conteúdo */}
      <p style={{
        fontSize: '0.75rem',
        letterSpacing: '0.35em',
        textTransform: 'uppercase',
        color: '#e8c96a',
        marginBottom: '16px',
        fontFamily: 'Lato, sans-serif',
      }}>
        Convite Especial · IESB Sul · 2026
      </p>

      <h1 style={{
        fontFamily: 'Playfair Display, serif',
        fontSize: 'clamp(2.6rem, 7vw, 5.2rem)',
        fontWeight: 900,
        color: '#fff',
        lineHeight: 1.05,
        textShadow: '0 4px 24px rgba(0,0,0,0.4)',
      }}>
        Colocação<br />de <span style={{ color: '#c9a227' }}>Grau</span>
      </h1>

      {/* Divisor dourado */}
      <div style={{
        width: '80px', height: '2px',
        background: 'linear-gradient(90deg, transparent, #c9a227, transparent)',
        margin: '28px auto',
      }} />

      <p style={{
        fontSize: 'clamp(0.95rem, 2.2vw, 1.15rem)',
        color: 'rgba(255,255,255,0.82)',
        maxWidth: '560px',
        lineHeight: 1.7,
        fontFamily: 'Lato, sans-serif',
      }}>
        Com imensa alegria, convido você para compartilhar este momento
        inesquecível da minha formatura! Sua presença é fundamental para
        celebrar essa grande conquista.
      </p>

      {/* Badge da data */}
      <div style={{
        marginTop: '40px',
        display: 'inline-block',
        background: '#c9a227',
        color: '#0d2340',
        fontFamily: 'Playfair Display, serif',
        fontSize: 'clamp(1.1rem, 3vw, 1.5rem)',
        fontWeight: 700,
        padding: '14px 36px',
        letterSpacing: '0.04em',
        clipPath: 'polygon(8px 0%, 100% 0%, calc(100% - 8px) 100%, 0% 100%)',
      }}>
        27 de Julho de 2026
      </div>

    </section>
  )
}