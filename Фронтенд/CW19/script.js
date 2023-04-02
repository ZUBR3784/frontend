// try catch - обработка исключений(ошибки)
// try
// catch

// try {
//   throw new Error("Это ошибка!!!!!");
// } catch (e) {
//   console.error(e);
// }

// console.log("Hello!!!!");

// try {
//     const element = document.querySelector("#id");
//     console.log(element.innerText);
//   } catch (e) {
//     console.log("Такого элемента нет");
//   }



// function createArray(element) {
//     try {
//       return Array.from(element);
//     } catch {
//       return [];
//     }
//   }

// const str = 'vova';
// const obj = ;
// console.log(createArray(str));
// console.log(createArray({a:1,b:2,c:3}));




// // Создать функцию, которая в качестве аргумента получает 
// // селектор и возвращает содержащийся в этом элементе текст. 
// // Если такого элемента нет, то функция должна возвращать null.

// function getText(selector) {
//     try {
//         let p = document.querySelector(selector);
//         return p.innerText;
//     } catch {
//         return null;
//     }
// }
// console.log(getText('.text'));
// console.log(getText('div'));



// // Создать функцию, save_call. Данная функция должна получать 
// // функцию в качестве аргумента и вызывать ее, если ее нет, 
// // то выводить сообщение в консоль “Такой функиции нет”

// const num = 1
// function save_call(func) {
//     try {
//         if (typeof func === "function") {
//             return func()
//         } else {
//             throw new Error("Такой функиции нет")
//         }
//     } catch (Error){
//         console.error(Error);
//     }
// }
// save_call(num)
// function log() { 
//     console.log("Second Func");
// }



// // Изменяем функцию, созданную в первом задании и дорабатываем ее. 
// // При возникновении ошибки функция должна вызвать исключение 
// // с текстом “Элемента с селектором <указанный селектор> нет в документе”.

// function getText(selector) {
//     try {
//         let p = document.querySelector(selector);
//         if (p) {
//             console.log(p.innerText);
//         } else {
//             throw new Error (`Элемента с селектором ${selector} нет в документе`)
//         }
//     } catch (e) {
//         console.log(e);
//     }
// }
// getText('p');





// // Написать функцию, который запрашивает пост с 
// // несуществующим id и проверяет код ответа. 
// // В случае кода ошибки пользователя вывести 
// // сообщение об отсутствии такого поста.

// async function getPost(id) {
//     try {
//       const response = await fetch(
//         `https://jsonplaceholder.typicode.com/posts/${id}`
//       );
//       if (response.status !== 200) {
//         throw new Error("Нет такого поста!!");
//       } else {
//         const post = await response.json();
//         console.log(post);
//       }
//     } catch (e) {
//       console.error(e);
//     }
//   }
  
  



// //   Создать функцию custom_fetch. 
// //   Данная функция получает ссылку и callback функцию. 
// //   Если по указанной ссылке получилось отправить запрос и ответ с 
// //   кодом 200, то необходимо вызвать переданную функцию и в качестве 
// //   аргумента передать ответ сервера.


// const url ="https://jsonplaceholder.typicode.com/posts/1"
// async function custom_fetch(url, myFunc) {
//     try{
//         const response = await fetch(url);
//         if (response.status !== 200) {
//             throw new Error("Не правильный запрос!!");
//         } else {
//             const post = await response.json();
//             func(post);
//                   }
//     } catch (e) {
//         console.error(e);
//                 }
//               };


// function myFunc(post) {
//     console.log(post);
// }

// custom_fetch();








// async function custom_fetch(url, callback) {
//     try {
//      const response = await fetch(url)
//      if (response.status !== 200) {
//       throw new Error (`Owubka ${response.status}`);
//       }  else {
//         const obj = await response.json();
//         callback(obj)
//       }
//     } catch (e) {
//       console.error(e);
//     }
//   }
//   custom_fetch("https://jsonplaceholder.typicode.com/posts/2", response => {
//       console.log(response)
//   })
  
  