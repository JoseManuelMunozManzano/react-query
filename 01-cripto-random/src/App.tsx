import { useState } from 'react';
import './App.css';

export const App = () => {
  const [count, setCount] = useState(0);

  return (
    <div className="App App-header">
      <h2>Número aleatorio:</h2>
    </div>
  );
};
