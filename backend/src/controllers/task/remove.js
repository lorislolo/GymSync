import taskModel from "../../models/taskModel.js"

const remove = async (req, res) => {
    try{
        const id = req.params.id
        const result = await taskModel.remove(+id)
        res.json({
            success: `Tarefa ${id} apagada com sucesso!`,
            task: result
        })
    } catch (error) {
        console.log(error)
        return res.status(500).json({
            error: 'tente novamente!'
        })
    }
}

export default remove