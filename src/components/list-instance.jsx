import { PriorityHeader } from "./header";
import { TaskAddingForm } from "./form";
import { TaskList } from "./list";
import { useState } from 'react';

export function ParameterList(props) {
  const [tasks, setTasks] = useState([]);
  const [text, setText] = useState('');

  function handleAddingTask(event) {
    event.preventDefault();

    const doneTasks = tasks.filter(task => task.done);
    const unDoneTasks = tasks.filter(task => !task.done);

    unDoneTasks.push({text: text, id: props.id, done: false});
    setTasks(unDoneTasks.concat(doneTasks));
    setText('');
    props.generateNewId();

    event.target.reset();
  }

  function handleChange(event) {
    setText(event.target.value);
  }

  function handleDelete(id) {
    const filtredList = tasks.filter(task => task.id !== id);

    setTasks(filtredList);
  }

  function handleDone(event, id) {
    const isDone = event.target.checked;
    const markedTask = tasks.filter(task => task.id === id)[0];
    const filteredList = tasks.filter(task => task.id !== id);
    
    markedTask.done = isDone;
    isDone ? filteredList.push(markedTask) : filteredList.unshift(markedTask);
    setTasks(filteredList);
  }

  return (
    <div className='todo__list-priority'>
      <PriorityHeader headerName={props.headerName} />
      <TaskAddingForm handleAddingTask={handleAddingTask} handleChange={handleChange} />
      <TaskList tasks={tasks} handleDelete={handleDelete} handleDone={handleDone} />
    </div>
  )
}