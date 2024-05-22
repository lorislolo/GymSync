import taskModel from "../../models/taskModel.js"

const listAll = async (req, res) => {
    try {
        const tasks = await taskModel.listAll()
        return res.json({
            success: 'Tarefas listadas com sucesso!',
            tasks
        })
    } catch (error) {
        console.log(error)
        return res.status(500).json({
            error: 'tente novamente!'
        })
    }
}

export default listAll

