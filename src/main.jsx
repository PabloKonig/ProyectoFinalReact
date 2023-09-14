import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter,Routes,Route } from 'react-router-dom'
import './main.css'
import App from './App'
import Home from './Routes/Home'
import Detail from './Routes/Detail'
import Contact from './Routes/Contact'
import Favs from './Routes/Favs'
import ContextProvider from './Components/utils/global.context'

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <ContextProvider>
      <BrowserRouter>
      <Routes>
        <Route path="/" element={<App/>}>
          <Route index element={<Home/>}/>
          <Route path="/contact" element={<Contact/>}/>
          <Route path="/favs" element={<Favs/>}/>
          <Route path="/home" element={<Home/>}/>
          <Route path="/dentist/:id" element={<Detail/>}/>
        </Route>
      </Routes>
      </BrowserRouter>
    </ContextProvider>
  </React.StrictMode>
);
