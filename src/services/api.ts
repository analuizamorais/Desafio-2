import axios from 'axios';

const api = axios.create({ 
    baseURL: 'https://api.jsonbin.io/b/60fe19e8a263d14a297c8ee6/produtos' //anteriormente estava o locahost com a portaria correta
});

export default api;

//o server.json nao foi aceito no deploy, apesar de funcionar localmente