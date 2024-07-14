import { NavLink } from 'react-router-dom'
import '../styles/Navbar.css'

const Navbar = () => {
  return (
    <header>
      <nav>
        <NavLink to='/' exact activeClassName='active'>Inicio</NavLink>
        <NavLink to='/pokemones' activeClassName='active'>Pokemones</NavLink>
      </nav>
    </header>
  )
}

export default Navbar
