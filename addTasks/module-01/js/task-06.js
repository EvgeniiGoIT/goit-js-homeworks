/* eslint-disable no-console */
/*
  Напиши скрипт который: 
 
  - Через prompt cпрашивает 'Введите произвольное целое число'
  - Если пользователь нажал Cancel - показывать alert 'Ну и ладно, пока!'
  - Если посетитель вводит целое число - показывать alert со строкой 'Спасибо!'
  - Если посетитель вводит что либо другое — показывать alert 'Необходимо было ввести целое число!'
*/
let getNumber = prompt("Введите произвольное целое число");
if (getNumber === null) {
  alert("Ну и ладно, пока!");
} else if (Number.isInteger(Number(getNumber))) {
  alert("Спасибо!");
} else {
  alert("Необходимо было ввести целое число!");
}
