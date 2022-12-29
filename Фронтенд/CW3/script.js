// const person ={
//     name: "Joe",
//     lastname:"Lenon",
//     age: 40,
// }


// const product ={
//     name: "book",
//     price: 250,
// }

// bracket notation
// console.log(product['name']);
// console.log(product['price']);

// // dote notation
// console.log(product.name);
// console.log(product.price);

// // bracket notation vs dote notation??????????

// const products = [
//     {
//       title: "Nike",
//       price: 300,
//       type: "shoe",
//     },
//     {
//       title: "Puma",
//       price: 450,
//       type: "shoe",
//     },
//     {
//       title: "Channel",
//       price: 1200,
//       type: "bag",
//     },
//     {
//       title: "BMW",
//       price: 7000,
//       type: "car",
//     },
//   ];
  

// for (let i = 0; i < products.length; i++) {
//     //интерполяция
//   console.log(
//     `${products[i].title}, price is ${products[i].price}, product's type is ${products[i].type}`
//   );
//   конкатенация
//   products[i].title + ", price is " + products[i].price + ", product's type is " + products[i].type


// let res =0;
// for (let i = 0; i < products.length; i++) {
//     if (products[i].price>1000) {
//         console.log(products[i].title);
//     }
//     res+= products[i].price
// }
// console.log(res)

// for (let i = 0; i < products.length; i++) {
//     if (products[i].type==="shoe") {
//                 console.log(products[i].title);}
// }



// деструктуриззация
// const product ={
//     name: "book",
//     price: 250,
// };

// let{name} = product; /* */
// let{price} = product; 

// console.log(name);
// console.log(price);

// for (let i = 0; i < products.length; i++) {
//     let{title,price} = products[i]
//     console.log(`${title},${price -((price *5)/100)}`);
    
// }
// let arr=[];
// for (let i = 0; i < products.length; i++) {
//     if (products[i].price < 1000) {
//         arr.push(products[i])
//     }
    
// }
// console.log(arr);


// Function

// 1.Function declaration
// 2.Function expression
// 3. Arrow function 

// function number(parametr)
// function number(num){
//     console.log(num ** 4);
// }


// (argument)
// number(2);
// number(4);



// let num = prompt("Your namber..")
// function isEven(num){
//     if (num%2===0) {
//         console.log("YES");
//     }else{console.log("NO");}
// }
// isEven(num)




// function number(num){
//     console.log(num ** 4);
// }
// number(2);

// function number2(num) {
//     return num ** 4
// }


// function func(base, exponent) {
//     let res = 1
//     for (let i = 0; i < exponent; i++) {
//         res*=base  
//     }
//     return res
// }
// console.log(func(2,3));


// function func(one,two) {
//     if (one>=two) {
//         return one
//     }else{
//         return two}
// }
// console.log(func(4,5));

// function func(one,two){
// one > two ? console.log(one) : console.log(two); /* ? - если предидущее услов выполн то...; : - else*/
// }



// function func(num) {
//     const arr = []
//     for (let i = 0; i < num; i++) {
//         arr.push(i)
//     }
//     return arr
// }
// // console.log(func(10));
// let newArr = func(5);
// let res = 0;
// for (let i = 0; i < newArr.length; i++) {
//     res+=newArr[i];
// }

// console.log(newArr);
// console.log(res);


function creater(str,num) {
    let resArr = []
    for (let i = 0; i < num; i++) {
        resArr.push(str)
    }
    return resArr
}
console.log(creater("cat",5));

