import React from 'react';
import ReactDOM from 'react-dom/client';
import { RouterProvider } from 'react-router';
import { router } from './router';

//! Remover enable css source maps de las opciones del navegador para evitar warnings en la consola
import 'bootstrap/dist/css/bootstrap.min.css';
import './assets/styles.css';

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
