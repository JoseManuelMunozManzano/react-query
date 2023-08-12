# Número criptográfico aleatorio atmosférico usando TanStack Query

Mini-proyecto para ver las ventajas que tiene usar TanStack Query (React Query).

Se está usando esta API de ruido atmosférico: `https://www.random.org/integers/?num=1&min=1&max=500&col=1&base=10&format=plain&rnd=new`

Su valor lo mostraremos en pantalla.

## Creación y ejecución del proyecto

Creado con el comando `npm create vite` y nombramos al proyecto cripto-random-query

Luego renombramos ese nombre a 02-cripto-random-query

Entramos a la carpeta 02-cripto-random-query e instalamos dependencias: `yarn install`

Para ejecutar la aplicación ejecutar `yarn dev`

Acceder al navegador, a la ruta indicada en VITE

## Cosas que se ven

- Instalación de TanStack Query `https://tanstack.com/query/v4`
  - `yarn add @tanstack/react-query`
- Configuración de TanStack Query `https://tanstack.com/query/v4/docs/react/quick-start`
- Uso de useQuery
- query.isFetching
- query.data
- query.error
- query.refetch()
- Patrón adaptador (custom hooks)
