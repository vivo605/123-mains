/*
части тела
- голова
- руки
- торс
- ноги

body parts
- head
- arms
- torso
- legs
*/

export type BodyPart = 'head' | 'arms' | 'torso' | 'legs'

export function startGame() {
  print('Битва начинается!') // (приветствие)
  
  let hp_player = 10
  let hp_npc = 10
  
  while (true) {
    // Игрок выбирает куда ударить
    const player_attack: BodyPart = inputBodyPart()

    // Выбираем что блокирует нпс
    const npc_block: BodyPart = 'head'

    // 1

    // Проверяем результат, если попал - списать хп у нпс
    if (player_attack !== npc_block) {
      hp_npc -= 1
    }

    // Игрок выбирает что блокировать
    const player_block = inputBodyPart()
    // Выбираем куда ударит нпс
    const npc_attack: BodyPart = 'torso'
    
    // Проверяем результат, если попал - списать хп у игрока

    if (npc_attack !== player_block) {
      hp_player -= 1
    }
  } // while (hp_player && hp_npc) // пока не закончились хп

  // выводим результат
}

function inputBodyPart(): BodyPart {
  return 'torso' // TODO: предлагать выбор
  // 1. глова
  // 2. руки
}
