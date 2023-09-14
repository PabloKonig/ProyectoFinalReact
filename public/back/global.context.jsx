import { useReducer, useEffect, createContext } from "react";

const appcontrol = (state, action)=> {
  switch (action.type){
    case "CHANGETHEME":
      if(state.theme === "light"){
        return {theme: "dark"}
      }else return {theme: "light"};
  }
};

export const initialState = {theme: "", data: []}

export const ContextGlobal = createContext(undefined);

export const ContextProvider = ({ children }) => {
 
  const [state, dispach] = useReducer(appcontrol, initialState)

  useEffect(()=>{
    localStorage.setItem("theme",state.theme.toString());
  },[state.theme]);

  return (
    <ContextGlobal.Provider value={{}}>
      {children}
    </ContextGlobal.Provider>
  );
};
