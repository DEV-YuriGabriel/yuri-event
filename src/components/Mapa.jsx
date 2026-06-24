export default function Mapa() {
  return (
    <section style={{ padding: '80px 24px', background: '#f5e9c0' }}>
      <div style={{ maxWidth: '900px', margin: '0 auto' }}>

        <p style={{
          fontSize: '0.7rem',
          letterSpacing: '0.3em',
          textTransform: 'uppercase',
          color: '#c9a227',
          fontWeight: 700,
          marginBottom: '8px',
          fontFamily: 'Lato, sans-serif',
        }}>
          Como chegar
        </p>

        <h2 style={{
          fontFamily: 'Playfair Display, serif',
          fontSize: 'clamp(1.6rem, 4vw, 2.4rem)',
          fontWeight: 700,
          color: '#0d2340',
          marginBottom: '24px',
        }}>
          Localização
        </h2>

        {/* Mapa */}
        <div style={{
          borderRadius: '2px',
          overflow: 'hidden',
          boxShadow: '0 8px 32px rgba(0,0,0,0.12)',
          border: '3px solid #c9a227',
        }}>
          <iframe
            title="Localização IESB Sul"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3839.2!2d-47.9151810!3d-15.8353508!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x935a255ac54e5865%3A0xccb35721f77a92e8!2sCentro%20Universit%C3%A1rio%20IESB%20-%20Campus%20Bras%C3%ADlia%20(Asa%20Sul)!5e0!3m2!1spt-BR!2sbr!4v1700000000000"
            width="100%"
            height="380"
            style={{ border: 'none', display: 'block' }}
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          />
        </div>

        {/* Endereço */}
        <div style={{
          display: 'flex',
          alignItems: 'flex-start',
          gap: '16px',
          marginTop: '24px',
          padding: '20px 24px',
          background: '#0d2340',
          borderRadius: '2px',
        }}>
          <span style={{ fontSize: '1.6rem', flexShrink: 0, marginTop: '2px' }}>📍</span>
          <p style={{ fontSize: '0.95rem', lineHeight: 1.7, color: 'rgba(255,255,255,0.85)', fontFamily: 'Lato, sans-serif' }}>
            <strong style={{ color: '#e8c96a', display: 'block', fontSize: '1rem', marginBottom: '2px' }}>
              IESB Sul — Campus Edson Machado
            </strong>
            SGAS Quadra 613/614, Via L2 Sul, Asa Sul, Brasília – DF
          </p>
        </div>

      </div>
    </section>
  )
}