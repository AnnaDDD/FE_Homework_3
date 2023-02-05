const products = [
{
    id:1,
    name: "Iphone 14",
    price:100000,
    category: "phone"

},
{
    id:2,
    name: "Iphone 13",
    price:90000,
    category: "mobile"
},
{
    id:3,
    name: "Iphone 12",
    price:80000,
    category: "phone"
}
]
//console.log(products)

//Вывести в консоль название продукта, у которого id=2
//console.log(products[1].name)

//Вывести в консоль название и цену продукта у которого id=3
//console.log(products[2].name, products[2].price)

//Вывести в консоль название в теге h1
//console.log(`<h1>${products[1].name + products[1].price}</h1>`) // интерполяция (когда обеъединяем строку и джава скрипт)

// Вывести в консоли div, внутри которого в теге h1 отобразить название продукта, у которого id = 1,
// и внутри того же div'а в теге <p> отобразить цену того же продукта

/*
console.log(`<div>
               <h1>${products[0].name}</h1>
               <p>${products[0].price}</p>
             </div>
          `)

*/

// В консоли отобразить название и цену каждого продукта с помощью цикла for

//for (let i=0; i<products.length; i++) {
   // console.log(products[i].name, products[i].price)
//}

//В консоли отобразить название и цену только тех проудктов цена которых больше 85000


//for(let i = 0; i < products.length; i++){
//if(products[i].price > 85000) {
    //console.log(products[i].name, products[i].price)
//}
//}

//В консоли отобразить название и цену только продуктов из категории phone

//for(let i = 0; i < products.length; i++){
    //if(products[i].category === "phone") {
        //console.log(products[i].name, products[i].price)
   // }
    //}

// В консоли вывести сумму всех товаров из массива products

//let sum = 0
//for (let i=0; i<products.length; i++) {
    //sum = sum + products[i].price 
//}
//console.log(sum)

/*Несколько способов создания функций
1. functional declaration
2. functional expression
3. arrow funcion
*/

//function sum(a,b){
 //   console.log(a+b)
//}
//sum(10,20) // вызов функции с аргументами 10 и 20
//sum(50,70)

//function showNotification(text, color) {
   // console.log(`Отображаю уведомление ${text}, цвет которого ${color}` )
//console.log(`
//<div class="${color}">
//<p class="notification-text">${text}</p>
//</div>
//`)

//}

//showNotification ("Успешно", "green")

//showNotification("Ошибка", "red")




/*
 ДЗ. Наполнить массив products подобными объектами, с разными значениями
    
    1. Есть массив объектов products. Вывести название и цену каждого товара в консоли со
    скидкой 10%
    2. Есть массив объектов products. Из этого массива добавить в новый пустой массив только те
        продукты:
            а)цена которых больше 88000; const moreThanPrice = [] нужно заполнить данный массив
            б) категория который "phone"; const categoryPhone = []
    3. Создать функцию, которая получает два числа в параметры и выводит в консоль бОльшее из них
        max(10, 20) // 20
        max(100, 5) // 100
    4. Написать функцию, которая запрашивает число у пользователя и отображает "ЧЕТ", если число четное
        и "НЕЧЕТ", если нечетное
    5. Написать функцию, которая получает два числа и возводит первое число в степень второго
        power(10, 2) // 100
        power(12, 2) // 144
        power(2, 5) // 32
*/


//1
for (let i=0; i<products.length; i++) {
    const result =  products[i].price - products[i].price*0.1
    console.log(products[i].name,result)
}

//2a
const moreThanPrice = []
for(let i = 0; i < products.length; i++){
    if(products[i].price > 80000) {
    moreThanPrice[i] = products[i]
   }
    }
    console.log(moreThanPrice)

//2b
const categoryPhone = []
for(let i = 0; i < products.length; i++){
    if(products[i].category === "phone") {   
        categoryPhone[i]=products[i]
    }
    }
    console.log(categoryPhone)

//3
function max(a,b){
    if(a>b){
   console.log(a)
} else {
    console.log(b)
}
}
max(10,20)
max(100, 5)

//4
const num1 = prompt("Введите число: ")
function input(num1){
if(num1 % 2 ==0){
    console.log("Чётное")
} else {
    console.log("Нечётное")
}
}

input(num1)

//5
function power(a,b){
    const resultpower = Math.pow(a,b);
    console.log(resultpower)
}
power(10,2)
power(12,2)
power(2,5)
