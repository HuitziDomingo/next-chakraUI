export const codePush = `
 export function arrayPush() {
    let fruits = ['manzana', 'platano', 'mango', 'durazno']
    fruits.push('papaya')

    fruits.map(fruit => console.log(fruit))
    //manzana, platano, mango, durazno, papaya
}
`
export const codeConcat = `
export function arrayConcat() {
    let fruits = ['manzana', 'platano', 'mango', 'durazno']
    let vegetables = ['verengena', 'calabaza', 'zanahoria', 'lechuga']

    let fruitsAndVegetables = fruits.concat(vegetables)

    fruitsAndVegetables.map(fv => console.log(fv))
    //manzana, platano, mango, durazno, verengena, calabaza, zanahoria, lechuga
}
`
export const codePop = `
export function arrayPop() {
    let fruits = ['manzana', 'platano', 'mango', 'durazno']
    fruits.pop()
    fruits.map(fruit => console.log(fruit))
    //manzana, platano, mango
}
`
export const codeFilter = `
export function arrayFilter() {
    let fruits = ['manzana', 'platano', 'mango', 'durazno']
    let newFruits = fruits.filter(fruit => fruit !== 'manzana' && fruit !== 'platano')
    newFruits.map(fruit => console.log(fruit))
    //mango, durazno
}
`
export const codeShift = `
export function arrayShift() { 
    let fruits = ['manzana', 'platano', 'mango', 'durazno']
    let firstFruit = fruits.shift()
    console.log(firstFruit)
    //manzana
}
`