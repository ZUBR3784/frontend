// class Dog{
//     addName(name){
//         this.name = name;
//     }
// }

// const dog1 = new Dog();
// const dog2 = new Dog();

// dog1.addName('Rex');
// dog2.addName('Sharik');

// console.log(dog1,dog2);



// // constructor

// class Dog{
//     constructor(name, age){
//         this.name= name;
//         this.age = age;
//     }

//     bark(gaw){
//         this.dogsBark = gaw;
//     }
// }

// const dog1 = new Dog('Rex', 3);
// const dog2 = new Dog('Sharik', 4)
// console.log(dog1,dog2);

// dog1.bark('GAW GAW')
// console.log(dog1);



// // task 1

// class Users{
//     constructor(name,userName,age){
//         this.name=name;
//         this.userName=userName;
//         this.age=age
//     }

//     addAger(age){
//         this.age++;
//     }

//     changeUserNames(newName){
//         this.userName=newName;
//     }

// }

// const vova = new Users('vova','ZUBR',28);
// vova.addAger()
// vova.changeUserNames('Dima')
// console.log(vova);





// // task 2

// class Products{
//     constructor(title,price,count){
//         this.title=title;
//         this.price=price;
//         this.count=count;
//     }

//     change_price(newPrice){
//         try{
//             if (newPrice<0) {
//                 throw new Error('Цена не может быть отрицательной');
//             } else {
//                 this.price=newPrice;
//             }
//         }
//         catch(e){
//             console.log(e);
//         }
//     }

//     sale(discoun_percent){
//         const discount = this.price*discoun_percent/100;
//         this.price -= discount;
//     }

//     change_count(count){
        

//         try {
//             this.count--;
//             if (this.count<=0) {
//                 throw new Error('Товар закончился');

//             }

//         } catch (error) {
//             console.log(error);
//         }
//     }

// }

// const carBMW = new Products("BMW",40000,1);
// carBMW.sale(30);
// carBMW.change_price(-1);
// carBMW.change_count()
// console.log(carBMW);



// // task 3

// class Tringle{
//     constructor(a,b,c){
//         this.a=a;
//         this.b=b;
//         this.c=c;
//     }

//     getPerimeter(a,b,c){
//         try {
//             if ( this.a*this.b*this.c===0 || typeof this.a !=='number' || typeof this.b !=='number' || typeof this.c !=='number') {
//                 throw new Error('параметры треугольника заданы не верно')
//             } else {
//                 const perimeter = this.a+this.b+this.c;
//                 console.log(perimeter);
//             }
//         } catch (error) {
//             console.log(error);
//         }
//     }
// }

// const tr1= new Tringle(1,6,7);

// tr1.getPerimeter();
// console.log(tr1);






// // task 4

// class BankAccuont{
//     constructor(balance, accuontNumber){
//         this.balance = balance;
//         this.accuontNumber=accuontNumber;

//     }
//     addMoney(moneyToAdd){
//         this.balance+=moneyToAdd;

//     }
//     getMoney(moneyToGet){
//         try {
//             if (this.balance < moneyToGet) {
//                 throw new Error('У вас не хватает денег')
//             } else {
//                 this.balance-=moneyToGet;
//             }
//         } catch (error) {
//             console.log(error);
//         }
        
//     }
//     checkMoney(){
//         console.log(this.balance);
//     }
// }
// const myMoney = new BankAccuont(0,1);
// myMoney.addMoney(500);
// myMoney.getMoney(300);
// myMoney.checkMoney()
// console.log(myMoney);


// // task 5

// class Student{
//     constructor(name,age,emale){
//         this.name = name;
//         this.age = age;
//         this.emale = emale;
//         this.grades = [];
//     }
//     addGrades(grade){
//         try {
            
//             if (grade < 0 || grade > 100 || typeof grade !== 'number') {
//                 throw new Error("Такой оценки нет!")
//             } else {
//                 this.grades.push(grade);
//             }
//         } catch (error) {
//             console.log(error);
//         }
        

//     }

//     getAwerageGrade(){
//         const sum = this.grades.reduce((accum, curent)=>accum+curent);
        
//         const awerage = sum / this.grades.length;
        
//         console.log(Math.ceil(awerage));/*округляет число в сторону ближ целого */
//         console.log(Math.round(awerage));/*округляет число в сторону большего */
//         console.log(Math.floor(awerage));/*округляет число в сторону меньшего */
//     }
// }

// const vova = new Student('Vova',28,'sdhae');
// const dima = new Student('Dima',38,'fmxf',1);
// const katya = new Student('Katya',18,'vnxfn',3);
// const rima = new Student('Rima',45,'dtuou',2);

// vova.addGrades(70);
// vova.addGrades(30);

// vova.getAwerageGrade();

// console.log(vova);


class ShoppingCart {
    constructor(){
        this.items = [];
        this.totalPrice = 0
    }
    addItem(product){
        try {
            if (typeof product ==='object' && product.hasOwnProperty('name') && product.hasOwnProperty('price')) {/* провер:1. есть ли такой ключ внутри obj?*/
                this.items.push(product);
                this.totalPrice += product.price;

            } else {
                throw new Error('Не является допустимым объектом')
            }
        } catch (error) {
            console.log(error);
        }

    }
    removeItem(product){
        try {
            if (typeof product ==='object' && product.hasOwnProperty('name') && product.hasOwnProperty('price')) {
                const index = this.items.findIndex(elemOfArr =>elemOfArr.name === product.name && elemOfArr.price === product.price)/* возвр инд елемента масс данные которого совпад с искомыми данными, если таких нет вернёт -1 */
                if (index != -1) {
                    this.items.splice(index, 1);/*удаляет елем из масс по индексу*/
                    this.totalPrice -= product.price;
                } else {
                    throw new Error('Нет такого товара')
                }

            } else {
                throw new Error('Не является допустимым объектом')
            }
        } catch (error) {
            console.log(error);
        }

    }
}

const myCar = new ShoppingCart();
myCar.addItem({name: 'bmw',price: 40000});
myCar.addItem({name: 'audi',price: 80000});
// console.log(myCar);
myCar.removeItem({name:'audi',price:80000});
console.log(myCar);


