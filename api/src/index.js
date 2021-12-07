import db from './db.js';
import express from 'express'
import cors from 'cors'


const app = express();
app.use(cors());
app.use(express.json());


app.get(`/tb_lista_negra/`, async(req, resp) => { 
    try{
        let pessoa = await db.tb_lista_negra.findAll({order: [['id', 'desc']]});
        resp.send(pessoa);
    }catch(e){
        resp.send({erro: e.toString()})
    }
})

app.post(`/id_nome/`, async(req, resp) => {
    try{
        let nomeParam      = req.body;      
        let r = await db.tb_lista_negra.create({
            id_nome: nomeParam.nome,
        })
        resp.send(r)
    } catch(e){
        resp.send({erro: e.toString()})
    }

})



app.listen(process.env.PORT,

x => console.log(`Server up at port ${process.env.PORT}`))