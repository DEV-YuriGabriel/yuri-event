export default function Informacoes() {
  const cardStyle = {
    background: '#fff',
    border: '1px solid #e8e0cc',
    borderTop: '4px solid #c9a227',
    borderRadius: '2px',
    padding: '32px 28px',
    boxShadow: '0 4px 24px rgba(0,0,0,0.06)',
  }

  const rowStyle = {
    display: 'flex',
    justifyContent: 'space-between',
    gap: '12px',
    borderBottom: '1px dashed #e8e0cc',
    padding: '7px 0',
    fontSize: '0.93rem',
    color: '#3a3a3a',
  }

  return (
    <section style={{ padding: '80px 24px', background: '#faf6ed' }}>
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
          Detalhes do evento
        </p>

        <h2 style={{
          fontFamily: 'Playfair Display, serif',
          fontSize: 'clamp(1.6rem, 4vw, 2.4rem)',
          fontWeight: 700,
          color: '#0d2340',
          marginBottom: '28px',
        }}>
          Informações da Cerimônia
        </h2>

        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
          gap: '28px',
        }}>

          {/* Card Data & Horário */}
          <div style={cardStyle}>
            <span style={{ fontSize: '2rem', marginBottom: '16px', display: 'block' }}>📅</span>
            <h3 style={{
              fontFamily: 'Playfair Display, serif',
              fontSize: '1.15rem',
              color: '#0d2340',
              marginBottom: '14px',
            }}>
              Data & Horário
            </h3>
            <div>
              <div style={rowStyle}>
                <span>Data</span>
                <strong style={{ color: '#0d2340' }}>Segunda, 27/07/2026</strong>
              </div>
              <div style={rowStyle}>
                <span>Entrada dos Convidados</span>
                <strong style={{ color: '#0d2340' }}>a partir das 17:00h</strong>
              </div>
              <div style={rowStyle}>
                <span>Início da Cerimônia</span>
                <strong style={{ color: '#0d2340' }}>20:00h</strong>
              </div>
              <div style={{
                marginTop: '12px',
                padding: '10px 12px',
                background: '#fff8e6',
                border: '1px solid #e8c96a',
                borderRadius: '4px',
                fontSize: '0.85rem',
                color: '#3a3a3a',
                lineHeight: 1.6,
              }}>
                <span style={{ color: '#c9a227', fontWeight: 700, display: 'block', marginBottom: '4px' }}>
                  ⚠️ Atenção
                </span>
                É obrigatória a apresentação do <strong>QR code individual</strong> para acesso dos convidados.
              </div>
            </div>
          </div>

          {/* Card Local */}
          <div style={cardStyle}>
            <span style={{ fontSize: '2rem', marginBottom: '16px', display: 'block' }}>🏛️</span>
            <h3 style={{
              fontFamily: 'Playfair Display, serif',
              fontSize: '1.15rem',
              color: '#0d2340',
              marginBottom: '14px',
            }}>
              Local
            </h3>
            <p style={{ fontSize: '0.93rem', color: '#3a3a3a', lineHeight: 1.7 }}>
              <strong style={{ color: '#0d2340', fontSize: '1rem', display: 'block', marginBottom: '4px' }}>
                Campus Edson Machado
              </strong>
              Centro Universitário IESB — Asa Sul<br />
              SGAS Quadra 613/614, Via L2 Sul<br />
              Asa Sul, Brasília – DF
            </p>
          </div>

        </div>
      </div>
    </section>
  )
}