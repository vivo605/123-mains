export {}
/*
5. Тамагочи

- создать 2 животных (кот и собака), придумать им клички, научить команде "голос"
- создать функцию, которая принимает животное и даёт ему кманду "голос"
(показывать на экране - кто и что сказал)

- собака радостно лает или злобно рычит
- кот мяучит или бросает философскую цитатку

в процессе бесконечно можем делать:
- покормить питомца
- заставить выполнять команду "голос"

В зависимости от того, накормлен ли питомец, он издаёт разные звуки.
Спустя случайное время после кормления животное сново проголодается.
(от голода никто не умирает!)

Дополнительно, собака умеет приносить мячик, а кот умеет гадить в тапочек :3
Это действие животное может выполнить вместо команды "голос" независимо от накормленности.
*/

// Pet
// isSleeping

abstract class Pet {
  readonly name: string
  #isSleeping: boolean
  energy: number

  get isSleeping() {
    return this.#isSleeping
  }

  constructor(name: string) {
    this.name = name
    this.#isSleeping = false
    this.energy = 0
  }

  protected abstract _voice(): void
  
  sleep() {
    if (this.#isSleeping) {
      print(`${this.name} уже спит`)
    }
    else {
      this.#isSleeping = true
      print(`${this.name} уснул`)
    }
  }

  wakeUp() {
    if (this.#isSleeping) {
      this.#isSleeping = false
      print(`${this.name} проснулся`)
    }
    else {
      print(`${this.name} и так не спит`)
    }
  }

  voice() {
    if (this.#isSleeping) {
      return print(`${this.name} спит`)
    }

    this._voice()
  }

  eat() {
    this.energy = random(1, 3)
  }
}

class Cat extends Pet {
  protected _voice() {
    if (this.energy > 0){
      print('Мяу :3')
      this.energy--
    } else {
      print('Цитаты великих котов: "Не откладывай на завтра то, что можно съесть сегодня..." 👆')
    }
  }
}

class Dog extends Pet {
  protected _voice(){
    if (this.energy > 0){
      print('Гаф :3')
      this.energy--
    }
    else{
      print('Жрать хочу >:(')
    }
  }
}

// class Dog {} // !

const cat: Pet = new Cat('Васька') // input('Как зовут кота или гибрида): ')
print(`Кота зовут: ${cat.name}`)

cat.sleep() // Васька уснул / Васька уже спит 
cat.wakeUp() // Васька проснулся / Васька и так не спит

cat.voice() // Мяу :3 / Не откладывай на завтра то, что можно съесть сегодня...

cat.isSleeping

cat.eat() // energy [1..3]
// cat.#energy

/*
Домашка:
7.3 - дописать все CorrectNumber
7.4 - переписать с использованием классов
7.5 - energy сделать доступным в классах
*/
