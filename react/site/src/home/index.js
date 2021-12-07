import { Content, Container } from './styled'
import { useState, useEffect } from 'react'
import Api from '../services/api'
import {ToastContainer} from 'react-toastify'

const api = new Api()


export default function Home(){

    const [usuario, setUsuario] = useState([])
    const [nome, setNome] = useState([])


    const listar = async() => {

        let x = await api.listar();
        setUsuario(x);
    }

    
    const inserir = async() => {
        let r = await api.inserir(nome);
        if(r.erro){
            alert('Usuario invalido');
        }
    }

    useEffect(()=>{
        listar()
    }, [usuario])

    return(
        <Container>
            <ToastContainer/>
            <Content>

                <div className="inserir">
                    <div className="nome"><b>Nome:  </b></div>
                    <div className="input"><input type="text" value={nome} onChange={e => setNome(e.target.value)}></input></div>

                    <div className="btn"><button onClick={inserir}>Registrar</button></div>   
                    <div className="btn"> <button onClick={listar}> Atualizar </button></div>   

                </div>

                <div className="content">
                <div className="title">Lista Negra</div>
                <table>
                    <tr>
                    
                        <th>ID</th>
                        <th>Nome</th>

                    </tr>
                    <tbody>
                        {usuario.map((item, i) =>    
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


