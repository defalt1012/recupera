import db from './db.js';
import express from 'express'
import cors from 'cors'


const app = express();
app.use(cors());
app.use(express.json());


app.get('/nome', async(req, resp) => { 
    try{
        let pessoa = await db.tb_lista_negra.findAll({order: [['id', 'desc']]});
        resp.send(pessoa);
    }catch(e){
        resp.send({erro: e.toString()})
    }
})

app.post('/inserir', async(req, resp) => {
    try{
        let nome      = req.body.nome;      
        let inserir   = {id_nome}
        let inserting = await db.tb_lista_negra.create(inserir);
        resp.send(inserting)
    } catch(e){
        resp.send({erro: e.toString()})
    }

})



app.listen(process.env.PORT,

x => console.log(`Server up at port ${process.env.PORT}`))