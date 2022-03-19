export function Task(props) {
  return (
    <div>
      {props.done
        ? <div className='task completed'>
            <div className='task__structure'>
              <input type='checkbox' className='task__mark' onChange={event => props.handleDone(event, props.id)} />
              <p className="task__text font-style">{props.taskText}</p>
            </div>
            <span className='task__remove' onClick={() => props.handleDelete(props.id)}></span>
          </div>
        : <div className='task'>
            <div className='task__structure'>
              <input type='checkbox' className='task__mark' onChange={event => props.handleDone(event, props.id)} />
              <p className="task__text font-style">{props.taskText}</p>
            </div>
            <span className='task__remove' onClick={() => props.handleDelete(props.id)}></span>
          </div>}
    </div>
  )
}