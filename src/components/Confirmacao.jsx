// Confirmacao.jsx Botão de confirmação de presença via WhatsApp — abre uma conversa direto com você.



export default function Confirmacao() {
  const whatsapp = '5561986554514' // troca pelo seu número!
  const mensagem = encodeURIComponent('Olá Yuri! Confirmo minha presença na sua formatura 🎓')

  return (
    <section style={{
      padding: '80px 24px',
      background: '#faf6ed',
      textAlign: 'center',
    }}>
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
          Confirmação
        </p>

        <h2 style={{
          fontFamily: 'Playfair Display, serif',
          fontSize: 'clamp(1.6rem, 4vw, 2.4rem)',
          fontWeight: 700,
          color: '#0d2340',
          marginBottom: '16px',
        }}>
          Confirme sua presença
        </h2>

        <p style={{
          fontSize: '0.95rem',
          color: '#3a3a3a',
          marginBottom: '36px',
          fontFamily: 'Lato, sans-serif',
          lineHeight: 1.7,
        }}>
          Sua presença fará este momento ainda mais especial.<br />
          Clique abaixo para confirmar pelo WhatsApp.
        </p>

        <a
          href={`https://wa.me/${whatsapp}?text=${mensagem}`}
          target="_blank"
          rel="noopener noreferrer"
          style={{
            display: 'inline-block',
            background: '#c9a227',
            color: '#0d2340',
            fontFamily: 'Lato, sans-serif',
            fontWeight: 700,
            fontSize: '0.95rem',
            letterSpacing: '0.08em',
            textTransform: 'uppercase',
            padding: '16px 44px',
            textDecoration: 'none',
            clipPath: 'polygon(10px 0%, 100% 0%, calc(100% - 10px) 100%, 0% 100%)',
            transition: 'background 0.2s',
          }}
          onMouseEnter={e => e.target.style.background = '#e8c96a'}
          onMouseLeave={e => e.target.style.background = '#c9a227'}
        >
          ✉ Confirmar Presença
        </a>

      </div>
    </section>
  )
}