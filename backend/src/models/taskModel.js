import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

const listAll = async () => {
    try {
        const tasks = await prisma.task.findMany();
        return tasks;
    } catch (error) {
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



export default { listAll, getById, create, remove, edit }
