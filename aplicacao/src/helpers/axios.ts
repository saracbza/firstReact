import axios from "axios"

const api = axios.create({
    baseURL: 'https://workshop-node-ts-intro-exemplo1.onrender.com' //configurando o axios com o link da api
})

export default api