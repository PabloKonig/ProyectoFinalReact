import { useReducer, useEffect, createContext } from "react";

const contextReducer =(state, action)=> {
  switch (action.type){
    case "CHANGETHEME":
      if(state.theme === "light"){
        return {theme: "dark"}
      }else return {theme: "light"};
  }
};

export const initialState = {theme: "light", data: []}

export const ContextGlobal = createContext();

const ContextProvider = ({ children }) => {
 
  const [state, dispatch] = useReducer(contextReducer, initialState)

  useEffect(()=>{
    localStorage.setItem("theme",state.theme.toString());
  },[state.theme]);

  return (
    <ContextGlobal.Provider value={{state, dispatch}}>
      {children}
    </ContextGlobal.Provider>
  );
};

export default ContextProvider;