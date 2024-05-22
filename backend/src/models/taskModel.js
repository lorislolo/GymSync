import { PrismaClient } from '@prisma/client'
import { z } from "zod"

const taskSchema = z.object({
    id: z.number({
        required_error: "ID é obrigatório.",
        invalid_type_error: "O ID deve ser um número inteiro.",
      }),
    titulo: z.string({
        required_error: "Inserir um titulo é obrigatório.",
        invalid_type_error: "O nome deve ser uma string.",
      })
      .max(100, {message: 'O Titulo deve ter no máximo 100 caracteres.'}),
    conteudo: z.string({
        required_error: "O conteudo é obrigatório.",
        invalid_type_error: "O conteudo deve ser uma string.",
      })
})

const validateTaskToCreate = (task) => {
    const partialTaskSchema = taskSchema.partial({id: true})
    return partialTaskSchema.safeParse(task)
}

const prisma = new PrismaClient()

const listAll = async () => {
    try {
        const tasks = await prisma.task.findMany();
        return tasks;
    } catch (error) {
        console.log(error)
        throw new Error('Ops! Erro no servidor, tente novamente!');
    }
}


const getById = async (id) => {
    try {
        const task = await prisma.task.findUnique({
            where: {
                id
            }
        });
        return task;
    } catch (error) {
        throw new Error('Erro ao obter tarefa por ID: ' + error.message);
    }
}

const create = async (task) => {
    return await prisma.task.create({
        data: task
    })
}

const remove = async (id) => {
    return await prisma.task.delete({
        where: {
            id
        }
    })
}

const edit = async (task) => {
    const { id, ...data } = task;
    try {
        return await prisma.task.update({
            where: { id },
            data 
        });
    } catch (error) {
        throw new Error('Erro ao editar tarefa: ' + error.message);
    }
}



export default { listAll, getById, create, remove, edit, validateTaskToCreate }
