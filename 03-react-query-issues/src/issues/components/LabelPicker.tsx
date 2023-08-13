import { FC } from 'react';
import { LoadingIcon } from '../../shared/components/LoadingIcon';
import { useLabels } from '../hooks/useLabels';

interface Props {
  selectedLabels: string[];
  onChange: (labelName: string) => void;
}

export const LabelPicker: FC<Props> = ({ selectedLabels, onChange }) => {
  const { labelsQuery } = useLabels();

  //! isLoading en vez de isFetching
  // isLoading se dispara cuando estamos cargando la data por primera vez y no tenemos data en caché.
  // Muestra el mensaje de carga. Usualmente trabajaremos más con isLoading.
  //
  // isFetching se va a disparar siempre que estemos haciendo alguna petición.
  if (labelsQuery.isLoading) return <LoadingIcon />;

  return (
    <div>
      {labelsQuery.data?.map((label) => (
        <span
          key={label.id}
          className={`badge rounded-pill m-1 label-picker ${selectedLabels.includes(label.name) ? 'label-active' : ''}`}
          style={{ border: `1px solid #${label.color}`, color: `#${label.color}` }}
          onClick={() => onChange(label.name)}
        >
          {label.name}
        </span>
      ))}
    </div>
  );
};
