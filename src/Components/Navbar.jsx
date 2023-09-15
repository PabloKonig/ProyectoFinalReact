import React,{ useContext } from 'react'
import { ContextGlobal } from './utils/global.context';
import { Link } from 'react-router-dom'

//Este componente debera ser estilado como "dark" o "light" dependiendo del theme del Context

const Navbar = () => {
  const { state, dispatch } = useContext(ContextGlobal);
  const ClassTheme = state.theme === 'dark' ? 'dark_theme' : 'light_theme';
  return (
    <div>
    <nav className={'nav ' + ClassTheme}>
      <ul>
        <li>
          <Link className={ClassTheme} to="/home">Home</Link>
        </li>
        <li>
          <Link className={ClassTheme} to="/contact">Contact</Link>
        </li>
        <li>
          <Link className={ClassTheme} to="/favs">Favs</Link>
        </li>
      </ul>  
      {/* Deberan implementar ademas la logica para cambiar de Theme con el button*/}
      <button onClick={() => dispatch({ type: 'CHANGE_THEME'})}>Change theme</button>
    </nav>
    </div>
  )
}

export default Navbar