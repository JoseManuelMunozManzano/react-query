import { useQuery } from '@tanstack/react-query';
import { githubApi } from '../../api/githubApi';
import { Issue, State } from '../interfaces';
import { sleep } from '../../helpers/sleep';

interface Props {
  state?: State;
  labels: string[];
}

const getIssues = async (labels: string[], state?: State): Promise<Issue[]> => {
  await sleep(2);

  const params = new URLSearchParams();
  if (state) params.append('state', state); // state es open o close o no viene

  // En la documentación del API de Github se indica mandar los labels separados por coma
  // El nombre del param es 'labels'
  if (labels.length > 0) {
    const labelString = labels.join(',');
    params.append('labels', labelString);
  }

  params.append('page', '1');
  params.append('per_page', '5');

  const { data } = await githubApi.get<Issue[]>('/issues?', { params });
  // console.log(data);
  return data;
};

export const useIssues = ({ state, labels }: Props) => {
  // El primer arreglo identifica el caché
  // La función rellena datos
  // Como para el nombre de la caché no importa el orden de los factores, se indican dentro de un objeto
  const issuesQuery = useQuery(['issues', { state, labels }], () => getIssues(labels, state));

  return { issuesQuery };
};
