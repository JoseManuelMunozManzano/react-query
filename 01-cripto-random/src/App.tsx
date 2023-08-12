import { useEffect, useReducer, useState } from 'react';
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
  // Si ocurre algún error se lo indicamos al usuario
  const [error, setError] = useState<string>();
  // Tenemos un número que cambia, forzando al primer useEffect que se vuelva a disparar
  const [key, forceRefetch] = useReducer((x: number) => x + 1, 0);

  // Como useEffect no puede ser asíncrono, usamos el .then
  useEffect(() => {
    setIsLoading(true);
    getRandomNumberFromApi()
      .then(setNumber)
      .catch((error: Error) => setError(error.message));
  }, [key]);

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
      <button onClick={forceRefetch} disabled={isLoading}>
        {isLoading ? '...' : 'Nuevo número'}
      </button>
    </div>
  );
};
