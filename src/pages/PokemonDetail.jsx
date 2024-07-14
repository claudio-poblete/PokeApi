import { useState, useEffect } from 'react'
import axios from 'axios'
import { useParams } from 'react-router-dom'
import '../styles/PokemonDetail.css'

const PokemonDetail = () => {
  const { name } = useParams()
  const [pokemon, setPokemon] = useState(null)

  useEffect(() => {
    const fetchPokemon = async () => {
      try {
        const response = await axios.get(`https://pokeapi.co/api/v2/pokemon/${name}`)
        setPokemon(response.data)
      } catch (error) {
        console.error('Error fetching Pokémon details:', error)
      }
    }

    fetchPokemon()
  }, [name])

  if (!pokemon) {
    return <div className='loading-text'>Loading...</div>
  }

  return (
    <div className='pokemon-detail-container'>
      <h2>Detalle de {pokemon.name}</h2>
      <div className='pokemon-detail'>
        <div className='pokemon-image-container'>
          <img src={pokemon.sprites.front_default} alt={pokemon.name} className='pokemon-image' />
        </div>
        <div className='pokemon-info'>
          <h3>Información</h3>
          <p><strong>Nombre:</strong> {pokemon.name}</p>
          <p><strong>Altura:</strong> {pokemon.height / 10} m</p>
          <p><strong>Peso:</strong> {pokemon.weight / 10} kg</p>
          <h3>Habilidades</h3>
          <ul className='pokemon-abilities'>
            {pokemon.abilities.map((ability) => (
              <li key={ability.ability.name}>{ability.ability.name}</li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  )
}

export default PokemonDetail
