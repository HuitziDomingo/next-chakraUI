export const codePush = `
 export function arrayPush() {
    let fruits = ['manzana', 'platano', 'mango', 'durazno']
    fruits.push('papaya')

    fruits.map(fruit => console.log(fruit))
    //'manzana', 'platano', 'mango', 'durazno','papaya'
}
`
export const codeConcat = `
export function arrayConcat() {
    let fruits = ['manzana', 'platano', 'mango', 'durazno']
    let vegetables = ['verengena', 'calabaza', 'zanahoria', 'lechuga']

    let fruitsAndVegetables = fruits.concat(vegetables)

    fruitsAndVegetables.map(fv => console.log(fv))
    //'manzana', 'platano', 'mango', 'durazno','verengena', 'calabaza', 'zanahoria', 'lechuga'
}
`
export const codePop = `
export function arrayPop() {
    let fruits = ['manzana', 'platano', 'mango', 'durazno']
    fruits.pop()
    fruits.map(fruit => console.log(fruit))
    //'manzana', 'platano', 'mango', 'durazno'
}
`