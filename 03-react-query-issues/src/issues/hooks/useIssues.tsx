import { useQuery } from '@tanstack/react-query';
import { githubApi } from '../../api/githubApi';
import { Issue } from '../interfaces';
import { sleep } from '../../helpers/sleep';

const getIssues = async (): Promise<Issue[]> => {
  await sleep(2);

  const { data } = await githubApi.get<Issue[]>('/issues');
  // console.log(data);
  return data;
};

export const useIssues = () => {
  // El primer arreglo identifica el caché
  // La función rellena datos
  const issuesQuery = useQuery(['issues'], getIssues);

  return { issuesQuery };
};
