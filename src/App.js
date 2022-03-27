import { useState } from 'react';

function App() {
  const [counter, setCounter] = useState(0);

  return (
    <div className="App">
      <header className="App-header">
        <p>{counter}</p>
        <button onClick={() => setCounter(c => c + 1)}>Increment</button>
      </header>
    </div>
  );
}

export default App;
