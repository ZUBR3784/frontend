// let name = "Ilya";
// alert( `hello ${1}` ); 
// alert( `hello ${"name"}` ); 
// alert( `hello ${name}` );

// let i = 3;
// while (i) {
//   alert( i-- );
// }

// let i = 0;
// while (++i < 5) alert( i );

// let i = 0;
// while (i++ < 5) alert( i );

// for (let i = 0; i < 5; ++i) alert( i );

// for (let i = 0; i < 5; i++) alert( i );

// for (let i = 2; i <= 10; i++) {
//    if(i%2==0){
//     alert(i)
//    }  
// }

// let i =0;
// while (i<3) {
//     alert(`number ${i}!`)
//     i++
// }


// for (let i = 0; i < 100; i++) {
//    let a = prompt("Введите число больше 100")
//     if (a<100) {
//         alert("Введите ещё раз")
//     } 
//     else{console.log("ok");
// break}
// }



// // Напишите код, который выводит все простые числа из интервала от 2 до n.
// let n = 10;
// for (let j = 1; j < n; j++) {
//   let sum =0;
//   for (let i = 1; i <= n; i++) {
//     if (j % i == 0) {
//       sum++;
//     }
//   }
//   if (sum == 2) {
//     console.log(j);;
//   } 
// }




let fruits = ["Яблоки", "Груша", "Апельсин"];
let shoppingCart = fruits;
shoppingCart.push("Банан");
alert( fruits.length );




// // Давайте произведём 5 операций с массивом.
// // Создайте массив styles с элементами «Джаз» и «Блюз».
// // Добавьте «Рок-н-ролл» в конец.
// // Замените значение в середине на «Классика». Ваш код для поиска значения в середине должен работать для массивов с любой длиной.
// // Удалите первый элемент массива и покажите его.
// // Вставьте Рэп и Регги в начало массива.

// let styles = ["Джаз","Блюз"]
// styles.push("Рок-н-ролл")
// if (styles.length%2 !=0 ) {
//   styles[(styles.length-1)/2]="Классика"
// }else{styles[styles.length/2]="Классика"}
// alert( styles.shift() );
// styles.unshift("Рэп", "Регги")

// console.log(styles);



// let arr = ["a", "b"];// ????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????
// arr.push(function() {// ????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????
//   alert( this );// ????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????
// });// ????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????
// arr[2](); // ????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????



// // Напишите функцию sumInput(), которая:
// // Просит пользователя ввести значения, используя prompt и сохраняет их в массив.
// // Заканчивает запрашивать значения, когда пользователь введёт не числовое значение, пустую строку или нажмёт «Отмена».
// // Подсчитывает и возвращает сумму элементов массива.
// // P.S. Ноль 0 – считается числом, не останавливайте ввод значений при вводе «0».

// function sumInput() {
//   let array =[]
//   let sum=0
//   for (let i = 0; i <=array.length; i++) {
//    let num = prompt( "введите значения");
//     if (num === "" || num === null  || !isFinite(num)) {
//       break
//     }else{
//       array.push(+num);
//       sum+= +num;
//       console.log(array);}
//      }
//   return sum
// }
// alert(sumInput())
    



// На входе массив чисел, например: 
// arr = [1, -2, 3, 4, -9, 6].
// Задача: найти непрерывный подмассив в arr, 
// сумма элементов в котором максимальна.
// Функция getMaxSubSum(arr) должна возвращать эту сумму.
// Например:
// getMaxSubSum([-1, 2, 3, -9]) == 5 (сумма выделенных
//    элементов)
// getMaxSubSum([2, -1, 2, 3, -9]) == 6
// getMaxSubSum([-1, 2, 3, -9, 11]) == 11
// getMaxSubSum([-2, -1, 1, 2]) == 3
// getMaxSubSum([100, -9, 2, -3, 5]) == 100
// getMaxSubSum([1, 2, 3]) == 6 (берём все)
// Если все элементы отрицательные – ничего не берём
// (подмассив пустой) и сумма равна «0»:
// getMaxSubSum([-1, -2, -3]) = 0
// Попробуйте придумать быстрое решение: O(n2),
//  а лучше за О(n) операций.

// let arr = [1, -2, 3, 4, -9, 6]
// function getMaxSubSum(arr) {
//   let maxSum = 0
//   let newSum = 0;
//   for (let i = 0; i <= arr.length; i++) {
//     newSum+=arr[i];
//     if (maxSum<newSum) {
//       maxSum=newSum;
//     }
//     if (newSum<0) {
//         newSum = 0;  
//     }
//   }
//   return maxSum
// }
// alert(getMaxSubSum(arr))


// 5 > 4
// "ананас" > "яблоко"
// "2" > "12"
// undefined == null
// undefined === null
// null == "\n0\n"
// null === +"\n0\n"


// alert( null || 2 || undefined );

// alert( alert(1) || 2 || alert(3) );

// alert( 1 && null && 2 );

// alert( alert(1) && alert(2) );

// alert( null || 2 && 3 || 4 );


// // Напишите условие if для проверки,
// // что переменная age находится в диапазоне
// // между 14 и 90 включительно.
// // «Включительно» означает, что
// // значение переменной age может быть равно 14 или 90.
// let age = 14
// if (age>=14 &&age<=90) {
//     console.log("true");
// }


// Напишите условие if для проверки,
// что значение переменной age НЕ находится
// в диапазоне 14 и 90 включительно.
// Напишите два варианта: первый с использованием оператора НЕ !,
// второй – без этого оператора.
// let age = 100
// if (age<14 || age>90) {
//     console.log("true");
// }

// if (-1 || 0) alert( 'first' );
// if (-1 && 0) alert( 'second' );
// if (null || -1 && 1) alert( 'third' );


// // Напишите код, который будет спрашивать логин с помощью prompt.
// // Если посетитель вводит «Админ», то prompt запрашивает пароль,
// // если ничего не введено или нажата клавиша Esc – показать «Отменено»,
// // в противном случае отобразить «Я вас не знаю».
// // Пароль проверять так:
// // Если введён пароль «Я главный», то выводить «Здравствуйте!»,
// // Иначе – «Неверный пароль»,
// // При отмене – «Отменено».

// let login = prompt("Введите логин");
// if (login === "Админ") {
//     let password = prompt("Введите пароль")
//     if (password === "Я главный") {
//         alert("Здравствуйте!") 
//     }
//     else if (password === ""|| password === null) {
//         alert("Отменено")  
//     } 
//     else{
//         alert("Неверный пароль") }   



// } else if(login === "" || login === null){
//     alert("Отменено")
// }else{
//     alert("Я вас не знаю")
// }


// if ("0") {
//     alert( 'Привет' );
//   }


// // Используя конструкцию if..else, напишите код,
// // который будет спрашивать: „Какое «официальное» название JavaScript?“
// // Если пользователь вводит «ECMAScript», 
// // то показать: «Верно!», в противном случае – отобразить: «Не знаете? ECMAScript!»
// let ofName = prompt("Какое «официальное» название JavaScript?");
// if (ofName === "ECMAScript") {
//     alert("Верно!")
// } else {
//     alert("Не знаете? ECMAScript!")
// }




// // Используя конструкцию if..else, напишите код, который получает число через prompt,
// //  а затем выводит в alert:
// // 1, если значение больше нуля,
// // -1, если значение меньше нуля,
// // 0, если значение равно нулю.
// // Предполагается, что пользователь вводит только числа.
// let num = prompt("Введите число", 0);
// let res = (num > 0) ? '1':
// (num<0) ? '-1':
// '0';
// alert(res)



// // Перепишите конструкцию if с использованием условного оператора '?':
// // let result;
// // if (a + b < 4) {
// //   result = 'Мало';
// // } else {
// //   result = 'Много';
// // }


// let result =(a + b < 4) ? 'Мало':'Много';



// // Перепишите if..else с использованием нескольких операторов '?'.
// // Для читаемости рекомендуется разбить код на несколько строк.
// // let message;
// // if (login == 'Сотрудник') {
// //   message = 'Привет';
// // } else if (login == 'Директор') {
// //   message = 'Здравствуйте';
// // } else if (login == '') {
// //   message = 'Нет логина';
// // } else {
// //   message = '';
// // }

// let message=(login == 'Сотрудник')?'Привет':
// (login == 'Директор')?'Здравствуйте':
// (login == '')?'Нет логина':
// '';