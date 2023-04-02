// // sort - сортиррует елем масс не созд нов
// const num =[0,15,5,10]
// num.sort();
// console.log(num);//0 10 15 5


// const num =[0,15,5,10]
// num.sort((a,b)=>a-b);//сорт по возрост
// console.log(num);//0,5,10,15

// const num =[0,15,5,10]
// num.sort((a,b)=>b-a);//сорт по убыв
// console.log(num);


// // task1
// // Отсортировать массив с товарами по значению id.
// const arr=[
//     { id: 4, title: "велосипед", price: 45000 },
//     { id: 1, title: "самокат", price: 15000 },
//     { id: 3, title: "сноуборд", price: 20000 },
//     { id: 2, title: "лыжи", price: 22000 },
//   ];
// arr.sort((a,b)=>a.id-b.id) 
// console.log(arr); 

// // task2
// // Отсортировать массив с товарами по цене в порядке 
// // убывания.
// const arr=[
//         { id: 4, title: "велосипед", price: 45000 },
//         { id: 1, title: "самокат", price: 15000 },
//         { id: 3, title: "сноуборд", price: 20000 },
//         { id: 2, title: "лыжи", price: 22000 },
//       ];
//     arr.sort((a,b)=>b.price-a.price) 
//     console.log(arr);

//task3
// //сумма двух меньш елем масс
// function sumTwoSmallestNums(array) {
//     array.sort((a,b)=>a-b);
//     return array[0]+array[1];
// }
// console.log(sumTwoSmallestNums([9,4,10,1]));


// //task4
// // С использованием методов sort и filter, 
// // найдите сумму двух наименьших положительных чисел.
// const arr=[1,-2,3,-4,5];
// const newArr=arr.filter((elem)=>elem>0);
// newArr.sort((a,b)=>a-b);
// console.log(newArr[0]+newArr[1]);



// //reduce - обр ко всем елем масс, но возвр только одно знач
// //reduce- callback, accumulator(1-знач елем масс, 2-сумма елем масс,проходя по масс добавл)

// const nums = [1,5,4,7,8];
// let res = nums.reduce((accum, curent)=>accum+curent,2); //2-нач знач акк, тогда 1-й curent=nums[0]
// console.log(res);


// const nums = [-5,-6,1,5,4,7,8];
// let positivesNums=nums.reduce((acc,cur)=>{
//     if (cur>0) {
//         return acc + cur;
//     }else{
//         return acc;
//     }
// },0);
// console.log(positivesNums);
// // acc = 0, cur = -5;
// // acc = 0, cur = -6
// // acc = 0, curr = 1
// // acc = 1, curr = 5
// // acc = 6 , curr = 4


// // task5
// // Используя метод reduce найти сумму четных чисел массива.
// const nums = [-5,-6,1,5,4,7,8];
// let sum= nums.reduce((acc,val)=>{
//     if (val%2==0) {
//         return acc+val;
//     }else{
//         return acc;
//     }
// },0)
// console.log(sum);


// // task6
// // Используя метод reduce найти наибольшее число массива.
// const nums = [-5,-6,1,5,4,7,8];
// let bigerNum= nums.reduce((acc,val)=>{
//         if (val>acc) {
//             return val;
//         }else{
//             return acc;
//         }
//     },0)
//     console.log(bigerNum);


// // task7
// // Используя метод reduce найти объект товара с самой 
// // высокой ценой.
// const arr=[
//   { id: 1, price: 10000 },
//   { id: 2, price: 15000 },
//   { id: 3, price: 1000 },
//   { id: 4, price: 45000 },
//   { id: 5, price: 30000 },
// ];
// let biggerCost= arr.reduce((acc,big)=>(acc.price>big.price)? return acc: return big)
// console.log(biggerCost);



// // task8
// // marks=> sum_marks
// const products=[
//     { id: 1, title: "велосипед", price: 45000, marks: [4, 5, 3, 5] },
//     { id: 2, title: "самокат", price: 15000, marks: [4, 4, 5, 4] },
//     { id: 3, title: "сноуборд", price: 20000, marks: [3, 3, 2, 3] },
//     { id: 4, title: "лыжи", price: 22000, marks: [4, 4, 3, 4] },
//   ];

//   products.forEach((elem)=>{
//     elem.sum_marks= elem.marks.reduce((acc,cur)=> acc+cur);
//     delete elem.marks;
//   })
//   console.log(products);


// // task8
// //   Преобразовать массив из объектов, чтобы в итоге 
// //   массив состоял из объектов со свойствами id, title, 
// //   price, max_mark.
// const products=[
//     { id: 1, title: "велосипед", price: 45000, marks: [4, 5, 3, 5] },
//     { id: 2, title: "самокат", price: 15000, marks: [4, 4, 5, 4] },
//     { id: 3, title: "сноуборд", price: 20000, marks: [3, 3, 2, 3] },
//     { id: 4, title: "лыжи", price: 22000, marks: [4, 4, 3, 4] },
//   ];
//   products.forEach((elem)=>{
//         elem.max_mark= elem.marks.reduce((acc,cur)=> (acc.marks>cur.marks)?  acc:  cur);
//       })
//       console.log(products);
  


// // task9
// // Преобразовать массив из объектов, 
// // чтобы в итоге массив состоял из объектов со 
// // свойствами id, title, price, avg_mark. Avg_mark 
// // содержит среднеарифметическое значение marks.

// const products=[
//         { id: 1, title: "велосипед", price: 45000, marks: [4, 5, 3, 5] },
//         { id: 2, title: "самокат", price: 15000, marks: [4, 4, 5, 4] },
//         { id: 3, title: "сноуборд", price: 20000, marks: [3, 3, 3, 3] },
//         { id: 4, title: "лыжи", price: 22000, marks: [4, 4, 3, 4] },
//       ];
//       products.forEach((elem)=>{
//         elem.avg_mark=elem.marks.reduce((sum,cur)=>sum+cur)/elem.marks.length;
//         delete elem.marks;
//     });
//         console.log(products);
        


