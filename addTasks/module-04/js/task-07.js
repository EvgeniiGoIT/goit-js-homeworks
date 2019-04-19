/*
* Есть два массива names и prices с именами и ценами товаров.
* Напишите функцию combine(names, prices), которая получает 
* эти два массива и возвращает массив объектов со свойствами name и price. 
*/

const names = ['Радар', 'Сканер', 'Дроид', 'Захват', 'Двигатель', 'Топливный бак'];
const prices = [1000, 2000, 1500, 2700, 1600, 8000];

const combine = (names, prices) => {
    const products= {};
    for (let i = 0; i < names.length; i+= 1) {
        products[names[i]] = prices[i];
    }
    return products;
}

const products = combine(names, prices);
console.log(products); // массив объектов со свойствами name и price

