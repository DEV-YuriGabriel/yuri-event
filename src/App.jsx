import './styles/global.css'
import Hero        from './components/Hero'
import Countdown   from './components/Countdown'
import Formando    from './components/Formando'
import Informacoes from './components/Informacoes'
import Mapa        from './components/Mapa'
import Confirmacao from './components/Confirmacao'
import Rodape      from './components/Rodape'

export default function App() {
  return (
    <>
      <Hero />
      <Countdown />
      <Formando />
      <Informacoes />
      <Mapa />
      <Confirmacao />
      <Rodape />
    </>
  )
}
