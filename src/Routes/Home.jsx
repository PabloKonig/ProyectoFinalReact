import React, {useContext} from 'react'
import Card from '../Components/Card'
import { ContextGlobal } from '../Components/utils/global.context'

const Home = () => {
  const { state } = useContext(ContextGlobal);
  const ClassTheme = state.theme === 'dark' ? 'dark_theme' : 'light_theme';
  const dentists = state.data;
  return (
    <main className={ClassTheme} >
      <h1>Home</h1>
      <div className='card-grid'>
        {dentists.map(dentist => (<Card key={dentist.id} data={dentist}/>))}
      </div>
    </main>
  )
}

export default Home