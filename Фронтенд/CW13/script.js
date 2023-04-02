// // setTimeout - выполняет действие в арг1 спустя арг2 милисекунд только 1 раз 

// setTimeout(()=>{
//     console.log('hi')
// },5000);


// const myMessage=document.querySelector('#message');
// const btn = document.querySelector('#btn');

// btn.onclick =()=>{
//     setTimeout(()=>{
//         myMessage.style.display='block';
//     }, 2000);
// };


// // setInterval - выполняет действие в арг1 спустя арг2 милисекунд много раз 


// // forEach-метод масс,кот обращ ко всем элем масс


// const num = [1,2,3,9,5];
// num.forEach((elements)=>{
//     console.log(elements)
// })

// // callback's arg's=> element,index, array




// // task1
// // Создать массив из строк и используя метод forEach 
// // вывести строки поочередно.

// const arr=['Hello','world']
// arr.forEach((elements)=>{
//     console.log(elements);
// })



// // task2
// // Создать массив из строк и используя метод forEach 
// // вывести строки поочередно с их номером (начиная с единицы). 
// // Пример выводимой строки “(1) Велосипед”.

// const arr=['Hello','world']
// arr.forEach((elements, index)=>{
//     console.log(`(${index+1})${elements}`);
// })

// // task3
// // Создать массив из строк и используя метод forEach вывести только те строки, 
// // у которых индекс четный.

// const arr=['Hello','world','goodbye','world']
// arr.forEach((elements, index)=>{
//     if (index%2==0 &&index!==0) {
//      console.log(`(${index})${elements}`);   
//     }
    
// })




// // map

// // [1,2,3]=>[2,3,4]

// const num =[1,2,3,4,5];
// let newNum = num.map((num)=>num**2);

// console.log(num);
// console.log(newNum);


// // task4
// // Используя метод map пройтись по массиву из чисел 
// // и преобразовать все отрицательные числа в положительные.
// const arr=[1,2,-5,-6,7,2,-56,1,2,-9,-8];
// let newArr=arr.map((elem)=>{
//     if (arr<0){
//         return -elem
//     }else{
//         return elem;
//     }
// })
// console.log(newArr);


// let aArr = arr.map((elem)=>(elem<0?-elem:elem));
// console.log(aArr);
    


// // const min=-1;
// // let newArr=arr.map((arr)=>{
// //     if (arr<0) {
// //     // arr;
// //     return arr*min
// //     } else{console.log(arr);}
// // })
// // console.log(arr);
// //    console.log(newArr);



// // task5
// // Используя метод map пройтись по массиву из строк 
// // и преобразовать все строки в числа.
// //    ["5", "4","3","2","6"]

// const arr =["5", "4","3","2","6"];
// let newArr=arr.map((elem)=>+elem)
// // let newArr2= arr.map((num)=>(isNaN(num)?num: +num));
// console.log(newArr);



// // task6
// // Извлечение name из массива объектов:
// //    [{ name: "John", age: 25 }, 
// //    { name: "Jane", age: 30 }, 
// //    {name: "Sophie", age: 15}];
// // ["John","Jane","Sophie"]

// const arr =[{ name: "John", age: 25 }, 
//    { name: "Jane", age: 30 }, 
//    {name: "Sophie", age: 15}]

//    let newArr = arr.map((num) => num.name);
//    console.log(newArr);
// console.log(newArr);



// // Math.sqrt
// // task7
// // Вычисление квадратного корня из массива чисел.

// const arr =[4,16,81,121];
// let newArr = arr.map((number)=> Math.sqrt(number))
// console.log(newArr);



// // filter
// const arr =[4,16,-81,121,-6];
// let positiveNums = arr.filter((elements)=> elements>0)
// console.log(positiveNums);
// // Ответ: positiveNums=[4,16,121]



// // task8
// // Используя метод filter сформировать 
// // массив из только четных чисел.
// const arr =[4,16,-81,121,-6];
// let odd = arr.filter((num)=>num%2===0)
// console.log(odd);


// // // task9
// // Добавить в новый массив только те объекты, 
// // у которых длинное имя (больше 4 букв).
// // [ {name: "Roza", age: 40}, 
// // {name: "Rasul", age: 30}, 
// // {name: "John", age: 25},
// // {name: "Lyudmila", age: 60}]);

const arr =[ {name: "Roza", age: 40}, 
{name: "Rasul", age: 30}, 
{name: "John", age: 25},
{name: "Lyudmila", age: 60}];
let longName = arr.filter((elem)=>elem.name.length>4).map((elem)=> elem.name)
console.log(longName);

