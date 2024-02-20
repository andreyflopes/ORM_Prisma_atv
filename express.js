import express from 'express'
import cors from 'cors'
import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();
const app = express()
app.use(cors())
app.use(express.json())

app.get("/", (req, res) =>{
    res.status(200).json({
        textoo:"dadada"
    })
})



app.get('/clientes', async (req, res) => {
    try {
      const clientes = await prisma.cliente.findMany();
      res.status(200).json(clientes);
    } catch (error) {
      console.error('Erro ao buscar clientes:', error);
      res.status(500).json({ success: false, message: 'Erro ao buscar clientes' });
    }
  })    


  app.post('/post', async (req, res) => {
    const { name, fullname, cpf, address } = req.body
    try{

            const post = await prisma.cliente.create({
            data: {
                name:name,
                fullname: fullname,
                cpf:cpf,
                address:address
            },
            })
            res.status(200).json(post)
    }catch(error){

        console.error('Erro ao criar cliente:', error);
        res.status(500).json({ success: false, message: 'Erro ao criar cliente' });
    }
  })







const port = 3000
app.listen(port, ()=>console.log(`rodando na porta ${port}`))