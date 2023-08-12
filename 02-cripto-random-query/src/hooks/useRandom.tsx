// useQuery regresa jsx, por lo que la extensión correcta es .tsx
import { useQuery } from '@tanstack/react-query';

const getRandomNumberFromApi = async (): Promise<number> => {
  const res = await fetch('https://www.random.org/integers/?num=1&min=1&max=500&col=1&base=10&format=plain&rnd=new');
  const numberString = await res.text();

  // Para ver como trabaja los errores, descomentar esta línea.
  // throw new Error('Auxilio!!');

  return +numberString;
};

export const useRandom = () => {
  // useQuery espera de 1 a 3 argumentos.
  // - El arreglo le va a indicar a useQuery como queremos manejar nuestro caché.
  // - La función sirve para cargar la información del arreglo. Técnicamente siempre va a ser asíncrona, y
  //    siempre debe devolver un valor o un error (no undefined).
  // - Luego están las opciones
  //
  // No se recomienda trabajar con useQuery directamente en los componentes, sino usar el patrón adaptador.
  // La idea es, si el día de mañana React Query cambia, con el patrón adaptador (custom Hooks) será más fácil
  // que todo siga funcionando.
  const query = useQuery<number, Error>(['randomNumber'], getRandomNumberFromApi, { retry: 1 });

  return query;
};
