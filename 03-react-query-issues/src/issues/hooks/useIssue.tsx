import { useQuery } from '@tanstack/react-query';
import { Issue } from '../interfaces';
import { githubApi } from '../../api/githubApi';
import { sleep } from '../../helpers/sleep';

const getIssueInfo = async (issueNumber: number): Promise<Issue> => {
  // Queremos que demore 2sg en hacer la petición
  await sleep(2);
  const { data } = await githubApi.get<Issue>(`/issues/${issueNumber}`);
  // console.log(data);
  return data;
};

const getIssueComments = async (issueNumber: number): Promise<Issue[]> => {
  // Queremos que demore 2sg en hacer la petición
  await sleep(2);
  const { data } = await githubApi.get<Issue[]>(`/issues/${issueNumber}/comments`);
  // console.log(data);
  return data;
};

export const useIssue = (issueNumber: number) => {
  const issueQuery = useQuery(['issue', issueNumber], () => getIssueInfo(issueNumber));

  // Hacemos que para ejecutar este query tengamos una dependencia del anterior query.
  // Con la opción enabled: false jamás se lanza la query.
  // Cuando enabled: true se lanza la petición. Por tanto se puede aplicar lógica en enabled.
  const commentsQuery = useQuery(['issue', issueNumber, 'comments'], () => getIssueComments(issueQuery.data!.number), {
    enabled: issueQuery.data !== undefined,
  });

  return { issueQuery, commentsQuery };
};
