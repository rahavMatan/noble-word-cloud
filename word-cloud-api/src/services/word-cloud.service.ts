import axios from 'axios'
import {load} from 'cheerio'
export type WordCloud = Record<string,number>

// export type WordCloudEntry = {
//     word:string
//     count:number
// }
// export type WordCloud = WordCloudEntry[]


const getRandomPascalCaseString = async ():Promise<string>=>{
    const response = await axios.get('https://www.classnamer.org/')
    const $ = load(response.data);
    const wrapper = $('#classname')
    console.log(wrapper.text())
    return wrapper.text()
    //return Promise.resolve('SomePascalCase')
}

const getRandomPascalCaseStrings = async (size:number):Promise<string[]>=>{
    const promises = new Array(size).fill(null).map(getRandomPascalCaseString)
    return await Promise.all(promises)
}

export const splitPascalCase = (string:string):string[]=>{
    return string.replace(/[A-Z]/g,' $&').trim().split(' ').map(str=>str.toLocaleLowerCase())
}
 
export const generateWordCloud = (words:string[]):WordCloud=>{
    return words.reduce((acc:WordCloud,word)=>{
        if(!acc[word]){
            acc[word] = 0
        }
        acc[word]++
        return acc
    },{})
}

export const getRandomWordCloud = async ():Promise<WordCloud>=>{
    const pascalCaseStrings = await getRandomPascalCaseStrings(20)
    const words = pascalCaseStrings.map(splitPascalCase).flat()
    return await generateWordCloud(words)
}