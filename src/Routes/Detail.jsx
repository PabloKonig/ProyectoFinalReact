import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { ContextGlobal } from '../Components/utils/global.context'

//Este componente debera ser estilado como "dark" o "light" dependiendo del theme del Context

const Detail = () => {

  const [dentistDetail, setDentistDetail] = useState([])
  const params = useParams();

 
  const getDentist = () =>{
     fetch(`https://jsonplaceholder.typicode.com/users/${params.id}`)
        .then(response => response.json())
        .then(dataApi => setDentistDetail(dataApi))
        .catch((error) => {
         console.error("Error al obtener una respuesta - ", error);
        });
  };  
  
  useEffect(() => {
    getDentist();
  }, [params])

  return (
    <>
      <h1>Dentist {dentistDetail.id} details</h1>
      <table>
        <tbody>
          <tr>
            <th>Name</th>
            <td>{dentistDetail.name}</td>
          </tr>
          <tr>
            <th>Email</th>
            <td>{dentistDetail.email}</td>
          </tr>
          <tr>
            <th>Phone</th>
            <td>{dentistDetail.phone}</td>
          </tr>
          <tr>
            <th>Website</th>
            <td>{dentistDetail.website}</td>
          </tr>
        </tbody>
      </table>
    </>
  )
}

export default Detail