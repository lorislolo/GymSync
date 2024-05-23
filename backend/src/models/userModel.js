import { PrismaClient } from '@prisma/client'
import { z } from "zod"

const userSchema = z.object({
    name: z.string({
        required_error: "Inserir um nome é obrigatório.",
        invalid_type_error: "O nome deve ser uma string.",
      })
      .max(250, {message: 'O Nome deve ter no máximo 250 caracteres.'})
      .min(3,{message:'O nome deve ter no mínimo 3 caracteres'}),
      email: z.string({
        required_error: "O email é obrigatório.",
        invalid_type_error: "O email deve ser uma string.",
      })
      .email({message: 'Email inválido.'})
      .max(250, {message: 'O email deve ter no máximo 250 caracteres.'}),
})

const validateUserToCreate = (user) => {
    const partialUserSchema = userSchema.partial({id: true})
    return partialUserSchema.safeParse(user)
}

const prisma = new PrismaClient()

const listAll = async () => {
    try {
        const users = await prisma.user.findMany();
        return users;
    } catch (error) {
        console.log(error)
        throw new Error('Ops! Erro no servidor, tente novamente!');
    }
}


const getById = async (id) => {
    try {
        const user = await prisma.user.findUnique({
            where: {
                id
            }
        });
        return user;
    } catch (error) {
        throw new Error('Erro ao obter tarefa por ID: ' + error.message);
    }
}

const create = async (user) => {
    return await prisma.user.create({
        data: user
    })
}

const remove = async (id) => {
    return await prisma.user.delete({
        where: {
            id
        }
    })
}

const edit = async (user) => {
    const { id, ...data } = user;
    try {
        return await prisma.user.update({
            where: { id },
            data 
        });
    } catch (error) {
        throw new Error('Erro ao editar tarefa: ' + error.message);
    }
}



export default { listAll, getById, create, remove, edit, validateUserToCreate }
