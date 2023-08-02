import axios from 'axios'

const getClassName = async ():Promise<string>=>{
    return await axios.get('')
}

export const splitPascalCase = (string:string):string[]=>{
    return string.replace(/[A-Z]/g,' $&').trim().split(' ')
}
 
export type WordCloud = Record<string,number>

// export type WordCloudEntry = {
//     word:string
//     count:number
// }
// export type WordCloud = WordCloudEntry[]

export const generateWordCloud = async ():Promise<WordCloud>=>{

}