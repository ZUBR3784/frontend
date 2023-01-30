// const ul = document.querySelector('#test');
// const li = document.querySelector('li');
// const li2 = document.querySelector('li');

// li.innerText= 'hello 1';
// li2.innerText = 'hello 2';

// ul.append(li);
// ul.appendChild(li2);


// const div = document.createElement('div');
// const h2 = document.createElement('h2');
// const p = document.createElement('p');

// h2.innerText='zhlabo W O';
// p.innerText ='Good evening'

// div.append(h2,p)

// document.body.append(div);


// // 1)создаете div
// // 2)В этот див добавляете заголовок с вашим ФИО
// // 3)Добавляем совет внутри дива (заголовок, параграф и тд)


// const img = prompt('Введите ссылку на картинку:');
// const a = prompt('Введите ссыску на article:');

// const newImg =document.createElement('img');
// newImg.setAttribute('src',img);

// const newA =document.createElement('a');
// newA.setAttribute('href',a);
// newA.innerText = 'Ссылочка)';

// document.body.append(newA,newImg);





// // // ??????????????????????????????????????????????????????????

// // // Измените решение так, чтобы при нажатии на картинку
// // //  перейти на страничку статьи
// const imgSrc = prompt("Source of your image:");
// const aSrc = prompt("Source of your article:");

// const newImg = document.createElement("img");
// newImg.setAttribute("src", imgSrc);

// const newA = document.createElement("a");
// newA.setAttribute("href", aSrc);
// newA.append(newImg);

// document.body.append(newA);

// // // ??????????????????????????????????????





// // Создать цикл кот созд для кажд объекта ссылку и добавл его в див

// const links = [
//     {
//       title: "Google",
//       link: "https://google.com/",
//     },
//     {
//       title: "Yahoo!",
//       link: "https://yahoo.com/",
//     },
//     {
//       title: "Baidu",
//       link: "https://baidu.com/",
//     },
//     {
//       title: "Yandex(dzen)",
//       link: "https://dzen.ru/",
//     },
//     {
//       title: "Bing",
//       link: "https://bing.com/",
//     },
//   ];

// const root = document.createElement('div');
// for (let i = 0; i < links.length; i++) {
//     let newA = document.createElement('a');
//     newA.setAttribute('href', links[i].link)
//     newA.innerText = links[i].title;
//     const br = document.createElement('br');
//     root.append(newA, br);
    
// }
// document.body.append(root)


  



// const cars = [
//     {
//       title: "BMW",
//       price: "40000",
//       count: "15",
//     },
//     {
//       title: "Toyota",
//       price: "25000",
//       count: "13",
//     },
//     {
//       title: "Ford",
//       price: "15000",
//       count: "26",
//     },
//     {
//       title: "Chevrolet",
//       price: "50000",
//       count: "60",
//     },
//     {
//       title: "Mercedes",
//       price: "12000",
//       count: "20",
//     },
//   ];
  
//   for (let i = 0; i < cars.length; i++) {
//     let carList = document.createElement('ol')

//     let title = document.createElement('li')
//     title.innerText = cars[i].title;

//     let price = document.createElement('li')
//     price.innerText = cars[i].price;

//     let count = document.createElement('li')
//     count.innerText = cars[i].count;

//     carList.append(title,price,count);
//     document.body.append(carList)
    
//   }


// Получить для кажд объекта: beagle's age is 4
// const dogs = [
//     {
//       breed: "beagle",
//       age: 4,
//     },
//     {
//       breed: "labrador",
//       age: 6,
//     },
//     {
//       breed: "yorkie",
//       age: 2,
//     },
//   ];

//   for (let i = 0; i < dogs.length; i++) {
//     let string = document.createElement('p')

//     let aboutDog = dogs[i].breed+ "'s" + " " + " age is " + dogs[i].age;
//     string.innerText = aboutDog;
    
//     document.body.append(string)
//   }
  
