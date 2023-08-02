import {getRandomPascalCaseStrings} from './get-random-pascal-case-word'
import {splitPascalCase} from './split-pascal-case'

type WordCloud = Record<string,number>
 
const generateWordCloud = (words:string[]):WordCloud=>{
    return words.map(word=>word.toLocaleLowerCase()).reduce((acc:WordCloud,word)=>{
        if(!acc[word]){
            acc[word] = 0
        }
        acc[word]++
        return acc
    },{})
}

export const getRandomWordCloud = async ():Promise<WordCloud>=>{
    const pascalCaseStrings = await getRandomPascalCaseStrings(100)
    const words = pascalCaseStrings.map(splitPascalCase).flat()
    return await generateWordCloud(words)
}