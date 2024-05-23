import express from 'express'
import {PORT, HOST} from './config.js'
import taskRouter from './routers/taskRouter.js'
import userRouter from './routers/userRouter.js'
import logger from './middlewares/logger.js'
import cors from 'cors'

const app = express()

app.use(logger)
app.use(express.json())
app.use(cors())

app.use('/task', taskRouter)
app.use('/user', userRouter)

app.listen(PORT, () => {
  console.log(`Server running on ${HOST}:${PORT}`)
})