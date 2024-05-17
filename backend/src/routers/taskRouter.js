import express from 'express'

const router = express.Router()

router.get('/', (req, res) => {
    res.json({message: 'Esta é a rota /task/'})
})

router.get('/:id', (req, res) => {
    const id = req.params.id
    res.json({message: 'Esta é a rota /task/:id '+'ID = '+id})
})

router.post('/', (req, res) => {
    const task = req.body
    res.json({message: 'Esta é a rota POST /task/', task})
})

router.put('/', (req, res) => {
    res.json({message: 'Esta é a rota PUT /task/'})
})

router.delete('/:id', (req, res) => {
    const id = req.params.id
    res.json({message: 'Esta é a rota DELETE /task/:id '+'ID = '+id})
})

export default router