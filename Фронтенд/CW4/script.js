// const person = {
//     name: "Joe",
// };

// person.age = 46;

// person["last name"]= "Test";
// person.name = "Alex"
// // delete
// delete person.age;

// console.log(person);



// function createObj(str, num) {
//     let res={}
//     for (let i = 0; i < num; i++) {
//         res[str+i]=i 
//     }
//     return res
// }
// console.log(createObj("cat",3));




// 1. Напишите функцию, которая в качестве аргументов
//  получает два числа и возвращает массив чисел 
//  со значениями от меньшего числа к большему.
// Пример: foo(1,6) => [1,2,3,4,5,6]
// function x(num,num2) {
//     let res =[]
//     for (let i = num; i <= num2; i++) {
//         res[i]=i
//     }
//     return res
// }
// console.log(x(1,9));

// 2. Напишите функцию, которая в качестве аргументов
//  получает два числа и возвращает массив чисел со значениями
//   от большего числа к меньшему.
//    Пример: foo(1,6) => [6,5,4,3,2,1]

//    function y (num,num2) {
//     let res =[]
//     if (num>num2) {
//         for (let i = num; i >= num2; i--) {
//         res.push(i)
//     }
//     return res
//     }else{
//         for (let i = num2; i >= num; i--) {
//             res.push(i)
//         }
//         return res
//     }
    
// }
// console.log(y(1,10));





// 3. В программе объявлена переменная list, 
// которая содержит массив чисел. Используя 
// цикл посчитайте сумму чисел и выведите в консоль.
// const list = [5,6,8,9,2]

// let list=[5,6,8,9,2]
// let sum =0
// for (let i = 0; i < list.length; i++) {
//     sum+=list[i]
// } 
// console.log(sum);

   


// 4. В программе объявлена переменная list,
//  представляющая массив положительных и отрицательных 
//  численных значений. Используя цикл, выведите в консоль 
//  сумму положительных чисел.
// const list = [5,6,8,9,2,-6,-5,-8,-2]

// let list=[5,6,8,9,2,-6,-5,-8,-2]
// let sum =0
// for (let i = 0; i < list.length; i++) {
//     if (list[i]>0) {
//          sum+=list[i]
//     }
   
// } 
// console.log(sum);


// 5. В программе объявлена переменная list,
//  которая содержит массив чисел. Используя 
//  цикл посчитайте разность суммы всех четных 
//  чисел и суммы всех нечетных.
// const list = [1,2,3,4,5,6,8,10]


// let list=[1,2,3,4,5,6,8,10]
// let sum = 0, sum2 = 0, res = 0
// for (let i = 0; i < list.length; i++) {
//     if (list[i]%2==0) {
//          sum+=list[i]
//     }else{sum2+=list[i]}
// } 
// if (sum>=sum2) {
//      res = sum-sum2
// } else {
//      res = sum2-sum
// }
// console.log(res);




// 6.Напишите функцию, которая в качестве аргумента
//  получает массив из чисел и возвращает максимальное 
//  число из массива.

// let arr =[1,4,2,5]
// function maxx(arr) {
//     let max=arr[0];
//     for (let i = 1; i < arr.length; i++) {
//         if (arr[i]> max) {
//             max=arr[i]
//         }
//     }
//     return max
// }
// console.log(maxx(arr));



// 7. Напишите функцию, которая в качестве аргумента получает 
// массив из чисел и возвращает объект со свойствами min, max,
//  avg(среднее значение) с соответствующими значениями по массиву.

// let arr =[-5,1,8,5,2]
// function func (arr) {
//     let obj={}
//     let max=arr[0],min=arr[0],sum = arr[0]
//     for (let i = 1; i < arr.length; i++) {
//         if (arr[i]< min) min=arr[i]
//         if (arr[i]> max) max=arr[i]
//         sum+=arr[i]
//     }

//     let avg = sum/arr.length;
//     obj.maximum = max;
//     obj.minimum = min;
//     obj.midle = avg

//     return obj
// }
// console.log(func(arr));


let x = 0
for (let i = 0; i < 10; i++) {
    x+=i
    
}
console.log(x);
