# React Query Issues

## Creación y ejecución del proyecto

Creado con el comando `npm create vite` y nombramos al proyecto react-query-issues

Luego renombramos ese nombre a 03-react-query-issues

Entramos a la carpeta 03-react-query-issues e instalamos dependencias: `yarn install`

Sustituir archivo .env.template por .env e informar las variables de entorno

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
- fresh: La data la acabamos de obtener, está fresca. React Query puede obtener la data de ahí
- fetching: Cambia cada vez que se lanza la promesa que trae la información (isFetching)
- paused: Como trabajamos con promesas, React Query automáticamente se puede encargar de ponerle pausa al fetching, si se lo indicamos
- stale: Cuando termina el fetching, por una fracción de segundo la data cae en fresh y luego va a stale. Es la data que está en cache y que ya es vieja. No debemos confiar en esta data porque puede haber cambiado. Nos sirve para mostrar algo que tenemos en caché y que el cliente sienta una mejor experiencia de usuario
- inactive: Cuando se ha disparado alguna petición pero no es necesaria porque ya no se usa esa data. Por defecto a los 5 minutos se borran los queries que están inactivos
- Uso de spinner de react-icons
- Precarga de data para mejorar experiencia de usuario. initialData y placeholderData
- Uso de token GitHub (Fine-grained personal access tokens) para autenticación `https://github.com/settings/tokens?type=beta`
- Archivos de barril (index.ts)
- Navegación (useNavigate)
- useParams
