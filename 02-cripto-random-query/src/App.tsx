import './App.css';
import { useRandom } from './hooks/useRandom';

export const App = () => {
  // Hemos separado la lógica de negocio del componente.
  const query = useRandom();

  return (
    <div className="App App-header">
      {query.isFetching ? <h2>Cargando...</h2> : <h2>Número aleatorio: {query.data}</h2>}

      {!query.isFetching && query.isError && <h3>{`${query.error.message}`}</h3>}

      <button
        onClick={() => {
          query.refetch().then().catch(console.error);
        }}
        disabled={query.isFetching}
      >
        {query.isFetching ? '...' : 'Nuevo número'}
      </button>
    </div>
  );
};
