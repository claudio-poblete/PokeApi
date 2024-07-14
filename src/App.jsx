import { Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar'
import Home from './pages/Home'
import Pokemones from './pages/Pokemones'
import PokemonDetail from './pages/PokemonDetail'

const App = () => {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/pokemones' element={<Pokemones />} />
        <Route path='/pokemones/:name' element={<PokemonDetail />} />
      </Routes>
    </div>
  )
}

export default App
