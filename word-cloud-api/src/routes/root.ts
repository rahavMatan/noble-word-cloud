import express from 'express'
import getRoot from '../controllers/root/getRoot'
import postRoot from '../controllers/root/postRoot'
import {wordCloudRouter} from '../controllers/word-cloud.controller'
const root = express.Router()
root.use(wordCloudRouter)

root.get('/', getRoot)
root.post('/', postRoot)

export default root