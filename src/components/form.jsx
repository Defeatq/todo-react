export function TaskAddingForm(props) {
  return (
    <form className='todo__input' onSubmit={props.handleAddingTask}>
      <input type="text" className='todo__task-add font-style' placeholder="Добавить..." onChange={props.handleChange} />
      <input type="submit" value='' className='todo__task-add__button' />
    </form>
  )
}