import React, { useState } from 'react';
import './App.css';

function App() {
const [number, setNumber] = useState(1)
  return (
    <div className="App">
      <button onClick={()=>{setNumber(number+1)}}>Click Me {number}</button>
      <header className="App-header">
        <p>
          Edit <code>src/App.js</code> and save. Then, refresh the page.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
