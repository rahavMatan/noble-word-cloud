export const splitPascalCase = (string:string):string[]=>{
    return string.replace(/[A-Z]/g,' $&').trim().split(' ')
}