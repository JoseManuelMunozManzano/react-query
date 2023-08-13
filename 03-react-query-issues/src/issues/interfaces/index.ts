// Cuando estamos trabajando con Vite, es buena práctica indicar export type en los ficheros de barril cuando exportamos tipos
// Truco cuando pasamos dos, es poner el type en uno de los dos
export { type Issue, State } from './issue';
export type { Label } from './label';
