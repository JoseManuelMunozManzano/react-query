import axios from 'axios';

// Todas las peticiones que salgan de aquí tendrán este inicio de URL ya incrustado
export const githubApi = axios.create({
  baseURL: 'https://api.github.com/repos/facebook/react',
  headers: {
    Authorization: `Bearer ${import.meta.env.VITE_REACT_APP_GITHUB_TOKEN}`,
  },
});
