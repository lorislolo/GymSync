import taskModel from "../../models/taskModel.js"

const create = async (req, res) => {
    try{
        const task = req.body
        const newTask = await taskModel.create(task)
        return res.json({
            success: `Usuário ${newTask.id} criado com sucesso!`,
            task: newTask
        })
    } catch (error) {
        console.log(error)
        return res.status(500).json({
            error: 'Opsss erro no servidor, tente novamente!'
        })
    }
}

export default create