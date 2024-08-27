import express from 'express'
import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

const app = express()

app.use(express.json())


app.post('/usuarios', async (req, res)=> {

    await prisma.users.create({

        data:{

            email: req.body.email,
            name: req.body.name,
            age: req.body.age
        }


    })

    res.status(201).json(req.body)




})

app.get('/usuarios', async (req, res)=> {



    const user = await prisma.users.findMany()
    res.status(200).json(user)

})

app.listen(3000)

app.put('/usuarios/:id', async (req, res)=> {

    await prisma.users.update({

        where:{
            id: req.params.id

        },

        data:{

            email: req.body.email,
            name: req.body.name,
            age: req.body.age
        }


    })

    res.status(201).json(req.body)




})


app.delete('/usuarios/:id', async (req, res)=>{

    await prisma.users.delete({

        where:{

            id: req.params.id
        },
    })

    res.status(200).json({message: "Usuário deletado com sucesso!"})
     

})


/*

    1) Tipo de Rota / Método HTTP
    2) Endereço
    2f1CktSTJ9VQyBFk

*/

/*
    -  Criar um usuário
    - Listar todos os usuários
    - Editar um usuário
    - Deletar um usuário


*/