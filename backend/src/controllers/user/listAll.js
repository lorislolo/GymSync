import userModel from "../../models/userModel"

const listAll = async (req, res) => {
    try {
        const users = await userModel.listAll()
        return res.json({
            success: 'Usuarios listados com sucesso!',
            users
        })
    } catch (error) {
        console.log(error)
        return res.status(500).json({
            error: 'tente novamente!'
        })
    }
}

export default listAll

