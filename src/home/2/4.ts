export {}

/*
4. Секретный сервер

Представим, что мы пишем программу для проверки доступа на секретный сервер.

У нас есть три переменные (которые нужно заполнить с терминала):

isUserLoggedIn - показывает, вошел ли пользователь в систему
userRole - определяет роль пользователя ("admin", "moderator", "user")
isPaidUser - показывает, является ли пользователь платным

Задача - написать условия, чтобы определить, имеет ли пользователь доступ к секретному серверу.
Для этого пользователь должен удовлетворять следующим условиям:
- пользователь должен быть вошедшим в систему
- пользователь может быть как "admin" или "moderator"
- если пользователь "admin", у него всегда есть доступ
- если пользователь "moderator", у него доступ есть только в том случае,
если он также является платным пользователем.

*/

const isPaidUser: boolean = (input('isPaidUser (y/n) = ') === 'y')
const userRole: string = input('userRole (admin/moderator/user) = ')
const isUserLoggedIn: boolean = (input('isUserLoggedIn (y/n) = ') === 'y')

if (
  isUserLoggedIn 
  && ((userRole === 'admin') || (isPaidUser && userRole === 'moderator'))
) {
  print('hello sir')
}
else {
  print('Вы хто такие? Оо Я вас не звал!')
}
