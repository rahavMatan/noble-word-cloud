import express, { RequestHandler } from 'express'

export const wordCloudRouter = express.Router()


const getWordCloud:RequestHandler = (req,res)=>{
    res.json('ok')
}

wordCloudRouter.get('/word-cloud', getWordCloud)
