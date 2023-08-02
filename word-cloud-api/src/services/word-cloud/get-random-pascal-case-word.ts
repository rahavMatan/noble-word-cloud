import axios from 'axios'
import {load} from 'cheerio'

const getRandomPascalCaseString = async ():Promise<string>=>{
    const response = await axios.get('https://www.classnamer.org/')
    const $ = load(response.data);
    const wrapper = $('#classname')
    console.log(wrapper.text())
    return wrapper.text()
}

export const getRandomPascalCaseStrings = async (size:number):Promise<string[]>=>{
    const promises = new Array(size).fill(null).map(getRandomPascalCaseString)
    return await Promise.all(promises)
}