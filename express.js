import express from 'express'
import cors from 'cors'
import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();
const app = express()
app.use(cors())
app.use(express.json())

app.get("/", (req, res) => {
  res.status(200).json({
    textoo: "dadada"
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
  const { data } = req.body
  console.log(req.body)
  try {

    const post = await prisma.cliente.create({
      data: {
        name: data.name,
        fullname: data.fullname,
        cpf: data.cpf,
        address: data.address
      },
    })
    res.status(200).json(post)
  } catch (error) {

    console.error('Erro ao criar cliente:', error);
    res.status(500).json({ success: false, message: 'Erro ao criar cliente' });
  }
})

app.delete('/cliente/:id', async (req, res) => {
  const { id } = req.params
  try {
      // Use o Prisma para excluir o cliente com o ID especificado
      const deletedCliente = await prisma.cliente.delete({
          where: {
              id: id // Certifique-se de converter o ID para um número, se necessário
          }
      });

      res.status(200).json(deletedCliente);
  } catch (error) {
      console.error('Erro ao excluir cliente:', error);
      res.status(500).json({ success: false, message: 'Erro ao excluir cliente' });
  }
});

app.put('/cliente/:id', async (req, res) => {
  const { id } = req.params;
  const { data } = req.body; 
console.log(data)
  try {
    const updatedCliente = await prisma.cliente.update({
      where: {
        id: id
      },
      data: {
        name: data.name||undefined,
        fullname: data.fullname||undefined,
        cpf: data.cpf||undefined,
        address: data.address||undefined 
      }
    }); 

    // Retorna uma resposta JSON com o cliente atualizado e status HTTP 200 (OK)
    res.status(200).json(updatedCliente);
  } catch (error) {
    // Se ocorrer um erro durante a atualização do cliente, vai retornar    
    console.error('Erro ao atualizar cliente:', error);
    res.status(500).json({ success: false, message: 'Erro ao atualizar cliente' });
  }
});






const port = 3000
app.listen(port, () => console.log(`rodando na porta ${port}`))