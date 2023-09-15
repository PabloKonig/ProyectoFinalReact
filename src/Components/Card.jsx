import React, { useContext, useEffect} from "react"
import { ContextGlobal } from './utils/global.context';
import { Link } from "react-router-dom"

const Card = ({data: { name, username, id }}) => {
  
  const { state } = useContext(ContextGlobal);
  const ClassTheme = state.theme === 'dark' ? 'dark_theme' : 'light_theme';

  const addFav = ()=>{
    // Aqui iria la logica para agregar la Card en el localStorage
      localStorage.setItem("fav",JSON.stringify(state.data));
  }

  return (   
      <div className={"card " + ClassTheme}>
      <Link to={`/dentist/${id}`} className={ClassTheme}>
         <img src="./images/doctor.jpg" alt='Doctor image'/>
         <h4>{name}</h4>
         <h4>{username}</h4>
         <h5>{id}</h5>
         {/* En cada card deberan mostrar en name - username y el id */}
         {/* No debes olvidar que la Card a su vez servira como Link hacia la pagina de detalle */}
         {/* Ademas deberan integrar la logica para guardar cada Card en el localStorage */}  
      </Link>
      <button onClick={addFav} className={"favButton " + ClassTheme}>Add fav</button>
      </div>
  );
};

export default Card;