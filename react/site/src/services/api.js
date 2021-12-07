import axios from 'axios';

const api = axios.create({
    baseURL: 'http://localhost:3030'
})

export default class Api {
    async listar(){
        const x = await api.get('/nome');
        return x.data;
    }

    async inserir(nome){
        let x = await api.post('/inserir', {nome})
        return  x.data;
    }
}

