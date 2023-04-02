// // JSON -format
// // JSON -js object notation 
// // JSON - для преобразов объекта в строку и обратн
// // stringify, parse - методы

// // stringify-преобр в строку

// const person = { name: "Joe", age: 25 };
// const personString = JSON.stringify(person);
// console.log(personString);
// console.log(typeof personString);

// // parse-преобр в объект

// const newPerson = JSON.parse(personString);
// console.log(newPerson, typeof newPerson);


// const game={level: 5, type:'hard'};
// const gameString = JSON.stringify(game);
// localStorage.setItem('infoAboutGame', gameString);

// const newGameStr= localStorage.getItem('infoAboutGame');
// const newGame = JSON.parse(newGameStr);
// console.log(newGame);



// // task1
// // У нас есть строковый массив с числами. 
// // Используя JSON преобразуйте эту строку в массив, 
// // добавьте туда пару чисел и добавьте в localStorage.

// const numbers='[1,2,3]';
// const arrNum=JSON.parse(numbers)
// arrNum.push(4,5);
// localStorage.setItem('num',JSON.stringify(arrNum))



// task2
// Напишите две функции writeLocalStorage и readLocalStorage. 
// Функции должны записывать и считывать обьекты в localStorage 
// соответственно.


const array= [1,3,5,7,9];
const pers={name:'Joe',age:30,gender:'male'}
const num =1

function writeLocalStorage(key,item) {
    const obj =JSON.stringify(item);
    localStorage.setItem(key,obj);

}

function readLocalStorage(key) {
    const getObj=localStorage.getItem(key);
    const newObj =JSON.parse(getObj);
    return newObj;
}


writeLocalStorage('array',array);
writeLocalStorage('pers',pers);
writeLocalStorage('numbers',num )

// function readLocalStorage(key) {       та же функц только с проверкой налич запрашив ключа в LocalStorage 
//     const object = localStorage.getItem(key);
//     if (object) {
//       const value = JSON.parse(object);
//       return value;
//     } else {
//       return null;
//     }
//   }
  
  const newNumbers = readLocalStorage("nu");
  console.log(newNumbers);
  
//   const sum = newNumbers.reduce((acc, current) => acc + current);
//   console.log(sum);
  