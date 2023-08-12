import { useQuery } from '@tanstack/react-query';

// Primero lo vamos a hacer con fetch API y luego lo vamos a hacer con Axios
const getLabels = async () => {
  const res = await fetch('https://api.github.com/repos/facebook/react/labels');
  const data = await res.json();
  console.log(data);
  return data;
};

export const LabelPicker = () => {
  // Primero usaremos useQuery de la forma tradicional.
  // Luego haremos esta petición usando el patrón adaptador con custom Hooks
  // Recordar, los parámetros informados son:
  // 1 - Array con el espacio en caché que va a manejar React Query.
  // 2 - Función que nos sirve para traer los labels
  const labelsQuery = useQuery(['labels'], getLabels);

  return (
    <div>
      <span className="badge rounded-pill m-1 label-picker" style={{ border: `1px solid #ffccd3`, color: '#ffccd3' }}>
        Primary
      </span>
    </div>
  );
};
