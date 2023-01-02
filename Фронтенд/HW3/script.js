// // // В программе объявлена переменная word со строковым значением. Используя цикл, разверните слово.
// let word ="world";
// let newWord="";
// for (let i = word.length-1; i>=0 ; i--) {
//     newWord+=newWord+word[i]; 
//     console.log(newWord);
// }


// let word ="world";
// word=word.split('').reverse().join('');
// console.log(word);




// Напишите функцию, которая в качестве аргументов получает слово и определяет, 
// является ли оно палиндромом. Если да, функция возвращает true, в ином случае false.
// Палиндром - слово, одинаково читающееся как слева направо, так и справа налево.
// let polindrom = prompt("Введите слово")
// function searchPolindrom(polindrom) {
//     let polindrom2="";
//     for (let i = polindrom.length-1; i>=0 ; i--) {
//             polindrom2+=polindrom[i]; 
//         }
//         return (polindrom2 === polindrom)?alert(true):alert(false)
// }
// searchPolindrom(polindrom)




// // Используя цикл, выведите в консоль сумму чисел из диапазона значений от 0 до 50 кратные 5.
// for (let i = 0; i <= 50; i++) {
//     if (i%5===0) {
//         console.log(i);
//     } 
// }


// // Написать цикл, который выводит только названия товаров
// const products = [
//         {
//           title: "Nike",
//           price: 300,
//           type: "shoe",
//         },
//         {
//           title: "Puma",
//           price: 450,
//           type: "shoe",
//         },
//         {
//           title: "Channel",
//           price: 1200,
//           type: "bag",
//         },
//         {
//           title: "BMW",
//           price: 7000,
//           type: "car",
//         },
//       ];
// for (let i = 0; i < products.length; i++) {
//     console.log(products[i].title); 
// }




// // Написать цикл, который выводит для каждого товара стоку по маске “<название> (<цена>)”
// for (let i = 0; i < products.length; i++) {
//     console.log(`<${products[i].title}> (<${products[i].price}>)`);
// }



// // Написать функцию, которая получает в качестве аргумента массив из объектов и возвращает объект с самым дорогим товаром.
// function mostExpensive(products) {
//     let max = products[0].price
//     let maxInd = 0;
//     for (let i = 0; i < products.length; i++) {
//         if (products[i].price>max) {
//             max=products[i].price
//             maxInd=i
//         } 
//     }
//     return products[maxInd];
// }
// console.log(mostExpensive(products));