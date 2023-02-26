// // 1)  Превратите массив чисел в длинную строку, 
// // состоящую из всех этих чисел.
// // Пример: [1,2,3] => "1,2,3"

// const arr=[1,2,3];debugger
// let str='';debugger
// arr.forEach(element => {
//    str+=element;debugger
// });
// str=str.split('').join(',');
// console.log( str);




// // 2)Используя метод reduce, посчитайте сколько людей проголосовали.

// const voters = [
//     {name:'Bob' , age: 30, voted: true},
//     {name:'Jake' , age: 32, voted: true},
//     {name:'Kate' , age: 25, voted: false},
//     {name:'Sam' , age: 20, voted: false},
//     {name:'Phil' , age: 21, voted: true},
//     {name:'Ed' , age:55, voted:true},
//     {name:'Tami' , age: 54, voted:true},
//     {name: 'Mary', age: 31, voted: false},
//     {name: 'Becky', age: 43, voted: false},
//     {name: 'Joey', age: 41, voted: true},
//     {name: 'Jeff', age: 30, voted: true},
//     {name: 'Zack', age: 19, voted: false}
// ];

// let election =voters.reduce((acc,cur)=>{
//    if (cur.voted==1) {
//       return acc+1;
//    } else{
//          return acc;
//       }
// },0);
// console.log(`${election} человек из ${voters.length} проголосовали`);



// // 3)Получив массив всех товаров из вашего списка желаний, прикиньте, 
// // сколько будет стоить купить все сразу.

// const wishlist = [
//     { title: "Tesla Model S", price: 90000 },
//     { title: "4 carat diamond ring", price: 45000 },
//     { title: "Fancy hacky Sack", price: 5 },
//     { title: "Gold fidgit spinner", price: 2000 },
//     { title: "A second Tesla Model S", price: 90000 },
// ];
// let sumOfPrices=0;
// wishlist.forEach(element => {
//    sumOfPrices+=element.price;
// });
// console.log(`${sumOfPrices}$ будет стоить купить все сразу`);




// // 4) У вас есть массив объектов, представляющих список клиентов с их заказами. 
// // Каждый объект имеет свойства name и orders, где orders - это массив строк, 
// // представляющих товары, которые заказал клиент. Ваша задача - создать новый массив объектов, 
// // где каждый объект имеет свойства name и totalOrders, 
// // где totalOrders - общее количество товаров, заказанных клиентом.

// const arr=[
//    {name:'Piter',orders:['computer']},
//    {name:'Pavel',orders:['computer','table']},
//    {name:'Paulina',orders:['computer','table','TV']},
//    {name:'Patrick',orders:['computer','table','TV','door']}
// ]
// arr.forEach(elem=>{
//    elem.totalOrders=elem.orders.length;
// })
// console.log(arr);






// // 5)Создайте массив объектов со свойствами 'name' и 'age'. 
// // Вычислите количество совершенолетних и несовершеннолетних людей.

// const arr=[
//    {name:'Joe',age:16},
//    {name:'John',age:18},
//    {name:'Liza',age:17},
//    {name:'Ron',age:36}
// ]
// let adults=0;
// let minors=0;
// arr.forEach(elem => {
//    if (elem.age>=18) {
//       adults++
//    } else {
//       minors++
//    }
// });
//    console.log(`количество совершенолетних = ${adults}, а количество несовершеннолетних = ${minors}`);
   




// // 6)Создайте массив объектов со свойствами 'name' и 'age'. 
// // Используя методы массива, создайте новый массив, 
// // содержащий только те объекты, возраст которых больше 30 лет.

// const arr=[
//    {name:'Joe',age:66},
//    {name:'John',age:29},
//    {name:'Liza',age:31},
//    {name:'Ron',age:30}
// ]
// let olders = arr.filter((elem)=>elem.age>30)
// console.log(olders);





