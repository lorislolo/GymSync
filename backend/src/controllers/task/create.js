import taskModel from "../../models/taskModel.js"
import zodErrorFormat from "../../helpers/zodErrorFormat.js"


const create = async (req, res) => {
    try{
        const task = req.body
        const result = userModel.validateUserToCreate(user)
        if(!result.success){
            return res.status(400).json({
                error: `Dados de Cadastro Inválido`,
                fields: zodErrorFormat(result.error)
            })
        }
        const newTask = await taskModel.create(task)
        return res.json({
            success: `Tarefa ${newTask.id} criada com sucesso!`,
            task: newTask
        })
    } catch (error) {
        console.log(error)
        return res.status(500).json({
            error: 'tente novamente!'
        })
    }
}

export default create