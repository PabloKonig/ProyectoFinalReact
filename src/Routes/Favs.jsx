import React, {useContext, useEffect, useState} from "react";
import Card from "../Components/Card";
import { ContextGlobal } from "../Components/utils/global.context";

//Este componente debera ser estilado como "dark" o "light" dependiendo del theme del Context

const Favs = () => {
  const [favArray, setFavArray] = useState([]);
  const { state } = useContext(ContextGlobal);
  const ClassTheme = state.theme === 'dark' ? 'dark_theme' : 'light_theme';
  const dentists = state.data;

  const loadArrayLocalStorage = () => {
    const storageArray = localStorage.getItem('fav');
    if (storageArray) {
      setFavArray(JSON.parse(storageArray));
    }
  };

  const delFav = () => {
    setFavArray([]);
    localStorage.removeItem('fav');
  }
 
  useEffect(()=>{
    loadArrayLocalStorage();
  },[]);

  return (
    <>
      <div className="divFav">
      <h1>Dentists Favs</h1>
      <button onClick={delFav} className={"favButton " + ClassTheme}>Delete all favs</button>
      </div>
      <div className={"card-grid " + ClassTheme}>  
        {/* este componente debe consumir los destacados del localStorage */}
        {/* Deberan renderizar una Card por cada uno de ellos */}
        {favArray.map(fav => (<Card key={fav.id} data={fav}/>))}
      </div>
    </>
  );
};

export default Favs;
