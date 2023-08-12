import { useEffect, useState } from 'react';
import './App.css';

const getRandomNumberFromApi = async (): Promise<number> => {
  const res = await fetch('https://www.random.org/integers/?num=1&min=1&max=500&col=1&base=10&format=plain&rnd=new');
  const numberString = await res.text();
  return +numberString;
};

export const App = () => {
  const [number, setNumber] = useState<number>();
  // Para mejorar la experiencia de usuario, le indicamos que estamos cargando la información y que por favor espere.
  const [isLoading, setIsLoading] = useState<boolean>(true);

  // Como useEffect no puede ser asíncrono, usamos el .then
  useEffect(() => {
    getRandomNumberFromApi().then(setNumber).catch(console.error);
  }, []);

  // Según las buenas prácticas de React, cuando se hacen modificaciones, acciones o efectos secundarios,
  // nuestros useEffect deben ser independientes
  useEffect(() => {
    if (number) setIsLoading(false);
  }, [number]);

  return <div className="App App-header">{isLoading ? <h2>Cargando...</h2> : <h2>Número aleatorio: {number}</h2>}</div>;
};
