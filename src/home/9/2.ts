export {}

type Person = {
  name: string
  age: number
  isMarried: boolean
  gender: 'm' | 'f'
  books: string[]
}

// TODO: заполнить
const persons: Person[] = [
  {
    name: 'Мишутка',
    age: 14,
    isMarried: true,
    gender: 'm',
    books: ['грокаем алгоритмы', 'дети капитана гранта']
  },
  {
    name: 'Мишутка',
    age: 11,
    isMarried: false,
    gender: 'm',
    books: []
  },
  {
    name: 'Виталий',
    age: 12,
    isMarried: false,
    gender: 'm',
    books: [],
  },
  {
    name: 'Вася',
    age: 32,
    isMarried: false,
    gender: 'm',
    books: [],
  },
  {
    name: 'Катюша',
    age: 14,
    isMarried: true,
    gender: 'f',
    books: ['кулинарные рецепты', 'Гарри Поттер']
  },
  {
    name: 'Петя',
    age: 40,
    isMarried: true,
    gender: 'm',
    books: []
  },
]

// const notZero = numbers.filter((n) => n !== 0) // 2 5 7 3

const adultCount: number = (
  persons
    .filter((p) => (
      p.age >= 18 
      &&
      !p.isMarried
      &&
      p.gender === 'm'
    ))
    .length
)
print(`Взрослых холостяков: ${adultCount}`)

const presonsCount: number = persons.length

// const likeBook: boolean = (
//   persons
//     .filter((p) => p.books.length !== 0)
//     .length == persons.length
// )
const allHaveFavouriteBooks: boolean = persons.every(p => p.books.length !== 0)
print(`${allHaveFavouriteBooks ? 'Все' : 'Не все'} жители имеют любимые книги`)

const smthLikePoter: boolean = persons.some(p => p.books.includes('Гарри Поттер'))
print(`${smthLikePoter ? 'Есть любитель' : 'Нет любителей (бедный Гарри 😭😭😭)'} Гарри Поттера`)


// TODO: задания на редактирование
/*

- убрать чела по имени Вася (он мне по-крупному задолжал)в
- вернуть Васю обратно (пора откопать, он обещал исправиться)
- поставить за Васей Петю (будет за ним присматривать)

*/

const vasya = persons.find(p => p.name === 'Вася')
// const indexOfVasya = persons.findIndex(p => p.name === 'Вася')
if (vasya) {
  const indexOfVasya = persons.indexOf(vasya)
  print('Мы Васю не любим.Удаляю таких... 😔😔😔')
  persons.splice(indexOfVasya, 1)
  print('Удаление законченно 😎😎')
}

if (vasya == undefined){
  print('Вася сказал что исправится поэтому, время его откопать')
}

// TODO - посчитать средний возраст (собираем статистику для пенсионного фонда)
const averageAge = persons.reduce((sum, person) => sum + person.age, 0) / persons.length;
print(`Средний возраст: ${averageAge} лет`);

// if (vasya) {
//   const newIndex = Math.trunc(persons.length / 2)
//   persons.splice(newIndex, 0, vasya)
// }



print() // И что это за print?
print('=== Семейный статус ===')
const marriedStatus = (person: Person): string => {
  switch (person.gender) {
    case "m":
      return (
        person.isMarried 
          ? 'женат'
          : 'не женат'
      )
    case "f":
      return (
        person.isMarried 
          ? 'замужем'
          : 'не замужем'
      )
  }
}
persons.toSorted((p1, p2) => p2.name.localeCompare(p1.name, 'ru')).forEach(p => {
  print(`${p.name}: ${marriedStatus(p)}`)
})

print()
print('=== Имена ===')

type NamesCount = {
  [key in string]: number
}

const names: NamesCount = {}

for (const p of persons) {
  // if (p.name in names) {
  //   names[p.name]!++
  // } else{
  //   names[p.name] = 1
  // }
  const count = names[p.name]
  if (typeof count !== 'undefined') {
    names[p.name] = count + 1
  } else {
    names[p.name] = 1
  }
}

for (const name in names) {
  const count = names[name]
  print(`${name}: ${count}`)
}

// Аня: 0
// names['Аня'] = 0
