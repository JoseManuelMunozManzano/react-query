import { useEffect, useState } from 'react';
import './App.css';

const getRandomNumberFromApi = async (): Promise<number> => {
  const res = await fetch('https://www.random.org/integers/?num=1&min=1&max=500&col=1&base=10&format=plain&rnd=new');
  const numberString = await res.text();

  throw new Error('Auxilio!!!');
  return +numberString;
};

export const App = () => {
  const [number, setNumber] = useState<number>();
  // Para mejorar la experiencia de usuario, le indicamos que estamos cargando la información y que por favor espere.
  const [isLoading, setIsLoading] = useState<boolean>(true);
  // Si ocurre algún error se lo indicamos al usuario
  const [error, setError] = useState<string>();

  // Como useEffect no puede ser asíncrono, usamos el .then
  useEffect(() => {
    getRandomNumberFromApi()
      .then(setNumber)
      .catch((error: Error) => setError(error.message));
  }, []);

  // Según las buenas prácticas de React, cuando se hacen modificaciones, acciones o efectos secundarios,
  // nuestros useEffect deben ser independientes
  useEffect(() => {
    if (number) setIsLoading(false);
  }, [number]);

  useEffect(() => {
    if (error) setIsLoading(false);
  }, [error]);

  return (
    <div className="App App-header">
      {isLoading ? <h2>Cargando...</h2> : <h2>Número aleatorio: {number}</h2>}
      {!isLoading && error && <h3>{error}</h3>}
    </div>
  );
};
