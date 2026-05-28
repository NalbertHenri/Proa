import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import './App.css'
import Header from './componentes/Header'
import Home from './componentes/Home'
import Footer from './componentes/Footer'
import Escocia from './componentes/Escocia'
import Aruba from './componentes/Aruba'
import Muralha from './componentes/Muralha'
import Canyon from './componentes/Canyon'

function App() {
  return (
    <main>
      <Router>
          <Header />
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/Escocia' element={<Escocia />} />
            <Route path='/Aruba' element={<Aruba />} />
            <Route path='/Muralha' element={<Muralha />} />
             <Route path='/Canyon' element={<Canyon />} />
          </Routes>
          <Footer />
      </Router>
    </main>
  )
}

export default App
