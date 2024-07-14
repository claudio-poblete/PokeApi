import { useState, useEffect } from 'react'
import axios from 'axios'
import { NavLink } from 'react-router-dom'
import '../styles/Pokemones.css'

const Pokemones = () => {
  const [pokemones, setPokemones] = useState([])

  useEffect(() => {
    const fetchData = async () => {
      const response = await axios.get('https://pokeapi.co/api/v2/pokemon?limit=151')
      const results = await Promise.all(
        response.data.results.map(async pokemon => {
          const detailsResponse = await axios.get(pokemon.url)
          return {
            name: pokemon.name,
            image: detailsResponse.data.sprites.front_default
          }
        })
      )
      setPokemones(results)
    }

    fetchData()
  }, [])

  return (
    <div className='pokemones-container'>
      <h1>Pokemones</h1>
      <ul className='pokemon-list'>
        {pokemones.map(pokemon => (
          <li key={pokemon.name} className='pokemon-item'>
            <NavLink to={`/pokemones/${pokemon.name}`} className='pokemon-link'>
              <img src={pokemon.image} alt={pokemon.name} className='pokemon-image' />
              <span className='pokemon-name'>{pokemon.name}</span>
            </NavLink>
          </li>
        ))}
      </ul>
    </div>
  )
}

export default Pokemones
