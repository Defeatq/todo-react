import { Task } from './task';

export function TaskList(props) {
  return (
    <div className='tasks__list'>
      {props.tasks.map(task => (
        <Task key={task.id} id={task.id} done={task.done} taskText={task.text}
              handleDelete={props.handleDelete} handleDone={props.handleDone} />
      ))}
    </div>
  )
}