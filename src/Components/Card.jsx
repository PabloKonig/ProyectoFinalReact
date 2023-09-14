import React, { useContext} from "react"
import { ContextGlobal } from './utils/global.context';
import { Link } from "react-router-dom"

const Card = ({data: { name, username, id }}) => {

  const addFav = ()=>{
    // Aqui iria la logica para agregar la Card en el localStorage
  }

  return (   
      <Link to={`/dentist/${id}`} className="card">
         <img src="./images/doctor.jpg" alt='Doctor image'/>
         <h3>{name}</h3>
         <h3>{username}</h3>
         <h4>{id}</h4>
         {/* En cada card deberan mostrar en name - username y el id */}
         {/* No debes olvidar que la Card a su vez servira como Link hacia la pagina de detalle */}
         {/* Ademas deberan integrar la logica para guardar cada Card en el localStorage */}
         <button onClick={addFav} className="favButton">Add fav</button>
      </Link>
  );
};

export default Card;