import axios from "axios"

const api = axios.create({
    baseURL: 'http://localhost:3001' //configurando o axios com o link da api
})

export default api