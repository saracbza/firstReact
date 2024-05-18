import axios from "axios"

const api = axios.create({
    baseURL: 'https://projetoapi-r37e.onrender.com' //configurando o axios com o link da api
})

export default api