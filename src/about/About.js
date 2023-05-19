import {useState} from "react";

export const About = () => {
  const [val, setVal] = useState('');
  const [show, setShow] = useState(true);

  return (
    <div data-testid="about">
      {show ? <h1 id="title">About page: {val}</h1> : null}
      <input id="search" type="text" onChange={e => setVal(e.target.value)}/>
      <button id="toggle" onClick={() => setShow(!show)}>Click</button>
    </div>
  );
};
