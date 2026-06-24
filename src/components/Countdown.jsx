//Countdown.jsx Contagem regressiva em tempo real até 27/07/2026 às 20:00h — mostra dias, horas, minutos e segundos.
import { useState, useEffect } from 'react'

export default function Countdown() {
  const target = new Date('2026-07-27T19:00:00-03:00')

  const calcTime = () => {
    const diff = target - Date.now()
    if (diff <= 0) return null
    return {
      dias:  Math.floor(diff / 86400000),
      horas: Math.floor((diff % 86400000) / 3600000),
      min:   Math.floor((diff % 3600000) / 60000),
      seg:   Math.floor((diff % 60000) / 1000),
    }
  }

  const [time, setTime] = useState(calcTime())

  useEffect(() => {
    const interval = setInterval(() => setTime(calcTime()), 1000)
    return () => clearInterval(interval)
  }, [])

  const pad = n => String(n).padStart(2, '0')

  const boxStyle = {
    textAlign: 'center',
    minWidth: '72px',
  }
  const numStyle = {
    display: 'block',
    fontFamily: 'Playfair Display, serif',
    fontSize: 'clamp(2rem, 5vw, 3rem)',
    fontWeight: 700,
    color: '#c9a227',
    lineHeight: 1,
  }
  const labelStyle = {
    fontSize: '0.65rem',
    letterSpacing: '0.2em',
    textTransform: 'uppercase',
    color: 'rgba(255,255,255,0.45)',
    marginTop: '4px',
    display: 'block',
  }
  const sepStyle = {
    fontFamily: 'Playfair Display, serif',
    fontSize: '2.4rem',
    color: '#c9a227',
    opacity: 0.4,
    alignSelf: 'center',
    marginTop: '-6px',
  }

  return (
    <div style={{
      background: '#15355e',
      padding: '36px 24px',
      textAlign: 'center',
    }}>
      <p style={{
        fontSize: '0.7rem',
        letterSpacing: '0.3em',
        textTransform: 'uppercase',
        color: 'rgba(255,255,255,0.5)',
        marginBottom: '20px',
        fontFamily: 'Lato, sans-serif',
      }}>
        faltam para a cerimônia
      </p>

      {time ? (
        <div style={{ display: 'flex', justifyContent: 'center', gap: '20px', flexWrap: 'wrap' }}>
          <div style={boxStyle}><span style={numStyle}>{pad(time.dias)}</span><small style={labelStyle}>dias</small></div>
          <span style={sepStyle}>:</span>
          <div style={boxStyle}><span style={numStyle}>{pad(time.horas)}</span><small style={labelStyle}>horas</small></div>
          <span style={sepStyle}>:</span>
          <div style={boxStyle}><span style={numStyle}>{pad(time.min)}</span><small style={labelStyle}>min</small></div>
          <span style={sepStyle}>:</span>
          <div style={boxStyle}><span style={numStyle}>{pad(time.seg)}</span><small style={labelStyle}>seg</small></div>
        </div>
      ) : (
        <p style={{ color: '#c9a227', fontSize: '1.2rem', letterSpacing: '0.1em' }}>
          🎓 A cerimônia está acontecendo agora!
        </p>
      )}
    </div>
  )
}