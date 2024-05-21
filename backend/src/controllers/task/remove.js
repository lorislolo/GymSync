import taskModel from "../../models/taskModel.js"

const remove = async (req, res) => {
    try{
        const id = req.params.id
        const result = await taskModel.remove(+id)
        res.json({
            success: `Usuário ${id} apagado com sucesso!`,
            task: result
        })
    } catch (error) {
        console.log(error)
        return res.status(500).json({
            error: 'Opsss erro no servidor, tente novamente!'
        })
    }
}

export default remove