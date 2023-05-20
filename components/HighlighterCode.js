export class HighlighterCode {

    static codePush = `
 export function arrayPush() {
    let fruits = ['manzana', 'platano', 'mango', 'durazno']
    fruits.push('papaya')

    fruits.map(fruit => console.log(fruit)) // <- manzana, platano, mango, durazno, papaya
}
`
    static codeConcat = `
export function arrayConcat() {
    let fruits = ['manzana', 'platano', 'mango', 'durazno']
    let vegetables = ['verengena', 'calabaza', 'zanahoria', 'lechuga']

    let fruitsAndVegetables = fruits.concat(vegetables)

    fruitsAndVegetables.map(fv => console.log(fv)) // <- manzana, platano, mango, durazno, verengena, calabaza, zanahoria, lechuga
}
`
    static codePop = `
export function arrayPop() {
    let fruits = ['manzana', 'platano', 'mango', 'durazno']
    fruits.pop()
    fruits.map(fruit => console.log(fruit)) // <- manzana, platano, mango
}
`
    static codeFilter = `
export function arrayFilter() {
    let fruits = ['manzana', 'platano', 'mango', 'durazno']
    let newFruits = fruits.filter(fruit => fruit !== 'manzana' && fruit !== 'platano')
    newFruits.map(fruit => console.log(fruit)) // <- mango, durazno
}
`
    static codeShift = `
export function arrayShift() { 
    let fruits = ['manzana', 'platano', 'mango', 'durazno']
    let firstFruit = fruits.shift()
    console.log(firstFruit) // <- manzana
}
`

    static codeUnShift = `
export function arrayUnShift() { 
    let numbers = [40, 50, 60, 70, 80]
    let addNumbersToStart = numbers.unshift(10, 20, 30)
    console.log(addNumbersToStart) // <- 8
    numbers.map(nums => console.log(nums)) // <- 10, 20, 30, 40, 50, 60, 70, 80
}
`
    static codeMap = `
export function arrayMap() {
    let users = [
        { name: 'Juan', age: 36 },
        { name: 'Maria', age: 26 },
        { name: 'Angela', age: 23 },
    ]

    users.map(user => console.log(user.name, user.age)) // <- Juan 36, Maria 26, Angela 23
}
`
    static codeSlice = `
export function arraySlice() {
    let fruits = ['manzana', 'platano', 'mango', 'durazno']
    let newFruit = fruits.slice(0, 3) 
    console.log(newFruit) // <- ['manzana', 'platano', 'mango']
}
`
    static codeSort = `
export function arraySort() {
    let nums = [3, 2, 4, 1]
    nums.sort()
    console.log(nums) // <- [1, 2, 3, 4]
}
`
    static codeJoin = `
export function arrayJoin() {
    let fruits = ['manzana', 'platano', 'mango', 'durazno']
    console.log(fruits.join('-')) // <- manzana-platano-mango-durazno
}
`
    static codeToString = `
export function arrayToString() {
    let fruits = ['manzana', 1, 'mango', 3]
    console.log(fruits.toString()) // <- manzana, 1, mango, 3
}
`

}


