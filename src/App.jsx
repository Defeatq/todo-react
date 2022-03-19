import { useState } from 'react';
import './style.css';
import { ParameterList } from './components/list-instance';

function App() {
  const [id, setId] = useState(0);

  function generateNewId() {
    setId(id + 1);
  }

  return (
    <div className='todo__block'>
      <ParameterList headerName={'High'} generateNewId={generateNewId} id={id} />
      <ParameterList headerName={'Low'} generateNewId={generateNewId} id={id} />
    </div>
  )
}

export default App