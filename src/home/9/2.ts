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
    age: 21,
    isMarried: true,
    gender: 'm',
    books: ['грокаем алгоритмы', 'дети капитана гранта']
  },
  {
    name: 'Виталий',
    age: 12,
    isMarried: false,
    gender: 'm',
    books: [],
  },
  {
    name: 'Катюша',
    age: 34,
    isMarried: true,
    gender: 'f',
    books: ['кулинарные рецепты', 'Гарри Поттер']
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

print('=== Сортировка ===')
persons.toSorted((p1, p2) => p2.name.localeCompare(p1.name, 'ru')).forEach(p => {
  print(p.name)
})

// numbers.toSorted((n1, n2) => n1 - n2)
