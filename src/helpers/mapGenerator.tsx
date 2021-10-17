export const generateMap = (arr: ((string | number) | string | number)[]): any => {
    return arr.reduce((acc, cur) => ({...acc, [cur]: cur}), {});
}

interface mapString {
    [key: string]: string
}

export const generateMapByArrString = (arr: string[]): mapString => {
    return arr.reduce((acc, cur) => ({...acc, [cur as string]: cur as string}), {});
}