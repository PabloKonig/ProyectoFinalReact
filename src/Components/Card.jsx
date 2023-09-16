import React, { useContext, useReducer} from "react"
import { ContextGlobal } from './utils/global.context';
import { Link } from "react-router-dom"

const cardReducer = (cardState, action) => {
  switch (action.type) {
    case "CHANGE_FAV_TRUE":
      return {isFavorite: true};
    case "CHANGE_FAV_FALSE":
      return {isFavorite: false};
    default:
      return cardState;
  }
}

const Card = ({data: { name, username, id }}) => {
  const { state } = useContext(ContextGlobal);
  const ClassTheme = state.theme === 'dark' ? 'dark_theme' : 'light_theme';
  const initialState = {isFavorite: JSON.parse(localStorage.getItem("fav")) ?.some((favCard) => favCard.id === id) || false}
  const [cardState, dispatch] = useReducer(cardReducer, initialState)
  
  const addFav = ()=>{
    // Aqui iria la logica para agregar la Card en el localStorage
    const actualFavs = JSON.parse(localStorage.getItem("fav")) || []

    if(!actualFavs.some((favCard) => favCard.id == id)){
      actualFavs.push({ name, username, id })
      localStorage.setItem("fav", JSON.stringify(actualFavs))
      dispatch({ type: 'CHANGE_FAV_TRUE'})
    }else{
      const deleteFav = actualFavs.filter((favCard) => favCard.id !== id)
      localStorage.setItem("fav", JSON.stringify(deleteFav))
      dispatch({ type: 'CHANGE_FAV_FALSE'})
    }  
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
      <button onClick={addFav} className={"favButton " + ClassTheme}>Add fav {cardState.isFavorite ? '❤️' : '🤍'}</button>
      </div>
  );
};

export default Card;