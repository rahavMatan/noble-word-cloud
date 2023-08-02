import axios from 'axios'

export type WordCloud = Record<string,number>

// export type WordCloudEntry = {
//     word:string
//     count:number
// }
// export type WordCloud = WordCloudEntry[]


const getRandomPascalCaseString = async ():Promise<string>=>{
    //return await axios.get('')
    return Promise.resolve('SomePascalCase')
}

const getRandomPascalCaseStrings = async (size:number):Promise<string[]>=>{
    const promises = new Array(size).fill(null).map(getRandomPascalCaseString)
    return await Promise.all(promises)
}

export const splitPascalCase = (string:string):string[]=>{
    return string.replace(/[A-Z]/g,' $&').trim().split(' ').map(str=>str.toLocaleLowerCase())
}
 
export const generateWordCloud = async ():Promise<WordCloud>=>{
    const pascalCaseStrings = await getRandomPascalCaseStrings(2)
    const wordMap = pascalCaseStrings.reduce((acc,pascalString)=>{
        const words = splitPascalCase(pascalString)
        words.forEach(word=>{
            if(!acc[word]){
                acc[word] = 0
            }
            acc[word]++
        })
        return acc
    },{})

    return wordMap
}