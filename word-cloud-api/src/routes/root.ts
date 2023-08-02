import express from 'express'
import {wordCloudRouter} from '../controllers/word-cloud.controller'
const rootRouter = express.Router()
rootRouter.use(wordCloudRouter)

export default rootRouter