import logo from './logo.svg';
import './App.css';
import { useState } from 'react';

function App() {

  const [count,setName] = useState('JOE');
  const [lock,toggleLock] = useState('UNLOCKED');
  
  return (
    
    <div className="App">
      <header className="My Proflie">
       
      </header>
        <h1>
            Hello {count}
        </h1>
        <h3>
        Currently PAGE is : {lock}
        </h3>
        <input type = 'text'  id='name' >
        </input>
        <input type = 'submit' onClick = {()=> {if(lock === 'UNLOCKED'){setName(document.getElementById("name").value)}}}/>
        <div>
        <a>
         Enter your name to Update
        </a>
        <footer>
        <div>
        <button onClick = {()=>{ if(lock === 'LOCKED') toggleLock('UNLOCKED'); else toggleLock('LOCKED') }}>Toggle Lock</button>
        </div>
        </footer>
        </div>
    </div> 
       
  );
}

export default App;
