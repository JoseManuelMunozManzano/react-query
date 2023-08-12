// Como useQuery devuelve un JSX entonces la extensión del archivo debe ser .tsx
// Un custom hook no es más que una simple función.
// Lo queremos para desacoplar la parte de la lógica de la visualización del componente.
import { useQuery } from '@tanstack/react-query';

import { githubApi } from '../../api/githubApi';
import { Label } from '../interfaces/label';
import { sleep } from '../../helpers/sleep';

// Primero lo vamos a hacer con fetch API y luego lo vamos a hacer con Axios
// const getLabels = async () => {
//   const res = await fetch('https://api.github.com/repos/facebook/react/labels');
//   const data = await res.json();
//   console.log(data);
//   return data;
// };

// Con Axios y tipo de dato
const getLabels = async (): Promise<Label[]> => {
  await sleep(2);

  const { data } = await githubApi.get<Label[]>('/labels');
  return data;
};

export const useLabels = () => {
  // Recordar, los parámetros informados son:
  // 1 - Array con el espacio en caché que va a manejar React Query.
  // 2 - Función que nos sirve para traer los labels
  // 3 - Opciones. Se ha incluido la opción que, cuando perdemos el foco del navegador y luego volvemos a el
  //     por defecto vuelve a hacer la carga para mantener la caché actualizada, pero con la opción indicada
  //     no intenta actualizar la información de la caché.
  //     Si la data cambia constantemente es bueno no tener esta opción, pero en este caso sabemos que esta
  //    información cambia muy de vez en cuando.
  //    staleTime se indica en milésimas de segundo. En el ejemplo hemos puesto que nuestra data se va a mantener fresca (en fresh) por 1 hora.
  //    Ahora los labels se cargarán solo una vez cada hora o cuando refresquemos la app.
  const labelsQuery = useQuery(['labels'], getLabels, { refetchOnWindowFocus: false, staleTime: 1000 * 60 * 60 });

  // Siempre es mejor devolver un objeto porque si el día de mañana añadimos algo que exportar, si no lo
  // devolvemos como objeto sería más complicado añadirlo.
  return { labelsQuery };
};
