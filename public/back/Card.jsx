import React from "react";
import { Link } from "react-router-dom";


const Card = ({data: { name, username, id }}) => {

  const addFav = ()=>{
    // Aqui iria la logica para agregar la Card en el localStorage
  }

  return (
    <div className="card">
      <Link to={`dentist/${id}`}>
        <img src='public\images\doctor.jpg' alt='Doctor image'/>
        <h2>{name}</h2>
        <h2>{username}</h2>
        <h3>{id}</h3>
        {/* En cada card deberan mostrar en name - username y el id */}
        {/* No debes olvidar que la Card a su vez servira como Link hacia la pagina de detalle */}
        {/* Ademas deberan integrar la logica para guardar cada Card en el localStorage */}
        <button onClick={addFav} className="favButton">Add fav</button>
      </Link>
    </div>
  );
};

export default Card;
