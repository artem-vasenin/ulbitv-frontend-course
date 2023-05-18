import {useState} from "react";

import './App.css';

function App() {
  const [toggle, setToggle] = useState(false);
  const [input, setInput] = useState('');

  return (
    <div className="App">
      <h1 data-testid="title">Hello Rusich</h1>
      <p data-testid="text">{input}</p>
      {toggle ? <div data-testid="toggle">Toggle div</div> : null}
      <button data-testid="button" onClick={() => setToggle(!toggle)}>Click</button>
      <input data-testid="input" type="text" onChange={e => setInput(e.target.value)}/>
    </div>
  );
}

export default App;
