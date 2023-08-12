# React Query Issues

## Creación y ejecución del proyecto

Creado con el comando `npm create vite` y nombramos al proyecto react-query-issues

Luego renombramos ese nombre a 03-react-query-issues

Entramos a la carpeta 03-react-query-issues e instalamos dependencias: `yarn install`

Para ejecutar la aplicación ejecutar `yarn dev`

Acceder al navegador, a la ruta indicada en VITE

Hay dos rutas:

`/issues/list`

`/issues/issue/123`

Para obtener labels de Facebook/React, en Postman (y en nuestra app): `https://api.github.com/repos/facebook/react/labels`

## Cosas que se ven

- Router
- ReactMarkdown
- Instalación de TanStack Query `https://tanstack.com/query/v4`
  - `yarn add @tanstack/react-query`
- Instalación de DevTools `https://tanstack.com/query/v4/docs/react/devtools`

  Nos indican diferentes estados de nuestras peticiones o en nuestro caché.
  Se desactiva automáticamente cuando está en producción

  - `yarn add @tanstack/react-query-devtools`

- Configuración de TanStack Query `https://tanstack.com/query/v4/docs/react/quick-start`
- fetch API
- Axios
- Buenas prácticas
  - Tipado
  - Custom Hook (Patrón adaptador)
- Demorar respuesta de nuestra app un tiempo con setTimeout
