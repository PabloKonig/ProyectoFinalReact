import React from 'react'
import { useContext } from 'react';
import { Link } from 'react-router-dom'

//Este componente debera ser estilado como "dark" o "light" dependiendo del theme del Context

const Navbar = () => {
  const { state, dispatch } = useContext(ContextGlobal);
  return (
    <div className='nav'>
    <nav>
      <ul>
        <li>
          <Link to="/home">Home</Link>
        </li>
        <li>
          <Link to="/contact">Contact</Link>
        </li>
        <li>
          <Link to="/favs">Favs</Link>
        </li>
      </ul>  
      {/* Deberan implementar ademas la logica para cambiar de Theme con el button*/}
      <button onClick={() => dispatch({ type: 'CHANGETHEME'})}>Change theme{state.theme}</button>
    </nav>
    </div>
  )
}

export default Navbar