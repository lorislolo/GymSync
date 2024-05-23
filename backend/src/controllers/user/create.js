import userModel from "../../models/userModel.js"
import zodErrorFormat from "../../helpers/zodErrorFormat.js"

const create = async (req, res) => {
    try {
        const user = req.body
        const result = userModel.validateUserToCreate(user)
        if (!result.success) {
            return res.status(400).json({
                error: `Dados de Cadastro Inválidos`,
                fields: zodErrorFormat(result.error)
            })
        }
        const newUser = await userModel.create(user)
        return res.json({
            success: `User ${newUser.id} criada com sucesso!`,
            user: newUser
        })
    } catch (error) {
        console.log(error)
        return res.status(500).json({
            error: 'Tente novamente!'
        })
    }
}

export default create
