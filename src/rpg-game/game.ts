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


const BodyParts = ['head', 'arms' , 'torso' , 'legs'] as const
type BodyPart = typeof BodyParts[number]

export function startGatme() {
  print('Битва начинается!') // (приветствие)
  
  let hp_player = 10
  let hp_npc = 10
  
  // пока не закончились хп
  while (true) {
    // игрок атакует

    const player_attack: BodyPart = inputBodyPart()
    const npc_block: BodyPart = 'head'

    if (player_attack !== npc_block) {
      hp_npc -= 1
      print(`👤🎯 Ты попал в противника. У врага осталось ${hp_npc}❤️`)

      if (!hp_npc) {
        print('Ты выйграл. Иди работай, а не играй в свои игрулки)')
        return
      }
    }
    else {
      print(`👤 Ты промазал. У врага так и осталось ${hp_npc}❤️😱😱😱.`)
    }

    // игрок блокирует

    const player_block = inputBodyPart()
    const npc_attack: BodyPart = 'torso'

    if (npc_attack !== player_block) {
      hp_player -= 1
      print(`🤖🎯 В тебя попал бот. Давай придумывай как поднять свою удачу) у тебя осталось ${hp_player}❤️`)

      if (!hp_player) {
        print('Ты проиргал. Тебе надо тренеревотся)')
        return
      }
    }
    else {
      print(`🤖 Бот в тебя не попал, радуйся. У тебя так и осталось ${hp_player}❤️`)
    }
  }
}

function inputBodyPart(): BodyPart {
  return 'torso' // TODO: предлагать выбор
  // 1. глова
  // 2. руки
}
