import { useState } from 'react';

import { IssueList } from '../components/IssueList';
import { LabelPicker } from '../components/LabelPicker';
import { LoadingIcon } from '../../shared/components/LoadingIcon';

import { useIssues } from '../hooks';
import { State } from '../interfaces';

export const ListView = () => {
  const [selectedLabels, setSelectedLabels] = useState<string[]>([]);

  const [state, setState] = useState<State>();

  // Necesito saber en este nivel que se ha pulsado en IssueList.tsx (link All, Open o Closed)
  // El hijo pasa información al padre.
  // A IssueList.tsx, más abajo, enviamos el estado y una función para poder cambiarlo.

  // Cuando cambie state o selectedLabels tendremos que volver a mandar el query de petición.
  const { issuesQuery } = useIssues({ state, labels: selectedLabels });

  const onLabelChanged = (labelName: string) => {
    selectedLabels.includes(labelName)
      ? setSelectedLabels(selectedLabels.filter((label) => label !== labelName))
      : setSelectedLabels([...selectedLabels, labelName]);
  };

  return (
    <div className="row mt-5">
      <div className="col-8">
        {issuesQuery.isLoading ? (
          <LoadingIcon />
        ) : (
          <IssueList state={state} onStateChanged={(newState) => setState(newState)} issues={issuesQuery.data || []} />
        )}
      </div>

      <div className="col-4">
        <LabelPicker selectedLabels={selectedLabels} onChange={(labelName) => onLabelChanged(labelName)} />
      </div>
    </div>
  );
};
