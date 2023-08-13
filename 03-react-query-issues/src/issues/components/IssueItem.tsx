import { FC } from 'react';
import { useNavigate } from 'react-router-dom';
import { useQueryClient } from '@tanstack/react-query';
import { FiInfo, FiMessageSquare, FiCheckCircle } from 'react-icons/fi';

import { Issue, State } from '../interfaces';
import { getIssueComments, getIssueInfo } from '../hooks/useIssue';

interface Props {
  issue: Issue;
}

export const IssueItem: FC<Props> = ({ issue }) => {
  const navigate = useNavigate();

  // Para obtener el queryClient definido en main.tsx tenemos este hook.
  // Si hubiera más de uno se puede indicar como parámetro un contexto entre llaves
  const queryClient = useQueryClient();

  // Cuando el ratón se pose sobre un issue queremos precargar el issue y sus comentarios.
  const prefetchData = () => {
    queryClient.prefetchQuery(['issue', issue.number], () => getIssueInfo(issue.number));

    queryClient.prefetchQuery(['issue', issue.number, 'comments'], () => getIssueComments(issue.number));
  };

  // La técnica presetData es muy parecida a la técnica de prefetchData, salvo que en lugar de mandar una función
  // se manda la data que queremos almacenar en esa caché.
  // No se hacen peticiones http, solo se precargan los datos.
  const preSetData = () => {
    queryClient.setQueryData(['issue', issue.number], issue);
  };

  return (
    <div
      className="card mb-2 issue"
      onClick={() => navigate(`/issues/issue/${issue.number}`)}
      // onMouseEnter={prefetchData}
      onMouseEnter={preSetData}
    >
      <div className="card-body d-flex align-items-center">
        {issue.state === State.Open ? <FiInfo size={30} color="red" /> : <FiCheckCircle size={30} color="green" />}

        <div className="d-flex flex-column flex-fill px-2">
          <span>{issue.title}</span>
          <span className="issue-subinfo">
            #{issue.number} opened 2 days ago by <span className="fw-bold">{issue.user.login}</span>
          </span>
        </div>

        <div className="d-flex align-items-center">
          <img src={issue.user.avatar_url} alt="User Avatar" className="avatar" />
          <span className="px-2">{issue.comments}</span>
          <FiMessageSquare />
        </div>
      </div>
    </div>
  );
};
