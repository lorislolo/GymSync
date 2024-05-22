import taskModel from "../../models/taskModel.js"

const edit = async (req, res) => {
    try{
        const id = +req.params.id
        const task = req.body
        const result = await taskModel.edit({id, ...task})
        res.json({
            success: `Tarefa ${id} editada com sucesso!`,
            task: result
        })
    } catch (error) {
        console.log(error)
        return res.status(500).json({
            error: 'tente novamente!'
        })
    }
}

export default edit