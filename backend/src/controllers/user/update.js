import userModel from "../../models/userModel.js"

const edit = async (req, res) => {
    try{
        const id = +req.params.id
        const user = req.body
        const result = await userModel.edit({id, ...user})
        res.json({
            success: `User ${id} editado com sucesso!`,
            user: result
        })
    } catch (error) {
        console.log(error)
        return res.status(500).json({
            error: 'tente novamente!'
        })
    }
}

export default edit