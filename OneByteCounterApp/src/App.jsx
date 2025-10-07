import './App.css';
import Viewer from './components/Viewer';
import Controller from './components/Controller';
import { useState, useEffect } from 'react';

function App() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    console.log(`${count}, ${count + 1}`);
  }, [count]);

  const onClickButton = (value) => {
    setCount(count + value);
  };

  return (
    <div className="App">
      <h1>Simple Count</h1>
      <section>
        <Viewer count={count}></Viewer>
      </section>
      <section>
        <Controller onClickButton={onClickButton}></Controller>
      </section>
    </div>
  );
}

export default App;
