import React, { useEffect, } from 'react'
import { useState } from 'react'
import Card from '../Components/Card'
import { useParams } from 'react-router-dom'

//Este componente debera ser estilado como "dark" o "light" dependiendo del theme del Context

const Home = () => {
  const [dentists, setDentists] = useState([])
  const params = useParams();

  const getDentist = async() => {
    const result = await fetch("https://jsonplaceholder.typicode.com/users")
    const data = await result.json()
    setDentists(data)
  }

  useEffect(() => {
    getDentist()

  }, [params])
  
  return (
    <main className="" >
      <h1>Home</h1>
      <div className='card-grid'>
        {getDentists.map(dentist => (<Card data={dentist}/>))}
      </div>
    </main>
  )
}

export default Home