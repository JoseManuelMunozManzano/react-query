import { useEffect, useState } from 'react';
import './App.css';

const getRandomNumberFromApi = async (): Promise<number> => {
  const res = await fetch('https://www.random.org/integers/?num=1&min=1&max=500&col=1&base=10&format=plain&rnd=new');
  const numberString = await res.text();
  return +numberString;
};

export const App = () => {
  const [number, setNumber] = useState<number>();

  // Como useEffect no puede ser asíncrono, usamos el .then
  useEffect(() => {
    getRandomNumberFromApi()
      .then((num) => setNumber(num))
      .catch(console.error);
  }, []);

  return (
    <div className="App App-header">
      <h2>Número aleatorio: {number}</h2>
    </div>
  );
};
