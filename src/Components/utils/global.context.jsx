import { useReducer, useEffect, createContext } from "react";

const contextReducer =(state, action)=> {
  switch (action.type){
    case "CHANGE_THEME":
      return { ...state, theme: state.theme === "light" ? "dark" : "light" };
    case "FETCH_DATA":
      return { ...state, data: action.payload };
    default:
      return state;
  }
};

const getDentist = (dispatch) =>{
  fetch("https://jsonplaceholder.typicode.com/users")
    .then(response => response.json())
    .then(dataApi => {dispatch({ type: "FETCH_DATA", payload: dataApi });})
    .catch((error) => {
      console.error("Error al obtener una respuesta - ", error);
    });
};

export const ContextGlobal = createContext();

const ContextProvider = ({ children }) => {

  const initialState = {theme: localStorage.getItem("theme") || "light", data: [],}
  const [state, dispatch] = useReducer(contextReducer, initialState)

  useEffect(() => {
    getDentist(dispatch);
  }, []);

  useEffect(()=>{
    localStorage.setItem("theme",state.theme);
  },[state.theme]);

  return (
    <ContextGlobal.Provider value={{state, dispatch}}>
      {children}
    </ContextGlobal.Provider>
  );
};

export default ContextProvider;