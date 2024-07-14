import { useNavigate } from 'react-router-dom'
import pokemonImage from '../assets/Pikachu.png'
import '../styles/Home.css'

const Home = () => {
  const navigate = useNavigate()

  const goToPokemones = () => {
    navigate('/pokemones')
  }

  return (
    <div className='home-container'>
      <h1>Hola, maestro Pokémon!</h1>
      <img src={pokemonImage} alt='Pokémon' className='pokemon-image-home' />
      <h3>¡Atrapalos a todos!</h3>
      <button onClick={goToPokemones}>Ver Pokémones</button>
    </div>
  )
}

export default Home
