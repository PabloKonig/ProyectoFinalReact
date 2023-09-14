import React from "react";
import { useState } from "react";

const Form = ({addOnSubmit}) => {
  
  const [name, setName] = useState("")
  const [email, setEmail] = useState("")
  const [mensaje, setMensaje] = useState("")

  const handleSubmit = (e) => {
    e.preventDefault();
    if (name.length <= 5 || !validEmail(email)) {
      setMensaje("Por favor verifique su información nuevamente.")
    } else {
      setMensaje("Gracias " + name + ", te contactaremos cuando antes vía mail")
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
        <input type="text" placeholder="Nombre completo" value={name} onChange={(e) => setName(e.target.value)}/>
        <input type="text" placeholder="Ingrese su email" value={email} onChange={(e) => setEmail(e.target.value)}/>
        <button type="submit">Enviar</button>
        <div>
          {mensaje && <h5>{mensaje}</h5>}
        </div>
      </form>
    </div>
  );
};

export default Form;