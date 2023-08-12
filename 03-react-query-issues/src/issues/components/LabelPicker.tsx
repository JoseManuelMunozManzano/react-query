import { useQuery } from '@tanstack/react-query';
import { githubApi } from '../../api/githubApi';
import { Label } from '../interfaces/label';

// Primero lo vamos a hacer con fetch API y luego lo vamos a hacer con Axios
// const getLabels = async () => {
//   const res = await fetch('https://api.github.com/repos/facebook/react/labels');
//   const data = await res.json();
//   console.log(data);
//   return data;
// };

// Con Axios y tipo de dato
const getLabels = async (): Promise<Label[]> => {
  const { data } = await githubApi.get<Label[]>('/labels');
  return data;
};

export const LabelPicker = () => {
  // Primero usaremos useQuery de la forma tradicional.
  // Luego haremos esta petición usando el patrón adaptador con custom Hooks
  // Recordar, los parámetros informados son:
  // 1 - Array con el espacio en caché que va a manejar React Query.
  // 2 - Función que nos sirve para traer los labels
  // 3 - Opciones. Se ha incluido la opción que, cuando perdemos el foco del navegador y luego volvemos a el
  //     por defecto vuelve a hacer la carga para mantener la caché actualizada, pero con la opción indicada
  //     no intenta actualizar la información de la caché.
  //     Si la data cambia constantemente es bueno no tener esta opción, pero en este caso sabemos que esta
  //    información cambia muy de vez en cuando.
  const labelsQuery = useQuery(['labels'], getLabels, { refetchOnWindowFocus: false });

  return (
    <div>
      <span className="badge rounded-pill m-1 label-picker" style={{ border: `1px solid #ffccd3`, color: '#ffccd3' }}>
        Primary
      </span>
    </div>
  );
};
