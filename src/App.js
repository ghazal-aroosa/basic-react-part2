import React , {useState} from 'react';
import './App.css';
import Message from './Message.js';

function App() {
  let [count, setCount]=useState(0);
  let [isMorning, setMorning]=useState(true);

  return (

  //<div className={`nightColor ${isMorning ? 'dayColor' : ''}`}>
  <div className={isMorning ? 'dayColor' : 'nightColor'}>
      <h1>Good {isMorning ? 'Morning' : 'Night'}</h1>

      <Message counter={count}/>   


      <button onClick={()=>setCount(count+1)}> counting  Button</button>
      <button onClick={()=>setMorning(!isMorning)}> change Day</button>
    </div>
  );
}

export default App;
