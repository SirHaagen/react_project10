
import { TaskCard } from "./TaskCard"

const TaskList = ({ tasks, deleteTask }) => {
  //Recibo la información desde Ap de tasks para imprimirla en pantalla
  //Envío el id como argumento de deleteTask de vuelta a App

  return (
    <div>
      {tasks.map(task => {
        return <TaskCard task={task} deleteTask={deleteTask} key={task.id}/>
      })}
    </div>
  )

}

export default TaskList