import React from "react";
import { useState } from "react";

const Form = () => {
  
  const [name, setName] = useState("")
  const [email, setEmail] = useState("")
  const [message, setMessage] = useState("")

  const handleSubmit = (e) => {
    e.preventDefault();
    if (name.length <= 5 || !validEmail(email)) {
      setMessage("Por favor verifique su información nuevamente.")
    } else {
      setMessage("Gracias " + name + ", te contactaremos cuanto antes vía mail")
      /* - Aquí llamaría una función que almecena los datos en una base de datos - */
    }
  };
  
  const validEmail = (email) => {
    const testEmail = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i
    return testEmail.test(email)
  }
  
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input id="nombreForm" type="text" placeholder="Nombre completo" value={name} onChange={(e) => setName(e.target.value)}/>
        <input id="emailForm" type="text" placeholder="Ingrese su email" value={email} onChange={(e) => setEmail(e.target.value)}/>
        <button type="submit">Enviar</button>
      </form>
      <div>
          {message && <h5>{message}</h5>}
      </div>
    </div>
  );
};

export default Form;