// // func expression
// const sayHi = function (){
//     console.log('Hi');
// }
// sayHi();






// // func declaration
// h1();

// function h1() {
//     console.log('hi');
// }
// h1();


// // arrow func
// const sayHello = () => console.log('Hi');
// sayHello();
// // return
// const square =(number)=>{  /*number- callback */
//     let res =number** 2;
//     return res;
// }




// // Написать функцию, которая в качестве первого
// // аргумента массива, а второго - функция. Вызывает 
// // принятую функцию для каждого элемента массива.

// const workWithArr = function (array,callback) {
//     return callback(array)
// }

// function sumOfArray(arr) {
//     let sum =0;
//     for (let i = 0; i < arr.length; i++) {
//         sum += arr[i]; 
//     }
//     return sum;
// }
// console.log(workWithArr([1,2,3,5], sumOfArray));



// // Добавляем новую функцию, которая возвращает новый массив 
// // со всеми нечетными числами из оригинального массива.



// function arrWithOdd(arr) {
//     let res =[];
//     for (let i = 0; i < arr.length; i++) {
//         if (arr[i]%2 !==0) {
//             res.push(arr[i])
//         }
//     }
//     return res
// }
// console.log(workWithArr([1,2,3,5], arrWithOdd));




// // Добавляем новую функцию, которая возвращает новый массив 
// // со всеми нечетными числами из оригинального массива.
// // новая функция, которая как аргумент принимает callback 
// // и возвращает сумму нечетных чисел

// function arrWithNechet(callback) {
//     let res =[];
//     let sum =0;
//     for (let i = 0; i < arr.length; i++) {
//         if (arr[i]%2 !==0) {
//             res.push(arr[i])
//             sum+=arr;
//         }
//     }
//     return sum
// }
// console.log(arrWithOddSum([1,2,3,5], arrWithNechet));




// event - событие
// event listener - обработчик события

// // клик
// const btn =document.querySelector("button");
// btn.onclick = function (){
//     alert("Hi")
// }



// // При клике на кнопку число в параграфе увеличивается
// // на единицу.
// const num = document.querySelector('p');
// const btn =document.querySelector("#increment");
// const btn2 =document.querySelector("#decrement");

// let numOfP = +num.textContent
// btn.onclick = function(){
//     numOfP+=1;
//     num.innerText = numOfP
// }


//     // При клике на кнопку с id decrement число в параграфе
//     //  уменьшается на единицу.

// btn2.onclick = function(){
//     numOfP-=1;
//     num.innerText = numOfP    

// }





// // печатать буквы в параграфе
// const p = document.querySelector('p');
// let pContent = p.textContent;
// addEventListener("keydown", (event)=> {
// pContent+=event.key;
// p.innerText=pContent
// } )



// На основе этого массива создать и добавить 
// внутри body параграфы

// 2)При клике на параграф текст должен меняться 
// на звездочки


const array = [
    "This is some text",
    "You can use event listener",
    "Never give up",
    "Future frontend developers",
  ];

  for (let i = 0; i < array.length; i++) {
    let newP = document.createElement('p');
    newP.innerText = array[i];
    document.body.append(newP);
    newP.onclick = ()=>{
        newP.innerText = "";
        for(let j = 0; j < array[i].length; j++) {
        newP.innerText += '*';
        }
    }

}  

  