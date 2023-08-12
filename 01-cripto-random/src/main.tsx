import ReactDOM from 'react-dom/client';
import { App } from './App.tsx';
import './index.css';

ReactDOM.createRoot(document.getElementById('root')!).render(
  // Comentado para que no se ejecute dos veces, pero recordar que solo se ejecuta dos veces
  // durante el desarrollo.
  // <React.StrictMode>
  <App />
  // </React.StrictMode>
);
