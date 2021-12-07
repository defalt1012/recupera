import axios from 'axios';

const api = axios.create({
    baseURL: 'http://localhost:3030'
})

export default class Api {
    async listar(){
        const x = await api.get(`/tb_lista_negra`);
        return x.data;
    }

    async inserir(nome){
        let x = await api.post(`/id_nome/`, {nome})
        return  x.data;
    }
}

