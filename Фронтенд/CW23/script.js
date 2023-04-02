// const students = ["Yurii", "Vladimir", "Lilit"];
// const index = Math.floor(Math.random() * students.length);
// console.log(students[index]);

// function sayHi(start) {
//   console.log(
//     `${start}, my name is ${this.name} and I'm ${this.age} years old!`
//   );
// }

// const person1 = {
//   name: "Alisa",
//   age: 20,
//   //   sayhi: function () {
//   //     console.log(
//   //       `${start}, my name is ${this.name} and I'm ${this.age} years old!`
//   //     );
//   //   },
// };

// const person2 = {
//   name: "Joe",
//   age: 30,
//   // sayHi: sayHi
// };

// person1.sayhi();
// person2.sayHi();

// call, apply, bind

// call syntax - functionName.call(thisObj, arg1, arg2, ...)

// sayHi.call(person1, "Hello");
// sayHi.call(person2, "Hi");

// apply syntax = functionName.apply(thisObj, [arg1, arg2, ...])
// sayHi.apply(person1, ["Hello"]);
// sayHi.apply(person2, ["Hi"]);

// bind syntax -> const variable = functionName.bind(thisObj, arg1);
//                        variable( arg2,



// // Создайте объект со свойством value и методом, который умножает значение на заданный коэффициент. Создайте второй объект со свойством value и используйте метод call для вызова метода первого объекта с контекстом второго объекта, передавая коэффициент в качестве аргумента.Используйте так же apply для решения этой задачи.

// const obj1={
//     value:1,
//     myFunc: function myFunc(num) {
//         this.value*=num;
//     }
// }
// const obj2 = {
//     value:2,
// }
// obj1.myFunc.call(obj2,4);
// console.log(obj2);

// obj1.myFunc.apply(obj2,[4])
// console.log(obj2);



// // Создайте объект со свойством name и метод, выводящий приветственное сообщение с помощью аргументов. Как аргумент принимает приветственное слово и знак препинания в конце предложения. Так же создайте новый обьект со свойством  name. Создайте новую функцию с помощью bind, которая имеет второй объект в качестве значения this и приветственное слово как аргумент, и вызовите новую функцию где будете передавать второй аргумент -  знак препинания в конце предложения.

// const obj = {
//     name: "Viktoriia",
//     func: function (start, sign) {
//         console.log(`${start}, ${this.name}${sign}` );
//     }
// }

// const newObj = {
//     name: "Daria"
// }

// const newFunk = obj.func.bind(newObj, "Hi");

// newFunk("!")



//  Правила для формирования this:
// defualt binding - sayHi();
//implicit binding - obj.sayHi(); 
// explicit binding - call, apply 
// New binding - bind

