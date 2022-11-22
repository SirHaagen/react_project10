
export const TaskCard = ({task,deleteTask}) => {
  
  const {id, title, description}= task;
  const handleClick = (e) => deleteTask(e.target.id);

  return (
    <div>
      <h2>{title}</h2>
      <p>{description}</p>
      <button onClick={handleClick} id={id}>Delete Task</button>
    </div>
  )

}