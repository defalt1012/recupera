import { Content, Container } from './styled'
import { useState, useEffect } from 'react'
import Api from '../services/api'
import {ToastContainer} from 'react-toastify'

const api = new Api()


export default function Home(){

    const [nome, setNome] = useState([])
    const [pessoa, setPessoa] = useState([])

    async function listar(){

        let x = await api.listar();
        console.log(x)
        setNome(x);
    }

    useEffect(()=>{
        listar()
    }, [])



    
    async function inserirr() {
        const r = await api.inserir(pessoa.id_nome)
        return r.data;
    }    

    return(
        <Container>
            <ToastContainer/>
            <Content>

                <div className="inserir">
                    <div className="nome"><b>Nome:  </b></div>
                    <div className="input"><input type="text" value={pessoa} onChange={e => setPessoa(e.target.value)}></input></div>

                    <div className="btn" onClick={inserirr} ><button >Registrar Nome</button></div>   
                    <div className="btn" onClick={listar}> <button> Atualizar </button></div>   

                </div>

                <div className="content">
                <div className="title">Lista Negra</div>
                <table>
                    <tr>
                    
                        <th>ID</th>
                        <th>Nome</th>

                    </tr>
                    <tbody>
                        {nome.map((item, i) =>    
                            <tr className={i % 2 === 0 ? "linha-alternada" : ""}>              
            
                                <td> {item.id}</td>
                                <td>{item.id_nome} </td>                                                
         
                            </tr>
                        )}
                    </tbody>
                </table>
            </div>
        </Content>
    </Container>
    )
}


