import { useCallback, useState } from 'react';
import { redirect } from 'react-router-dom';
import reactLogo from '../assets/react.svg';

function Main() {
  const [count, setCount] = useState(0);
  const handleChange = useCallback(() => {
    setCount((newCount) => newCount + 1);
  }, []);

  return (
    <div className="App">
      <div>
        <a href="https://vitejs.dev" target="_blank" rel="noreferrer">
          <img src="/vite.svg" className="logo" alt="Vite logo" />
        </a>
        <a href="https://reactjs.org" target="_blank" rel="noreferrer">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <button data-testid="button_1" onClick={handleChange} type="button">
          this count is {count}
        </button>
        <p>
          Edit <code>src/App.tsx</code> and save this
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </div>
  );
}

export default Main;
