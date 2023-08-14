import { useInfiniteQuery } from '@tanstack/react-query';
import { Issue, State } from '../interfaces';
import { sleep } from '../../helpers';
import { githubApi } from '../../api/githubApi';

interface Props {
  state?: State;
  labels: string[];
  page?: number;
}

const getIssues = async ({ labels, state, page = 1 }: Props): Promise<Issue[]> => {
  await sleep(2);

  const params = new URLSearchParams();
  if (state) params.append('state', state); // state es open o close o no viene

  // En la documentación del API de Github se indica mandar los labels separados por coma
  // El nombre del param es 'labels'
  if (labels.length > 0) {
    const labelString = labels.join(',');
    params.append('labels', labelString);
  }

  params.append('page', page.toString());
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
  const issuesQuery = useInfiniteQuery(['issues', 'infinite', { state, labels, page: 1 }], (data) => getIssues(data), {
    // TODO: getNextPageParam()
  });

  return { issuesQuery };
};
