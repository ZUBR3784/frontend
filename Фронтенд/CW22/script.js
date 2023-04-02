// task1
// Создать класс User со свойствами name, username и role.

// task2
// Добавить метод change_role, который перед изменением роли проверяет, является ли указанное значение одним из массива ‘manager’, ‘admin’, ‘root’, ‘guest’.

// task4
// Добавить свойство status, и метод change_status которое может принимать одно из предложенных значений online, offline, work.


// class User{
//     static users = [];
//     static validRoles = ['manager', 'admin', 'root', 'guest'];
//     static validStatus = ["online","offline", "work"];
//     constructor(name, username,role,status){
//         this.name=name;
//         this.username=username;
//         this.role=role;
//         this.status = status;
//         User.users.push(this);

//     }


//     change_role(newRole){
        
//         if (User.validRoles.includes(newRole)) {
//            this.role=newRole;
//         }else{
//             console.log('Такой роли не существует!!');
//         }
//     }


//     chang_status(newStatus){
//         if(User.validStatus.includes(newStatus)){
//           this.status = newStatus;
//           console.log("Okey")
//         } else {
//           console.log("no okey")
//         }
//       }





// }

// const obj = new User('Vova','Hacker)','student');
// obj.change_role('manager');
// console.log(obj);


// const objTwo = new User("Daria", "Green", "Static");
// console.log(User.users);
// const objSecond  = new User("Good", "Bad", "Full", "offline");
// console.log(objSecond);









// // getter - метод позвол получ дост к св-ву
// // setter - метод позвол измен  св-во

  


// class User {
//     constructor(firstName, lastName) {
//       this.firstname = firstName;
//       this.lastname = lastName;
//     }
//     get name() {
//       return `${this.firstname} ${this.lastname}`;
//     }
//     set name(newName) {
//       this.firstname = newName;
//     }
//   }
  
//   const student = new User("Joe", "Jonas");
//   // console.log(student.name);
//   student.name = "Georgih";
  
//   console.log(student.name);
  





//   set change_role(newRole) {
//     if (User.rolls.includes(newRole)) {
//         this.role = newRole;
//     } else {
//         console.log("Такой роли нет");
//     }
// }

// get showRole() {
//     return this.role;
// }



// set change_role(newRole) {
//     if (User.rolls.includes(newRole)) {
//         this.role = newRole;
//     } else {
//         console.log("Такой роли нет");
//     }
// }

// get showRole() {
//     return this.role;
// }




// // task
// // 1)Создать класс Product со свойствами title, price, count.
// // 2)Создать статическое свойство income, которое изначальное равно нулю.


// // task2
// // Создать метод sale. Которое уменьшает count на единицу. Если count уже равен нулю, то вызывается исключение. Если продажа прошла, то статическое свойство income должно увеличиться на цену товара.

// // task3
// // Создать статическое свойство items, которое хранит созданные экземпляры класса Product.

// // task4
// // Добавить getter и setter для свойства price. При добавлении идет проверка, что цена больше 0.



// class Product{
//     static income = 0;
//     static items =[];
//     constructor(title, price, count){
//         this.title = title;
//         this.price = price;
//         this.count = count;
//         Product.items.push(this);
//     }

//     sale(){
//         try {
//             if (this.count===0) {
//                 throw new Error('нет товара');
//             } else {
//                 this.count--
//                 Product.income+=this.price
//             }
//         } catch (error) {
//             console.log(error);
//         }
        
//     }



//     get showPrice() {
//         return `Цена товара: ${this.price} $`;
//     }
//     set change_price(newPrice) {
//         try {
//             if (newPrice > 0) {
//                 this.price = newPrice;
//             } else {
//                 throw new Error("Неверная цена");
//         }
//         } catch (e) {
//             console.log(e);
//     }
//     }

// }





// const car = new Product('BMW', 40000, 4);
// console.log(car);

// const book = new Product("Book", 100, 15)
// console.log(book);
// book.sale()
// console.log(book);
// console.log(Product.income);
// console.log(Product.items);





// // task
// // Создайте класс Book со свойствами title, author и yearPublished. Добавьте статическое свойство, где будут сохранены все экземпляры Book.  Добавьте статический метод listAuthors, который возвращает массив со  всеми именами авторов.

// class Book{
//     static books=[];
//     constructor(title, author, yearPublished){
//         this.title = title;
//         this.author = author;
//         this.yearPublished = yearPublished;
//         Book.books.push(this);
//     }

//     static listAuthors(){
//         const newArr = Book.books.map((x)=>{
//            return x.author

//         })

//         return newArr;

       
//     }

// }

// const maygli = new Book("Maygli", "Redijard", '1980');
// const bible = new Book("Bible", "I dont remember)", '100');
// const voinich = new Book("Voinich", "Roza", '1008');

//  console.log(Book.listAuthors()); 





// Создайте класс Vehicle со свойствами make, model и year. Добавьте статический метод isAntique, который принимает экземпляр Vehicle и возвращает true, если свойство year имеет возраст более 25 лет, и false в противном случае.
class Vehicle{
    constructor(make, model, year) {
        this.make = make;
        this.model = model;
        this.year = year;
    }
    static isAntique(arg) {
        let fullYear = new Date().getFullYear();
        let age = fullYear - arg.year
        return age > 25 
    }
}

const vehicle1 = new Vehicle("car", "porche", 1993)

console.log(Vehicle.isAntique(vehicle1));


