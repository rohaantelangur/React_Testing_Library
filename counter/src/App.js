import './App.css';
import { Button } from './Components/Button';
import { useState } from 'react';

function App() {
  const [counter, setcounter] = useState(0)
  return (
    <div className="App">
      <h3>Counter :- {counter}</h3>
      <Button
      className="ADDBTN"
      onClick={()=>{
        setcounter(+counter+5)
      }}
      >ADD</Button>
      <Button
      className="REDUCBTN"
      onClick={()=>{
        setcounter(counter-5)
      }}

      >REDUCE</Button>
    </div>
  );
}

export default App;
