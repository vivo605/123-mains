export {}

/*
1. Числа
(только циклы, без методов)
Создать массив, положить в него 10 случайных чисел от 0 до 100
Затем вывести:
- все числа через пробел
- минимальное и максимальное число
- сумму чисел
- количество чётных и нечётных чисел
*/

const randomNumbers: number[] = []

for (let i = 0; i < 10; i++) {
  randomNumbers[i] = random(0,100)
}

let str = ''
for (const n of randomNumbers) {
  str += n + ' '
}
print(`numbers: ${str}`)

let min = randomNumbers[0]!
for (const n of randomNumbers) {
  if (n < min) {
    min = n
  }
}
print(`min = ${min}`)

let max = randomNumbers[0]!
for (const n of randomNumbers) {
  if (n > max) {
    max = n
  }
}
print(`max = ${max}`)

// TODO: сумму чисел, количество чётных и нечётных чисел
