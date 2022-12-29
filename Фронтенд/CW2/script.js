// const old =prompt('how old are you?');
// console.log(+old * 365) 

// // const number1 =prompt('your number?');
// // console.log(+ number1 * + number1) 
// console.log(num ** 2);/*возвести во 2 степень */

// const numb =prompt('your number?');
// if (+numb%2==0) {
//     console.log('chetn')  
// } else {
//     console.log('nechetn')  
// }


// const arr =[1,2,3,4,5,12,[1,2,3]]
// arr.length
// arr.length/*длина масс */
// arr.push(8)/*добавл елем в конце масс, и возвр нов длинну масс */
// console.log(arr.pop)/*удаляет только последний элем масс, и возвр последн элем */
// arr.unshift('start')/*добавл елем в начале масс, и возвр нов длинну масс */
// arr.shift('start')/*удаляет елем в начале масс, и возвр нов длинну масс  */

// arr.length/*длина масс */
// arr.length/*длина масс */




// циклы
// for (let i = 0; i <= 9; i++) {
//     console.log(i)  
// }

// let i =0
// while(i<=9){
//     console.log(i) 
//     i++
// }

// let e =0
// do {
//     console.log(e)
//     i++
// }
// while(e<=9){
// }

// const arr =[1,5,-8,2,-6,1];
// for (let i = 0; i < arr.length; i++) {
//     if (arr[i]>0) {
//         console.log(arr[i]) 
//     }
    
// }
// const array = [1,7,5,4,3,2]
// for (let i = 0; i < array.length; i++) {
//         if (array[i]%2==0) {
//             console.log(array[i]) 
//         }
        
//     }

// const array = [15,8,4,2,4,7,12,35,45,58]
// for (let i = 1; i < array.length; i++) {
//             if (array[i]%3===0) {
//                 console.log(array[i]) 
//             }
//         }

// агрегация
// const array =[1,2,3,4]
// let sum =0;
// for (let i = 0; i < array.length ; i++) {
//     sum+=array[i]
// }
// console.log(sum);


// let sum =0;
// const array = [5,6,-2,1,-7,5]
// for (let i = 0; i < array.length; i++) {
//     if (array[i]>0) {
//         sum+=array[i]
//     }
// }
// console.log(sum);


// const array =[0,5,2,2,3,4,8]
// let sum =0;
// for (let i = 0; i < array.length; i++) {
//     if (array[i]===i) {
//         sum+=array[i]
//     }
// }
// console.log(sum);

const array = [1,5,4,7,2,3,4,5,6,7,4,5,6]
let sum =0;
let sum2 =0;
for (let i = 0; i < array.length; i++) {
    if (array[i]%2===0) {
        sum+=array[i]
    }else{sum2+=array[i]}
}
console.log(sum)
console.log(sum2)
if (sum>=sum2) {
    console.log(sum-sum2)
}else{console.log(sum2-sum); }
