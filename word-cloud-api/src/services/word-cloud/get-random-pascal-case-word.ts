import axios from 'axios'
import {load} from 'cheerio'

const getRandomPascalCaseString = async ():Promise<string>=>{
    // TODO split between network reuqest, and DOM parsing
    const response = await axios.get('https://www.classnamer.org/')
    const $ = load(response.data);
    const wrapper = $('#classname')
    return wrapper.text()
}

export const getRandomPascalCaseStrings = async (size:number):Promise<string[]>=>{
    // TODO what  if some requests fail?
    const promises = new Array(size).fill(null).map(getRandomPascalCaseString)
    return await Promise.all(promises)
}