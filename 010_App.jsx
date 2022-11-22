
import TaskList from './components/TaskList';
import TaskForm from './components/TaskForm';
import { tasks as data } from "./data/tasks";
import { useState, useEffect } from "react";

const App = () => {

  const [tasks, setTasks] = useState([]);     //Guardo las tareas en tasks
  useEffect(() => setTasks(data), []);        //Aplica la información del arreglo a setTasks
                                              //Opcional para imprimir dato inicial. Si no quiero,
                                              //eliminar tasks.js y este useEffect

  const addTask = (title, description) => setTasks([...tasks, {
    id: tasks.length,
    title, //Igual a decir title:title 
    description
  }])

  // Tomo la información que se digita en el input (en TaskForm) y que envío de vuelta con el prop
  // desde TaskForm (addTask(data,description)), y esa nueva tarea la agrego en setTasks, 
  // que alimenta a tasks

  const deleteTask = (deleteId) => setTasks(tasks.filter(task => task.id != deleteId));

  return <>
    <TaskForm addTask={addTask} />   {/* Paso la función addTask al componente TaskForm */}
    <TaskList tasks={tasks} deleteTask={deleteTask} />     {/* Envío el dato ingresado en el formulario. Recibo id de task a eliminar */}
  </>
}

export default App