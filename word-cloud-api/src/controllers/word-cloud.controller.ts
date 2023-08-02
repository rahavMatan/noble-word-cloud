import express, { RequestHandler } from 'express'
import {generateWordCloud} from '../services/word-cloud.service'
export const wordCloudRouter = express.Router()


const getWordCloud:RequestHandler = async (req,res)=>{
    const wordCould = await generateWordCloud()
    res.json({wordCould})
}

wordCloudRouter.get('/word-cloud', getWordCloud)
