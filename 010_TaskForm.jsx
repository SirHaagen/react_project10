
import { useState } from "react";

const TaskForm = ({ addTask }) => {
  //Recibo la función addTask para colocarle los parámetros data y description 
  //(información ingresada) y enviar de vuelta a App

  let [data, setData] = useState('');
  let [description, setDescription] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();         //Para que no se recargue la página
    addTask(data, description);
    //Yo recibo de App.jsx la función addTask, y a esa función la devuelvo pero con el valor
    //que se ha digitado en el input (guardado en data). Entonces por medio del prop estoy conectando
    //a los componentes App y TaskForm
    e.target.reset();   //Limpio el formulario después de tomar la información
  }

  const handleChange = (e) => setData(e.target.value)   //Guardo dato en data
  const handleDescription = (e) => setDescription(e.target.value)   //Guardo dato en description

  return (
    <form onSubmit={handleSubmit}>
      <input type="text" onChange={handleChange} placeholder="Write down your task" autoFocus />
      <textarea onChange={handleDescription} placeholder="Write down the description"></textarea>
      <button>Send</button>
    </form>
  )

}

export default TaskForm