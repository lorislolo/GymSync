import taskModel from "../../models/taskModel.js"

const getById = async (req, res) => {
    try{
        const id = req.params.id
        const task = await taskModel.getById(+id)
        res.json({
            success: `tarefa ${id} encontrada com sucesso!`,
            task
        })
    } catch (error) {
        console.log(error)
        return res.status(500).json({
            error: 'erro no servidor, tente novamente!'
        })
    }
}

export default getById