# Número criptográfico aleatorio atmosférico

Mini-proyecto para ver las ventajas que tiene usar React Query.

En este primer punto NO SE USA REACT QUERY, sino que se ve la cantidad de trabajo que hay que acometer para mantener estados y hacer funcionar la app.

Se está usando esta API de ruido atmosférico: `https://www.random.org/integers/?num=1&min=1&max=500&col=1&base=10&format=plain&rnd=new`

Su valor lo mostraremos en pantalla.

## Creación y ejecución del proyecto

Creado con el comando `npm create vite` y nombramos al proyecto cripto-random

Luego renombramos ese nombre a 01-cripto-random

Entramos a la carpeta 01-cripto-random e instalamos dependencias: `yarn install`

Para ejecutar la aplicación ejecutar `yarn dev`

Acceder al navegador, a la ruta indicada en VITE

## Cosas que se ven

- React.StrictMode
- useEffect no puede ser asíncrono
- Uso de fetch API
- Mejorar experiencia de usuario
- Buenas prácticas de React con respecto a hacer independientes los useEffect
- Uso de ternarios
- Uso de throw y manejo de errores
- Uso de botones y disabled para evitar pulsarlo mientras trae información
- useReducer
