// /*
//   Напиши скрипт который: 

//   - При посещении страницы через prompt cпрашивает 'Введите пароль доступа'

//   - Если был нажат Cancel в prompt, показывать alert с сообщением 'Ожидаю ввода пароля'.

//   - Если введенное значение совпадает со значением переменной correctPassword, 
//     показывать alert со сообщением 'Доступ в секретный бункер разрешен!'

//   - Если что-то другое — показывать alert с сообщением 'Активирована система защиты!'
// */ 


'use strict';
const correctPassword = 'jqueryismyjam';
let getPassword = prompt('Введите пароль доступа');
if (getPassword === null) {
    alert('Ожидаю ввода пароля');
} else if (getPassword === correctPassword) {
    alert('Доступ в секретный бункер разрешен!');
} else {
    alert('Активирована система защиты!');
}