import React, {useContext} from "react";
import { ContextGlobal } from "./Components/utils/global.context";
import Footer from "./Components/Footer";
import Navbar from "./Components/Navbar";
import { Outlet } from "react-router-dom";

function App() {
  const { state} = useContext(ContextGlobal);
  const ClassTheme = state.theme === 'dark' ? 'dark_theme' : 'light_theme';
  return (
      <div className={'App '+ ClassTheme}>
          <Navbar/>
          <Outlet/>
          <Footer/>
      </div>
  );
}

export default App;
