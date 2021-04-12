import axios from 'axios'

const server = axios.create({
    baseURL: 'http://localhost:3333',
})

export default server;