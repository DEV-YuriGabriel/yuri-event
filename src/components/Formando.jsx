export default function Formando() {
  return (
    <div style={{
      background: '#0d2340',
      padding: '64px 24px',
      textAlign: 'center',
    }}>

      <p style={{
        fontSize: '0.7rem',
        letterSpacing: '0.3em',
        textTransform: 'uppercase',
        color: '#c9a227',
        fontWeight: 700,
        marginBottom: '8px',
        fontFamily: 'Lato, sans-serif',
      }}>
        O formando
      </p>

      <h2 style={{
        fontFamily: 'Playfair Display, serif',
        fontSize: 'clamp(1.6rem, 4vw, 2.4rem)',
        fontWeight: 700,
        color: '#e8c96a',
        marginBottom: '24px',
      }}>
        Você está convidado!
      </h2>

      <p style={{
        fontSize: 'clamp(0.95rem, 2vw, 1.1rem)',
        color: 'rgba(255,255,255,0.8)',
        maxWidth: '600px',
        margin: '0 auto',
        lineHeight: 1.8,
        fontFamily: 'Lato, sans-serif',
      }}>
        Este é um momento especial que só acontece uma vez na vida.
        Venha celebrar comigo essa vitória conquistada com muito esforço e dedicação.
      </p>

      {/* Divisor */}
      <div style={{
        width: '80px', height: '2px',
        background: 'linear-gradient(90deg, transparent, #c9a227, transparent)',
        margin: '32px auto',
      }} />

      <div style={{
        fontFamily: 'Playfair Display, serif',
        fontSize: 'clamp(1.5rem, 4vw, 2.6rem)',
        fontWeight: 900,
        color: '#c9a227',
        letterSpacing: '0.02em',
        marginBottom: '8px',
      }}>
        Yuri Gabriel Pimentel do Rosário
      </div>

      <div style={{
        fontSize: '0.85rem',
        letterSpacing: '0.25em',
        textTransform: 'uppercase',
        color: 'rgba(255,255,255,0.55)',
        fontFamily: 'Lato, sans-serif',
      }}>
        Análise e Desenvolvimento de Sistemas
      </div>

    </div>
  )
}