import { useInfiniteQuery } from '@tanstack/react-query';
import { Issue, State } from '../interfaces';
import { sleep } from '../../helpers';
import { githubApi } from '../../api/githubApi';

interface Props {
  state?: State;
  labels: string[];
  page?: number;
}

interface QueryProps {
  pageParam?: number;
  queryKey: (string | Props)[];
}

// Para pageParam, la página 1 es undefined, por eso la establecemos como por defecto si no viene
const getIssues = async ({ pageParam = 1, queryKey }: QueryProps): Promise<Issue[]> => {
  const [, , args] = queryKey;
  const { state, labels } = args as Props;

  // await sleep(2);

  const params = new URLSearchParams();
  if (state) params.append('state', state); // state es open o close o no viene

  // En la documentación del API de Github se indica mandar los labels separados por coma
  // El nombre del param es 'labels'
  if (labels.length > 0) {
    const labelString = labels.join(',');
    params.append('labels', labelString);
  }

  params.append('page', pageParam.toString());
  params.append('per_page', '5');

  const { data } = await githubApi.get<Issue[]>('/issues?', { params });
  // console.log(data);
  return data;
};

export const useIssuesInfinite = ({ state, labels }: Props) => {
  // La forma de usar la función es la diferencia entre useQuery y useInfiniteQuery
  // La data es lo que utilizamos para mandar llamar la función.
  // Dentro de data lo más importante es pageParam que es la página en la que estamos y
  // queryKey que es el nombre de la caché.
  const issuesQuery = useInfiniteQuery(['issues', 'infinite', { state, labels }], (data) => getIssues(data), {
    // pages es un arreglo de arreglo de Issues, es decir algo así [ [Issue1...Issue5], [Issue6...Issue10] ...]
    // Si la longitud de lastPage es menor de 5 es que ya no hay más páginas y nos salimos.
    getNextPageParam: (lastPage, pages) => {
      if (lastPage.length < 5) return;

      // Este valor se envía a getIssues como pageParam
      return pages.length + 1;
    },
  });

  return { issuesQuery };
};
