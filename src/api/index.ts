import axios from 'axios';

const api = axios.create({
    baseURL: 'https://patrimonio.onrender.com',

})

export default api
