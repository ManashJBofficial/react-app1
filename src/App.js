import React, { useState } from 'react'

import './App.css';

function App() {

      const [count, setCount] = useState(0)
      function incFunc() {
        setCount(count + 5)
      }
  return (
    <>
      
      
      <div className="app">
        <h1>{count}</h1>
        <button onClick={incFunc}>Increment</button>
      </div>
    </>
  );
}

export default App;
