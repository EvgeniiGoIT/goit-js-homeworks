/*  
  Напиши функцию isObjectEmpty(obj), которая получает 
  один аргумент obj - объект, и проверяет пуст ли он (есть ли в нем свойства).
  
  Возвращает true если объект пустой, false если не пустой.
*/

const isObjectEmpty = obj => {
  return !Object.keys(obj).length;
}

// Вызовы функции для проверки
console.log(
    isObjectEmpty({})
  ); // true
  
  console.log(
    isObjectEmpty({a: 1})
  ); // false
  
  console.log(
    isObjectEmpty({a: 1, b: 2})
  ); // false
  