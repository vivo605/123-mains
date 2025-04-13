export {}

// const numbers: (string | number)[] = [1,2,3]
const numbers = [1,2,3]

const t = numbers[0]

numbers[0] = 5

// for (let i = 0; i < 3; i++) {
for (let i = 0; i < numbers.length; i++) {
  const n = numbers[i]
  console.log(n)
}

for (const n of numbers) {
  console.log(n)
}

numbers.forEach((n, i) => {
  print(`n${i+1} = ${n}`)
})

// количество
numbers.length

// положить в конец
numbers.push(1) // 5 2 3 (1)
// положить в начало
numbers.unshift(10) // (10) 5 2 3 1
// удаление/добавление по индексу (или замена)
numbers.splice(1, 2, 2, 5, 7) // 10 (2 5 7) 3 1
// удалить последний
const lastNumber = numbers.pop() // 10 2 5 7 3
// удалить первый
const firstNumber = numbers.shift() // 2 5 7 3

console.log('-')
const t1 = numbers[numbers.length-1]
const t2 = numbers.at(-1)

numbers.push(0) // 2 5 7 3 0

// notZero.length <= numbers.length
const notZero = numbers.filter((n) => n !== 0) // 2 5 7 3


// notZero.length === numbers.length
const pows = numbers.map((n) => n ** 2) // 4 25 49 9 0

const hasZero = numbers.some((n) => n === 0)
const allPositive = numbers.every((n) => n > 0)

// numbers.reverse() // 0 3 7 5 2
const reversedNumbers = numbers.toReversed() // 0 3 7 5 2

// numbers.sort()
numbers.toSorted((n1, n2) => n1 - n2)

const newArray = [...numbers, 5] // [2, 5, 7, 3, 0, 5]

const i1 = numbers.indexOf(5) // 1
const i2 = numbers.indexOf(5, 2) // 5

numbers.lastIndexOf(5) // 5
numbers.find(n => n > 5) // 5
numbers.includes(5)
