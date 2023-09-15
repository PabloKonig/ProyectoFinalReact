import React, {useContext} from 'react'
import { ContextGlobal } from './utils/global.context';

const Footer = () => {
  const { state} = useContext(ContextGlobal);
  const ClassTheme = state.theme === 'dark' ? 'dark_theme' : 'light_theme';
  return (
    <footer className={ClassTheme}>
        <p>Powered by</p>
        <img src="/images/DH.png" alt='DH-logo' />
    </footer>
  )
}

export default Footer
