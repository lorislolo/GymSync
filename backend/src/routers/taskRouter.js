import express from 'express'

import getById from '../controllers/task/getById.js'
import listAll from '../controllers/task/listAll.js'
import create from '../controllers/task/create.js'
import edit from '../controllers/task/update.js'
import remove from '../controllers/task/remove.js'

const router = express.Router()

router.get('/', listAll)
router.get('/:id', getById)
router.post('/', create)
router.put('/:id', edit)
router.delete('/:id', remove)

export default router